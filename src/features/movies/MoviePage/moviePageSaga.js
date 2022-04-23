import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData'

import { getApi } from '../../getApiData'

import { takeLatest, call, put, select, takeEvery } from 'redux-saga/effects'
import { getMovieDetails } from '../../getApiData'

// import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData'
import { fetchMoviePage, selectGetEx, setMovieDetails } from './moviePageSlice'
import { selectMovieList } from '../MovieList/movieListSlice'

// function* sample
function* fetchMovieDetailsHandler() {
    // console.log('co to movie:', movie)

    try {
        let movieId = yield select(selectGetEx)
        const movie = `${URL}/movie/${movieId}?api_key=${API_KEY}`
        // console.log('testtesttest:', movie_id)
        // yield put(setMovieDetails(movieId))

        const movieDetails = yield call(getApi, movie)

        yield put(setMovieDetails(movieDetails))
    } catch (error) {
        yield call(alert, 'cos nie tak z details')
    }
}

export function* movieDetailsSaga() {
    yield takeEvery(fetchMoviePage.type, fetchMovieDetailsHandler)
}
