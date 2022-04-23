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
import {
    setId,
    selectMoviePage,
    fetchMoviePage,
} from '../MoviePage/moviePageSlice'

const MovieList = () => {
    // const isLoading = useSelector(selectLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovieList())
    }, [])

    // useEffect(() => {
    //     dispatch(fetchMoviePage())
    // }, [])

    const { loading, movieList } = useSelector(selectMovieList)
    // console.log('w movieList:', error, loading, movieList)

    // const movie_id = useSelector(selectMoviePage)
    // console.log(movie_id)

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    // console.log(useParams())

    const test = (id) => {
        dispatch(fetchMoviePage(id))
        routeChange(id)
        dispatch(setId(id))
    }

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
                            onClick={() => test(movie.id)}
                            title={movie.title}
                            poster={movie.poster_path}
                            year={movie.release_date.slice(0, 4)}
                            rate={movie.vote_average}
                            score="/10"
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                        />
                        <button onClick={() => dispatch(setId(movie.id))}>
                            klik
                        </button>
                        <button
                            onClick={() => dispatch(fetchMoviePage(movie.id))}
                        >
                            klik
                        </button>
                    </>
                ))
            )}
        </Container>
    )
}

export default MovieList
