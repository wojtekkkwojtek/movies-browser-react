import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import MoviePage from '../../features/movies/MoviePage'
import MovieList from '../../features/movies/MovieList'
import PeopleList from '../../features/people/PeopleList'
import { toMovie, toMovies, toPeople } from './routes'
import { fetchMovieList } from '../../features/movies/MovieList/movieListSlice'
import { useDispatch } from 'react-redux'
import { fetchPeopleList } from "../../features/people/PeopleList/peopleListSlice"

// import { fetchMoviePage } from '../../features/movies/MoviePage/moviePageSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchMovieList())
            dispatch(fetchPeopleList())
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <HashRouter>
            <Header />{' '}
            <Routes>
                <Route path={toMovies()} element={<MovieList />} />
                <Route path={toMovie()} element={<MoviePage />} />
                {/* <Route path={toMovie()}>
                    <MoviePage />
                </Route> */}
                <Route path={toPeople()} element={<PeopleList />} />

                <Route>{/* <PersonPage /> */}</Route>
                <Route path="/" element={<Navigate to="/movies" />} />
            </Routes>
        </HashRouter>
    )
}

export default App
