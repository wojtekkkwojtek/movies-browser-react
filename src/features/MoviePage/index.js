import { useEffect, useState } from 'react'
import { URLpopularMovies } from '../../common/assets/generalData/fetchedData'
import Tile from '../../common/components/Tile'
import { Loader } from '../../common/components/Loader'

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
    }, [movies])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                movies.results.map((movie) => (
                    <Tile
                        title={movie.title}
                        date={movie.release_date}
                        production="Production:"
                        country={movie.country}
                        rate={movie.vote_average}
                        score="/10"
                        votes={movie.vote_count}
                    />
                ))
            )}
        </>
    )
}

export default MoviePage
