import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import MoviePage from '../../features/movies/MoviePage'
import MovieList from '../../features/movies/MovieList'
import PeopleList from '../../features/people/PeopleList'
import { toMovie, toMovies, toPeople } from './routes'

function App() {
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
