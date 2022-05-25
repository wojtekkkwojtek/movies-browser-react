import { call, put, delay, debounce } from 'redux-saga/effects'
import {
    URLmovieSearch,
    URLpopularMovies,
} from '../../../common/assets/generalData/fetchedData'

import { getData } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler({ payload: { query, page } }) {
    const searchedMovies = `${URLmovieSearch}&query=${query}&page=${page}`
    const popularMovies = `${URLpopularMovies}&page=${page}`
    try {
        yield delay(500)
        // const fetchedGenres = yield call(getData, URLgenres)
        // yield put(setGenres(fetchedGenres))

        const movies = yield call(
            getData,
            query ? searchedMovies : popularMovies
        )
        yield put(setMovieList(movies))
    } catch (error) {
        yield put(fetchMovieListError())
    }
}

export function* watchFetchExample() {
    yield debounce(3000, fetchMovieList.type, fetchMovieListHandler)
}
