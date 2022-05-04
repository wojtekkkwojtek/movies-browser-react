import { URLpersonDetails, URLpersonCredits } from '../../../common/assets/generalData/fetchedData';
import { delay, all, call, put, select, takeEvery } from 'redux-saga/effects';
import { getApiData, getPersonDetails } from '../../getApiData';
import { fetchPersonPage, fetchPersonPageError, fetchPersonPageSuccess, setPersonCredits } from './personPageSlice';

function* fetchPersonDetailsHandler({ payload: personId }) {
    const personApiDetails = URLpersonDetails(personId);
    const personApiCredits = URLpersonCredits(personId);
    console.log('personId_w_saga', personId)   //////////////////////////////////////

    try {
        yield delay(300)

        const [personDetails, personCredits] = yield all([
            call(getPersonDetails, personApiDetails),
            call(getPersonDetails, personApiCredits)
        ]);
        console.log('personDetails_inside_saga= ', personDetails)  ////////////////////////////////////
        console.log('personCredits_inside_saga= ', personCredits)  ///
        yield put(fetchPersonPageSuccess(personDetails));
        yield put(setPersonCredits(personCredits));
        console.log('credits in saga ',personCredits )
    } catch (error) {
        yield call(fetchPersonPageError);
    }
}

export function* personDetailsSaga() {
    yield takeEvery(fetchPersonPage.type, fetchPersonDetailsHandler)
}
