import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchMoviePage, selectMoviePage } from './moviePageSlice'

import { MovieHeader } from '../../../common/components/MovieHeader'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { Title } from '../../../common/components/Title'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'

const MoviePage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMoviePage(id))
    }, [dispatch, id])
    const { error, loading, moviePage, actors, crew } =
        useSelector(selectMoviePage)

    const navigate = useNavigate()

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {/* {!error && !loading} */}
            {!error && !loading && moviePage && (
                <>
                    <MovieHeader
                        original_title={moviePage.original_title}
                        backdrop_path={moviePage.backdrop_path}
                        vote_average={moviePage.vote_average}
                        vote_count={moviePage.vote_count}
                    />
                    <Container>
                        <Tile
                            details
                            movie
                            key={nanoid()}
                            title={moviePage.title}
                            poster={moviePage.poster_path}
                            release_date={moviePage.release_date}
                            year={moviePage.release_date.slice(0, 4)}
                            production="Production:"
                            country={moviePage.production_countries}
                            release={'Release date: '}
                            rate={moviePage.vote_average}
                            score="/10"
                            votes={moviePage.vote_count}
                            overview={moviePage.overview}
                            genres={moviePage.genres}
                        />
                        <Title>Cast</Title>
                        {actors &&
                            actors.map((actor) => (
                                <PersonTile
                                    personTile={true}
                                    gray
                                    onClick={() => routeChange(actor.id)}
                                    original_name={actor.original_name}
                                    as={actor.character}
                                    poster={actor.profile_path}
                                />
                            ))}
                        <Title>Crew</Title>
                        {crew &&
                            crew.map((person) => (
                                <PersonTile
                                    personTile={true}
                                    gray
                                    original_name={person.original_name}
                                    as={person.job}
                                    poster={person.profile_path}
                                />
                            ))}
                    </Container>
                </>
            )}
        </>
    )
}

export default MoviePage
