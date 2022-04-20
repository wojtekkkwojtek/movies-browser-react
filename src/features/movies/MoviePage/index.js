import { useEffect, useState } from 'react';
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData';
import { Tile } from '../../../common/components/Tiles/BigTile';
import { Loader } from '../../../common/components/Loader';
import { nanoid } from 'nanoid';

const MoviePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState('')
    useEffect(() => {
        ;(async () => {
            const response = await fetch(URLpopularMovies)
            setMovies(await response.json())
            console.log(movies)
            setIsLoading(false)
        })()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                movies.results.map((movie) => (
                    <Tile
                        key={nanoid()}
                        title={movie.title}
                        poster={movie.poster_path}
                        date={movie.release_date}
                        production="Production:"
                        country={movie.country}
                        rate={movie.vote_average}
                        score="/10"
                        votes={movie.vote_count}
                        overview={movie.overview}
                        genres={movie.genre_ids}
                    />
                ))
            )}
        </>
    )
}

export default MoviePage