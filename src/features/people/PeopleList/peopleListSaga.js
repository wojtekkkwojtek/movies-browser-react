import { call, put, delay, debounce } from 'redux-saga/effects';
import {
    URLpeopleSearch,
    URLpopularPeople,
} from '../../../common/assets/generalData/fetchedData';
import { getData } from '../../getApiData';
import {
    fetchPeopleList,
    fetchPeopleListError,
    setPeopleList,
} from './peopleListSlice';

function* fetchPeopleListHandler({ payload: { query, page } }) {
    const searchedPeople = `${URLpeopleSearch}&query=${query}&page=${page}`;
    const popularPeople = `${URLpopularPeople}&page=${page}`;

    try {
        yield delay(500)
        const people = yield call(
            getData,
            query ? searchedPeople : popularPeople
        );
        yield put(setPeopleList(people));
    } catch (error) {
        yield put(fetchPeopleListError());
        console.error(error);

    }
}

export function* peopleListSaga() {
    yield debounce(2000, fetchPeopleList.type, fetchPeopleListHandler);
}
