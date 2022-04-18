// import { Loader } from '../../common/components/Loader'
import Header from '../../common//components/Header'
import Main from '../../common/Main/index'
import { Container } from '../../common/components/Container'
import MoviePage from '../../features/MoviePage'
import MovieList from '../../features/MovieList'

function App() {
    return (
        <div>
            <Header />
            {/* <Loader /> */}
            <Container>
                <MovieList />
                {/* <MoviePage /> */}
            </Container>
            <Main />
        </div>
    )
}

export default App
