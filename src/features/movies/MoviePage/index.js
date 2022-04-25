import { nanoid } from 'nanoid'
import { MovieHeader } from '../../../common/components/MovieHeader'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { useSelector } from 'react-redux'

import { selectMoviePage } from './moviePageSlice'
import { Title } from '../../../common/components/Title'

const MoviePage = () => {
    const { loading, moviePage } = useSelector(selectMoviePage)

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
