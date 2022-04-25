import { takeEvery, call, put } from 'redux-saga/effects'
import { getExampleTasks } from '../../getApi'
import { fetchExample, setMovieList } from './movieListSlice'

function* fetchExampleHandler() {
    try {
        const exampleMovie = yield call(getExampleTasks)
        yield put(setMovieList(exampleMovie))
    } catch (error) {
        yield call(alert, 'cos nie tak')
    }
}

export function* watchFetchExample() {
    yield takeEvery(fetchExample.type, fetchExampleHandler)
}
