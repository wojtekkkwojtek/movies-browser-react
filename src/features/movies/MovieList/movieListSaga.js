import { takeEvery, call, put } from 'redux-saga/effects'
import { getMovieList } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler() {
    try {
        const fetchedMovies = yield call(getMovieList)
        yield put(setMovieList(fetchedMovies))
    } catch (error) {
        yield put(fetchMovieListError())
        yield call(alert, 'cos nie tak z listy')
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
