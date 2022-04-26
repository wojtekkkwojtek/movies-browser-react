import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData'

import { call, put, select, takeEvery } from 'redux-saga/effects'
import { getMovieDetails } from '../../getApiData'

import { fetchMoviePage, selectGetEx, setMovieDetails } from './moviePageSlice'

function* fetchMovieDetailsHandler() {
    try {
        let movieId = yield select(selectGetEx)
        const movie = `${URL}/movie/${movieId}?api_key=${API_KEY}`

        const movieDetails = yield call(getMovieDetails, movie)
        yield put(setMovieDetails(movieDetails))
    } catch (error) {
        yield call(alert, 'cos nie tak z details')
    }
}

export function* movieDetailsSaga() {
    yield takeEvery(fetchMoviePage.type, fetchMovieDetailsHandler)
}
