import { all } from 'redux-saga/effects'
import { movieDetailsSaga } from './features/movies/MoviePage/moviePageSaga'
import { watchFetchExample } from './features/movies/MovieList/movieListSaga'

export default function* rootSaga() {
    yield all([watchFetchExample(), movieDetailsSaga()])
}
