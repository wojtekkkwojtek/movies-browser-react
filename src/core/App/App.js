import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'

// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import { Container } from '../../common/components/Container'
import MoviePage from '../../features/MoviePage'
import MovieList from '../../features/MovieList'
import PeopleList from '../../features/PeopleList'
import { toMovie, toMovies, toPeople } from './routes'

function App() {
    return (
        <HashRouter>
            <Header />
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

            <Container></Container>
        </HashRouter>
    )
}

export default App
