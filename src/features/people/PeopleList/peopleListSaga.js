import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { URLpopularPeople } from '../../../common/assets/generalData/fetchedData'
import { getData } from '../../getApiData'
import {
    fetchPeopleList,
    fetchPeopleListError,
    setPeopleList,
} from './peopleListSlice'

function* fetchPeopleListHandler() {
    try {
        yield delay(2000)
        const fetchedPeople = yield call(getData, URLpopularPeople)
        yield put(setPeopleList(fetchedPeople))
    } catch (error) {
        yield put(fetchPeopleListError())
    }
}

export function* watchFetchExample2() {
    yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler)
}
