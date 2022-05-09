import React, { useEffect } from 'react'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Section } from '../../../common/components/Section'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, selectMovieList } from './movieListSlice'
import { Title } from '../../../common/components/Title'
import { Pagination } from "../../../common/components/Pagination"

const MovieList = () => {
    const { loading, movieList, error } = useSelector(selectMovieList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovieList())
    }, [])

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    const routeToMoviePage = (id) => {
        routeChange(id)
    }

    return (
        <React.Fragment>
        <Section>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading && <Title>Popular movies</Title>}
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
            {!error && !loading && <Pagination></Pagination>}
        </Section>
        </React.Fragment>    
    )
}

export default MovieList
