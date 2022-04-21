import { useEffect, useState } from 'react'
import { URLpopularMovies } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/BigTile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { MiddleTile } from "../../../common/components/Tiles/MiddleTile"

const MovieList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [tileIndex, setTileIndex] = useState(null)

    const handleOnClick = (id) => {
        console.log(id)
        // console.log(movies)
        setTileIndex(id)
        console.log(tileIndex)
        console.log(id)
        setShowAll(!showAll)
        console.log(showAll)
    }

    useEffect(() => {
        ; (async () => {
            const response = await fetch(URLpopularMovies)
            setMovies(await response.json())
            // console.log('movies:', movies)
            setTimeout(() => {
                setIsLoading(false)
            }, 3000)
        })()
    }, [])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : showAll ? (
                movies.results.map((movie) => (
                    <>
                        <MiddleTile
                            key={nanoid()}
                            onClick={() => handleOnClick(movie.id)}
                            showAll={showAll}
                            title={movie.title}
                            poster={movie.poster_path}
                            year={movie.release_date.slice(0, 4)}
                            rate={movie.vote_average}
                            score="/10"
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                        />
                    </>
                ))
            ) : (
                movies.results.map((movie) => {
                    if (movie.id === tileIndex) {
                        return (
                            <MiddleTile

                                key={nanoid()}
                                onClick={() => handleOnClick(movie.id)}
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
                        )
                    }
                })
            )}
        </>
    )
}

export default MovieList
