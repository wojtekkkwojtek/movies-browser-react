import { API_KEY, URL } from '../../../common/assets/generalData/fetchedData';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getPersonDetails } from '../../getApiData';
import { fetchPersonPage, selectGetEx1, setPersonDetails } from './personPageSlice';

console.log('selectGetEx1= ', selectGetEx1);

function* fetchPersonDetailsHandler() {
    try {
        let personId = yield select(selectGetEx1);
        const person = `${URL}/person/${personId}?api_key=${API_KEY}`;

        console.log('person: ' + { person })       /////////////////
        console.log('personId  ' + { personId })       /////////////
        
        const personDetails = yield call(getPersonDetails, person);
        yield put(setPersonDetails(personDetails));
    } catch (error) {
        yield call(alert, 'cos nie tak z person_details');
    }
}

export function* personDetailsSaga() {
    yield takeEvery(fetchPersonPage.type, fetchPersonDetailsHandler)
}
