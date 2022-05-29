import {
    URLpersonDetails,
    URLpersonCredits,
} from '../../../common/assets/generalData/fetchedData';
import { delay, all, call, put, takeEvery } from 'redux-saga/effects';
import { getData } from '../../getApiData';
import {
    fetchPersonPage,
    fetchPersonPageError,
    fetchPersonPageSuccess,
    setPersonCredits,
} from './personPageSlice';

function* fetchPersonDetailsHandler({ payload: personId }) {
    const personApiDetails = URLpersonDetails(personId);
    const personApiCredits = URLpersonCredits(personId);

    try {
        yield delay(300)
        const [personDetails, personCredits] = yield all([
            call(getData, personApiDetails),
            call(getData, personApiCredits),
        ]);

        yield put(fetchPersonPageSuccess(personDetails))
        yield put(setPersonCredits(personCredits))
    } catch (error) {
      console.log("error", error);
        yield put(fetchPersonPageError())
    }
};

export function* personDetailsSaga() {
    yield takeEvery(fetchPersonPage.type, fetchPersonDetailsHandler)
};
