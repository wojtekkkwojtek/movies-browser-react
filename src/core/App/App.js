
// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import Main from '../../common/Main/index'
import { Container } from '../../common/components/Container'
import MoviePage from '../../features/movies/MoviePage'
import MovieList from '../../features/movies/MovieList'
import { MovieHeader } from "../../common/components/MovieHeader"

function App() {
    return (
        <div>
            <Header />
            {/* <Loader /> */}
            {/* <MovieHeader /> */}
            <Container>
                <MovieList />
                {/* <MoviePage /> */}
            </Container>
            {/* <Main /> */}
        </div>
    )
}

export default App
