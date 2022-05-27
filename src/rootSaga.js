import { all } from 'redux-saga/effects';
import { movieDetailsSaga } from './features/movies/MoviePage/moviePageSaga';
import { movieListSaga } from './features/movies/MovieList/movieListSaga';
import { peopleListSaga } from './features/people/PeopleList/peopleListSaga';
import { personDetailsSaga } from "./features/people/PersonPage/personPageSaga";
import {genresListSaga} from "./features/movies/MovieGenres/moviesGenresSaga";

export default function* rootSaga() {
    yield all([
        movieListSaga(),
        movieDetailsSaga(),
        peopleListSaga(),
        personDetailsSaga(),
        genresListSaga()
    ])
};
