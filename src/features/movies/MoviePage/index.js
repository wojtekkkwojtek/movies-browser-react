import { nanoid } from 'nanoid'
import { useParams } from 'react-router-dom'
import { MovieHeader } from '../../../common/components/MovieHeader'
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/Tile'
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
import { fetchMoviePage, selectMoviePage } from './moviePageSlice'
import { Title } from '../../../common/components/Title'

const MoviePage = () => {
    const { error, movieList } = useSelector(selectMovieList)
    // console.log(error, loading, movie_id, movieList)

    const { loading, moviePage } = useSelector(selectMoviePage)

    // const { movie_id } = useSelector(selectGetEx)
    console.log('czy ładuje:', loading)

    console.log('moviePage:', moviePage)
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMoviePage({ id }))
    }, [dispatch, id])

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
        <>
            {loading ? (
                <Loader />
            ) : (
                { moviePage } && (
                    <>
                        <MovieHeader
                            original_title={moviePage.original_title}
                            backdrop_path={moviePage.backdrop_path}
                            vote_average={moviePage.vote_average}
                            vote_count={moviePage.vote_count}
                        />
                        <Container>
                            <Tile
                                key={nanoid()}
                                title={moviePage.title}
                                poster={moviePage.poster_path}
                                date={moviePage.release_date}
                                year={moviePage.release_date.slice(0, 4)}
                                production="Production:"
                                country={moviePage.production_countries}
                                rate={moviePage.vote_average}
                                score="/10"
                                votes={moviePage.vote_count}
                                overview={moviePage.overview}
                                genres={moviePage.genres}
                            />
                            <Title>Cast</Title>
                            <Title>Crew</Title>
                        </Container>
                    </>
                )
            )}
        </>
    )
}

export default MoviePage
