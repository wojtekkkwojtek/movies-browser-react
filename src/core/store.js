import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { moviesGenresReducer } from "../features/movies/MovieGenres/moviesGenresSlice";
import { movieListReducer } from '../features/movies/MovieList/movieListSlice';
import { moviePageReducer } from '../features/movies/MoviePage/moviePageSlice';
import { peopleListReducer } from '../features/people/PeopleList/peopleListSlice';
import { personPageReducer } from '../features/people/PersonPage/personPageSlice';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        movies: movieListReducer,
        movieOne: moviePageReducer,
        people: peopleListReducer,
        personOne: personPageReducer,
        genres: moviesGenresReducer,
    },
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)

export default store;