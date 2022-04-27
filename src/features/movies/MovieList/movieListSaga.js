import { takeEvery, call, put } from 'redux-saga/effects'
import { URLgenres } from '../../../common/assets/generalData/fetchedData'
// import { URL, API_KEY } from '../../../common/assets/generalData/fetchedData'
import { setGenres } from './movieListSlice'

// import { setGenres } from './movieListSlice'
import { getMovieList, getGenres } from '../../getApiData'
import {
    setMovieList,
    fetchMovieList,
    fetchMovieListError,
} from './movieListSlice'

function* fetchMovieListHandler() {
    // const gen = `${URL}/genre/movie/list?api_key=${API_KEY}`

    try {
        console.log(URLgenres)
        const fetchedGenres = yield call(getGenres, URLgenres)
        console.log(fetchedGenres)
        yield put(setGenres(fetchedGenres))

        const fetchedMovies = yield call(getMovieList)
        yield put(setMovieList(fetchedMovies))
    } catch (error) {
        yield put(fetchMovieListError())
        console.log('cos nie tak z listy, ale co ')
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchMovieList.type, fetchMovieListHandler)
}
