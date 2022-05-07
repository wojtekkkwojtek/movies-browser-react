import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { URLgenres } from '../../../common/assets/generalData/fetchedData'
import { setGenres } from './movieListSlice'

import { getMovieList, getData } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler() {
    try {
        yield delay(1000)
        const fetchedGenres = yield call(getData, URLgenres)
        yield put(setGenres(fetchedGenres))

        const fetchedMovies = yield call(getMovieList)
        yield put(setMovieList(fetchedMovies))
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
