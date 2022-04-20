import { HashRouter, Link, Switch, Route } from 'react-router-dom'

// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import Main from '../../common/Main/index'
import { Container } from '../../common/components/Container'
import MoviePage from '../../features/MoviePage'
import MovieList from '../../features/MovieList'
import { toMovie, toMovies, toPeople } from './routes'

function App() {
    return (
        <HashRouter>
            <Header />
            <Switch>
                <Route>
                    <MovieList path={toMovies} />
                </Route>
                <Route>
                    <MoviePage path={toMovie} />
                </Route>
                <Route>{/* <PeopleList  path={toPeople} /> */}</Route>
                <Route>{/* <PersonPage /> */}</Route>
            </Switch>

            <Container>
                <MovieList />
                {/* <MoviePage /> */}
            </Container>
            <Main />
        </HashRouter>
    )
}

export default App
