import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData'

import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { getMovieDetails } from '../../getApiData'

import {
    fetchActors,
    fetchMoviePage,
    fetchMoviePageError,
    fetchMoviePageSuccess,
} from './moviePageSlice'

function* fetchMovieDetailsHandler({ payload: id }) {
    try {
        yield delay(1000)
        const movie = `${URL}/movie/${id}?api_key=${API_KEY}`
        const movieDetails = yield call(getMovieDetails, movie)
        yield put(fetchMoviePageSuccess(movieDetails))

        const cast = `${URL}/movie/${id}/credits?api_key=${API_KEY}`
        const castInMovie = yield call(getMovieDetails, cast)
        yield put(fetchActors(castInMovie))
        console.log(castInMovie)
    } catch (error) {
        yield call(fetchMoviePageError)
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMoviePage.type, fetchMovieDetailsHandler)
}
