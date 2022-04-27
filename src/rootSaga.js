import { all } from 'redux-saga/effects'
import { movieDetailsSaga } from './features/movies/MoviePage/moviePageSaga'
import { watchFetchExample } from './features/movies/MovieList/movieListSaga'
import { watchFetchExample2 } from './features/people/PeopleList/peopleListSaga'
// import { watchFetchGenresList } from './features/genres/genresSaga'

export default function* rootSaga() {
    yield all([
        watchFetchExample(),
        movieDetailsSaga(),
        watchFetchExample2(),
        // watchFetchGenresList(),
    ])
}
