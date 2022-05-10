import { call, put, delay, takeLatest } from 'redux-saga/effects'
import {
    URLgenres,
    URLmovieSearch,
    URLpopularMovies,
} from '../../../common/assets/generalData/fetchedData'
import { setGenres } from './movieListSlice'

import { getData } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler({ payload: query }) {
    const movieQuery = `${URLmovieSearch}&query=${query}`

    try {
        yield delay(1000)

        const fetchedGenres = yield call(getData, URLgenres)
        yield put(setGenres(fetchedGenres))

        const popularMovies = yield call(getData, URLpopularMovies)

        const searchedMovies = yield call(getData, movieQuery)

        yield put(setMovieList(query ? searchedMovies : popularMovies))

        console.log('movieQuery:', query)
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield takeLatest(fetchMovieList.type, fetchMovieListHandler)
}
