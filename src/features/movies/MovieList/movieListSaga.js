import { takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects'
import {
    URLgenres,
    URLmovieSearch,
    URLpopularMovies,
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

        const fetchedMovies = yield call(getMovieList, URLpopularMovies)

        const searchedMovies = yield call(getData, movieQuery)

        yield put(setMovieList(query ? searchedMovies : fetchedMovies))

        console.log(setMovieList())
        console.log('movieQuery:', query)
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler)
}
