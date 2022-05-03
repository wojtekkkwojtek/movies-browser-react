import { nanoid } from 'nanoid'
import { MovieHeader } from '../../../common/components/MovieHeader'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'

import { fetchMoviePage, selectMoviePage } from './moviePageSlice'
import { Title } from '../../../common/components/Title'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ErrorMessage } from '../../../common/components/ErrorMessage'

const MoviePage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMoviePage(id))
    }, [dispatch, id])
    const { error, loading, moviePage } = useSelector(selectMoviePage)

    console.log('id strony:', id)
    console.log('loading strony:', loading)

    console.log('moviePage z useParams ID:', moviePage)
    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading}
            {!error && !loading && moviePage && (
                <>
                    <MovieHeader
                        original_title={moviePage.original_title}
                        backdrop_path={moviePage.backdrop_path}
                        vote_average={moviePage.vote_average}
                        vote_count={moviePage.vote_count}
                    />
                    <Container>
                        <Tile details movie
                            key={nanoid()}
                            title={moviePage.title}
                            poster={moviePage.poster_path}
                            release_date={moviePage.release_date}
                            year={moviePage.release_date.slice(0, 4)}
                            production="Production:"
                            country={moviePage.production_countries}
                            release={'Release date: '}
                            release_date={moviePage.release_date}
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
            )}
        </>
    )
}

export default MoviePage
