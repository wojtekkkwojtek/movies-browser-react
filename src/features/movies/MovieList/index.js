import React, { useEffect } from 'react'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieList, selectMovieList } from './movieListSlice'
import { Title } from '../../../common/components/Title'
import { Pagination } from '../../../common/components/Pagination'
import { useSearch } from '../../useSearch'
import { Section } from '../../../common/components/Section'

const MovieList = () => {
    const { loading, movieList, error } = useSelector(selectMovieList)

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovieList())
    }, [dispatch])

    const routeToMoviePage = (id) => {
        navigate(`/movie/${id}`)
    }

    const query = useSearch('search', location)

    const showTitle = () => (query ? `Search for "${query}"` : 'Popular movies')

    return (
        <>
            <Section>
                {error && !loading && <ErrorMessage />}
                {!error && loading && (
                    <>
                        <Title title={showTitle()} />
                        <Loader />
                    </>
                )}
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
                                votes={movie.vote_count}
                                genres={movie.genre_ids}
                                country={movie.production_countries}
                            />
                        </React.Fragment>
                    ))}
            </Section>
            {!error && !loading && <Pagination></Pagination>}
        </>
    )
}

export default MovieList
