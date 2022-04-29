import { nanoid } from 'nanoid'
import { MovieHeader } from '../../../common/components/MovieHeader'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'

import {
    fetchMoviePage,
    selectGetEx,
    selectMoviePage,
    setMovieDetails,
} from './moviePageSlice'
import { Title } from '../../../common/components/Title'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
    const { loading, moviePage } = useSelector(selectMoviePage)
    const { id } = useParams()

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('najnowszy:', id)
    //         dispatch(fetchMoviePage(id))
    //     }, 2000)
    // }, [dispatch, id])

    console.log('id strony:', id)
    console.log('moviePage z useParams ID:', moviePage)
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
                                // year={moviePage.release_date.slice(0, 4)}
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
