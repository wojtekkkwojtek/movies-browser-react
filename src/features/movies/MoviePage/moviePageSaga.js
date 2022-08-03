import {
    castApiDetails,
    movieApiDetails,
} from '../../../common/assets/generalData/fetchedData';
import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { getData } from '../../getApiData';
import {
    fetchActorsAndCrew,
    fetchMoviePage,
    fetchMoviePageError,
    fetchMoviePageSuccess,
} from './moviePageSlice';

function* fetchMovieDetailsHandler({ payload: id }) {
    const movie = movieApiDetails(id);
    const cast = castApiDetails(id);

    try {
        yield delay(1000);
        const [movieDetails, castInMovie] = yield all([
            call(getData, movie),
            call(getData, cast),
        ]);
        yield put(fetchMoviePageSuccess(movieDetails));
        yield put(fetchActorsAndCrew(castInMovie));
    } catch (error) {
        yield put(fetchMoviePageError());
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMoviePage.type, fetchMovieDetailsHandler);
}
