import React, { useEffect } from 'react'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, selectMovieList } from './movieListSlice'
import { Title } from '../../../common/components/Title'
import { Pagination } from '../../../common/components/Pagination'
import { useReplaceQueryParameter, useSearch } from '../../useSearch'

const MovieList = () => {
    const { loading, movieList, error } = useSelector(selectMovieList)

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const search = useSearch('search', location)

    useEffect(() => {
        dispatch(fetchMovieList())
    }, [])

    // const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    const routeToMoviePage = (id) => {
        routeChange(id)
        // search('mmm')
    }

    const query = useSearch('search', location)

    const showTitle = () => (query ? `Search for "${query}"` : 'Popular movies')

    return (
        <React.Fragment>
            <Container>
                {error && !loading && <ErrorMessage />}
                {!error && loading && <Loader />}
                {!error && !loading && <Title title={showTitle()} />}
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
                                year={
                                    movie.release_date
                                        ? movie.release_date.slice(0, 4)
                                        : 'Unknown'
                                }
                                rate={movie.vote_average}
                                score="/10"
                                votes={movie.vote_count}
                                genres={movie.genre_ids}
                            />
                        </React.Fragment>
                    ))}
                {!error && !loading && <Pagination></Pagination>}
            </Container>
        </React.Fragment>
    )
}

export default MovieList
