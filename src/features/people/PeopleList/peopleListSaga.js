import { takeEvery, call, put } from 'redux-saga/effects'
import { getPopularPeople } from '../../getApi'
import { fetchExample, setPeopleList } from './peopleListSlice'

function* fetchExampleHandler() {
    try {
        const examplePerson = yield call(getPopularPeople)
        yield put(setPeopleList(examplePerson))
    } catch (error) {
        yield call(alert, 'cos nie tak')
    }
}

export function* watchFetchExample2() {
    yield takeEvery(fetchExample.type, fetchExampleHandler)
}
