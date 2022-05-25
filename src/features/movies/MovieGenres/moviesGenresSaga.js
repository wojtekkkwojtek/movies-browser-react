import {delay} from "lodash";
import {call, put, takeLatest } from "redux-saga/effects"
import {URLgenres} from "../../../common/assets/generalData/fetchedData"
import {getData} from "../../getApiData"
import {fetchGenres, setGenres} from "./moviesGenresSlice"




function* fetchGenresListHandler() {
  try {
    // yield delay(3000);
    const fetchedGenres = yield call(getData, URLgenres)
    yield put(setGenres(fetchedGenres))
    console.log("w sadze", fetchedGenres);
  } catch (error) {
    yield console.log("Fail to fetch genres list from server")
    
  }
}

export function* watchGenresList() {
  yield takeLatest(fetchGenres.type, fetchGenresListHandler)
}