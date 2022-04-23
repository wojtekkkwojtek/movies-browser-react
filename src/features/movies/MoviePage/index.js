import { nanoid } from 'nanoid'
import { useParams } from 'react-router-dom'
import { MovieHeader } from '../../../common/components/MovieHeader'
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/BigTile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchMovieList,
    getMovieById,
    selectMovieId,
    selectMovieList,
    setMovieId,
    setMovieDetails,
} from '../MovieList/movieListSlice'

import { useEffect } from 'react'
import { fetchMoviePage, selectMoviePage, selectGetEx } from './moviePageSlice'

const MoviePage = () => {
    const { error, movieList } = useSelector(selectMovieList)
    // console.log(error, loading, movie_id, movieList)

    const { loading, moviePage } = useSelector(selectMoviePage)

    const movie_id = useSelector(selectGetEx)

    // const { movie_id } = useSelector(selectGetEx)
    console.log('czy ładuje:', loading)

    console.log('movie_id:', movie_id)
    console.log('moviePage:', moviePage)
    // const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMoviePage())
    }, [])

    // useEffect(() => {
    //     fetch(
    //         `https://api.themoviedb.org/3/movie/${id}?api_key=221fa5279467990c7cfd52f6b2d29b1d`
    //     )
    //         .then((res) => res.json())
    //         .then((details) => console.log('details:', details))
    // }, [])

    // const { id } = useParams()
    // console.log('filmy:', useSelector(selectMovieId), movieList)
    // const movie = useSelector((state) => getMovieById(state, id))
    // console.log('params:', id, movie)

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MovieHeader original_title={moviePage.original_title} />
                    <>{movie_id}</>
                    <>{moviePage.id}</>
                </>

                // movies.results.map((movie) => (
                //     <Tile
                //         key={nanoid()}
                //         title={movie.title}
                //         poster={movie.poster_path}
                //         date={movie.release_date}
                //         production="Production:"
                //         country={movie.country}
                //         rate={movie.vote_average}
                //         score="/10"
                //         votes={movie.vote_count}
                //         overview={movie.overview}
                //         genres={movie.genre_ids}
                //     />
                // ))
            )}
        </Container>
    )
}

export default MoviePage
