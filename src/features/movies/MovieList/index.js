import React, { useEffect, useState } from 'react'
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

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
    setMovieDetails,
} from '../MoviePage/moviePageSlice'
import { Button } from './styled'
import { Title } from '../../../common/components/Title'

const MovieList = () => {
    // const isLoading = useSelector(selectLoading)

    const dispatch = useDispatch()
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         dispatch(fetchMovieList())
    //     }, 4000)
    //     return () => clearTimeout(timer)
    // }, [])

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
        // setMovieDetails()
    }

    return (
        <Container>
            <Title>Popular movies</Title>
            {loading ? (
                <Loader />
            ) : (
                movieList &&
                movieList.map((movie) => (
                    <React.Fragment key={movie.id}>
                        {console.log('movie test:', movie.id)}
                        <Tile
                            list
                            // onClick={() => dispatch(fetchMoviePage(movie.id))}
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
                        {/* <Button onClick={() => dispatch(setId(movie.id))}>
                            klik
                        </Button> */}
                        {/* <Button
                            onClick={() => dispatch(fetchMoviePage(movie.id))}
                        >
                            klik
                        </Button> */}
                    </React.Fragment>
                ))
            )}
        </Container>
    )
}

export default MovieList
