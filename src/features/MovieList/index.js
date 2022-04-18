import { useEffect, useState } from 'react'
import { URLpopularMovies } from '../../common/assets/generalData/fetchedData'
import { Tile } from '../../common/components/Tiles/BigTile'
import { Loader } from '../../common/components/Loader'
import { nanoid } from 'nanoid'

const MovieList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState('')
    const [test, setTest] = useState(true)
    const [tileIndex, setTileIndex] = useState(null)

    const handleOnClick = (index) => {
        console.log(index)
        // console.log(movies)
        setTileIndex(index)
        console.log(tileIndex)
        console.log(index)
        setTest(!test)
        console.log(test)

        if (index === tileIndex) {
            console.log('from if:', tileIndex)
        }
    }

    useEffect(() => {
        ;(async () => {
            const response = await fetch(URLpopularMovies)
            setMovies(await response.json())
            // console.log('movies:', movies)
            setIsLoading(false)
        })()
    }, [])

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : test ? (
                    movies.results.map((movie) => (
                        <>
                            <Tile
                                key={nanoid()}
                                onClick={() => handleOnClick(movie.title)}
                                test={test}
                                title={movie.title}
                                poster={movie.poster_path}
                                date={movie.release_date.slice(0, 4)}
                                rate={movie.vote_average}
                                votes={movie.vote_count}
                                genres={movie.genre_ids}
                            />
                        </>
                    ))
                ) : (
                    <Tile title="test" />
                )

                // : ( movies.result.map((item)) => {
                //   if(item.title === titleIndex) {
                //     return (<Tile title={item.title}/>)
                //   }
                // })
            }
        </>
    )
}

export default MovieList
