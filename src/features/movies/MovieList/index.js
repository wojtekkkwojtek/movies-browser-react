import React from 'react'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieList } from './movieListSlice'
import { fetchMoviePage } from '../MoviePage/moviePageSlice'
import { Title } from '../../../common/components/Title'

const MovieList = () => {
    const dispatch = useDispatch()

    const { loading, movieList, error } = useSelector(selectMovieList)

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    const routeToMoviePage = (id) => {
        routeChange(id)
        dispatch(fetchMoviePage(id))
    }

    return (
        <Container>
            {error && !loading && <ErrorMessage />}
            <Title>Popular movies</Title>
            {!error && loading && <Loader />}
            {!error &&
                !loading &&
                movieList &&
                movieList.map((movie) => (
                    <React.Fragment key={movie.id}>
                        <Tile
                            isList
                            nonInList
                            key={nanoid()}
                            onClick={() => routeToMoviePage(movie.id)}
                            title={movie.title}
                            poster={movie.poster_path}
                            year={movie.release_date.slice(0, 4)}
                            rate={movie.vote_average}
                            score="/10"
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                        />
                    </React.Fragment>
                ))}
        </Container>
    )
}

export default MovieList
