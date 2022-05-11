import { takeEvery, call, put, delay } from 'redux-saga/effects'
import {
    URLpeopleSearch,
    URLpopularPeople,
} from '../../../common/assets/generalData/fetchedData'
import { getData } from '../../getApiData'
import {
    fetchPeopleList,
    fetchPeopleListError,
    setPeopleList,
} from './peopleListSlice'

function* fetchPeopleListHandler({ payload: query }) {
    const peopleQuery = `${URLpeopleSearch}&query=${query}`
    try {
        yield delay(2000)
        // const fetchedPeople = yield call(getData, URLpopularPeople)
        const people = yield call(
            getData,
            query ? peopleQuery : URLpopularPeople
        )

        yield put(setPeopleList(people))
    } catch (error) {
        yield put(fetchPeopleListError())
    }
}

export function* watchFetchExample2() {
    yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler)
}
