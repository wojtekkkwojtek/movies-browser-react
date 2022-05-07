import { takeEvery, call, put, delay } from 'redux-saga/effects'
import {
    URLgenres,
    URLmovieSearch,
} from '../../../common/assets/generalData/fetchedData'
import { setGenres } from './movieListSlice'

import { getMovieList, getData } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler({ payload: query }) {
    const movieQuery = `${URLmovieSearch}&query=${query}`
    try {
        console.log('query in saga:', query)
        yield delay(1000)
        const fetchedGenres = yield call(getData, URLgenres)
        yield put(setGenres(fetchedGenres))

        const fetchedMovies = yield call(getMovieList)
        const xxx = yield call(getData, movieQuery)
        yield put(setMovieList(xxx))
        console.log(setMovieList())
        console.log('movieQuery:', movieQuery)
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
