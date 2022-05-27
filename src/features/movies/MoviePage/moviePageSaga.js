import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData';

import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../getApiData';

import {
    fetchActorsAndCrew,
    fetchMoviePage,
    fetchMoviePageError,
    fetchMoviePageSuccess,
} from './moviePageSlice';

function* fetchMovieDetailsHandler({ payload: id }) {
    const movie = `${URL}/movie/${id}?api_key=${API_KEY}`
    const cast = `${URL}/movie/${id}/credits?api_key=${API_KEY}`
    try {
        yield delay(1000)
        const [movieDetails, castInMovie] = yield all([
            call(getData, movie),
            call(getData, cast),
        ])

        yield put(fetchMoviePageSuccess(movieDetails))
        yield put(fetchActorsAndCrew(castInMovie))
    } catch (error) {
        yield call(fetchMoviePageError)
    }
};

export function* movieDetailsSaga() {
    yield takeLatest(fetchMoviePage.type, fetchMovieDetailsHandler)
};
