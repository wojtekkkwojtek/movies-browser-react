import { API_KEY, URL, URLperson, URLpersonCredits } from '../../../common/assets/generalData/fetchedData';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getPersonDetails } from '../../getApiData';
import { fetchPersonPage, selectGetEx1, setPersonDetails, setPersonCredits } from './personPageSlice';

console.log('selectGetEx1= ', selectGetEx1);

function* fetchPersonDetailsHandler() {
    try {
        let personId = yield select(selectGetEx1);
        //  const person = `${URL}/person/${personId}?api_key=${API_KEY}`;
        const personApiDetails = URLperson(personId);
        const personApiCredits = URLpersonCredits(personId);
        const personDetails = yield call(getPersonDetails, personApiDetails);
        yield put(setPersonDetails(personDetails));
        const personCredits = yield call(getPersonDetails, personApiCredits);
        yield put(setPersonCredits(personCredits));

    } catch (error) {
        yield call(alert, 'cos nie tak z person_details');
    }
}

export function* personDetailsSaga() {
    yield takeEvery(fetchPersonPage.type, fetchPersonDetailsHandler)
}
