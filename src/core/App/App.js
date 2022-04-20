// import { Loader } from '../../common/components/Loader';
import Header from '../../common//components/Header';
import Main from '../../common/Main/index';
import { Container } from '../../common/components/Container';
import MoviePage from '../../features/movies/MoviePage';
import MovieList from '../../features/movies/MovieList';

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
