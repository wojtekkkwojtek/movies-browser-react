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

function* fetchPeopleListHandler({ payload: { query, page } }) {
    const searchedPeople = `${URLpeopleSearch}&query=${query}&page=${page}`
    const popularPeople = `${URLpopularPeople}&page=${page}`

    try {
        yield delay(2000)
        const people = yield call(
            getData,
            query ? searchedPeople : popularPeople
        )
        yield put(setPeopleList(people))
    } catch (error) {
        yield put(fetchPeopleListError())
    }
}

export function* watchFetchExample2() {
    yield takeEvery(fetchPeopleList.type, fetchPeopleListHandler)
}
