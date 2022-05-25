import {call, put, takeLatest } from "redux-saga/effects"
import {URLgenres} from "../../../common/assets/generalData/fetchedData"
import {getData} from "../../getApiData"
import {fetchGenres, fetchGenresError, setGenres} from "./moviesGenresSlice"




function* fetchGenresListHandler() {
  try {
    const fetchedGenres = yield call(getData, URLgenres)
    yield put(setGenres(fetchedGenres))
  } catch (error) {
    yield console.error("Fail to fetch genres list from server")
    yield put(fetchGenresError())
  }
}

export function* genresListSaga() {
  yield takeLatest(fetchGenres.type, fetchGenresListHandler)
}