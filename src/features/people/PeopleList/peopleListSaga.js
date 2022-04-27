import { takeEvery, call, put } from 'redux-saga/effects'
import { getPeopleList } from '../../getApiData'
import {
    fetchPeopleList,
    fetchPeopleListError,
    setPeopleList,
} from './peopleListSlice'

function* fetchPeopleListHandler() {
    try {
        const fetchedPeople = yield call(getPeopleList)
        yield put(setPeopleList(fetchedPeople))
    } catch (error) {
        yield put(fetchPeopleListError())
        console.log('cos nie tak z listy people')
    }
}

export function* watchFetchExample2() {
    yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler)
}
