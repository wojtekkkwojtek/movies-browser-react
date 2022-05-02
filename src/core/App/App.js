import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import MoviePage from '../../features/movies/MoviePage'
import MovieList from '../../features/movies/MovieList'
import PeopleList from '../../features/people/PeopleList'
import PersonPage from '../../features/people/PersonPage'
import { toMovie, toMovies, toPeople, toPerson } from './routes'
import { fetchMovieList } from '../../features/movies/MovieList/movieListSlice'
import { useDispatch } from 'react-redux'
import { fetchPeopleList } from '../../features/people/PeopleList/peopleListSlice'
import { fetchPersonPage } from '../../features/people/PersonPage/personPageSlice'
function App() {
    return (
        <HashRouter>
            <Header />{' '}
            <Routes>
                <Route path={toMovies()} element={<MovieList />} />
                <Route path={toMovie()} element={<MoviePage />} />
                <Route path={toPeople()} element={<PeopleList />} />
                <Route path={toPerson()} element={<PersonPage />} />
                <Route path="/" element={<Navigate to="/movies" />} />
            </Routes>
        </HashRouter>
    )
}

export default App
