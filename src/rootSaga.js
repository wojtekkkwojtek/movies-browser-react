import { all } from 'redux-saga/effects'
import { movieDetailsSaga } from './features/movies/MoviePage/moviePageSaga'
import { watchFetchExample } from './features/movies/MovieList/movieListSaga'
import {watchFetchExample2}from './features/people/PeopleList/peopleListSaga'

export default function* rootSaga() {
    yield all([
        watchFetchExample(), 
        movieDetailsSaga(),
        watchFetchExample2(),
    ])
}
