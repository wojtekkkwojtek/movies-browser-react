import { useEffect, useState } from 'react'
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/BigTile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { MiddleTile } from '../../../common/components/Tiles/MiddleTile'

import { useParams } from 'react-router-dom'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectMovieList,
    fetchExample,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} from './movieListSlice'

const MovieList = () => {
    // const isLoading = useSelector(selectLoading)
    const { error, loading, movieList } = useSelector(selectMovieList)
    console.log(error, loading, movieList)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    console.log(useParams())

    useEffect(() => {
        dispatch(fetchExample())
    }, [dispatch])

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                movieList &&
                movieList.map((movie) => (
                    <>
                        <MiddleTile
                            key={nanoid()}
                            onClick={
                                () => routeChange(movie.id)
                                // (window.location.href = `/movies-browser-react#/movie/${movie.id}`)
                            }
                            title={movie.title}
                            poster={movie.poster_path}
                            year={movie.release_date.slice(0, 4)}
                            rate={movie.vote_average}
                            score="/10"
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                        />
                    </>
                ))
            )}
        </Container>
    )
}

export default MovieList
