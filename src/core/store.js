import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watchFetchExample } from '../features/movies/MovieList/movieListSaga'
import { watchFetchExample2 } from "../features/people/PeopleList/peopleListSaga"
import { genresReducer } from '../../src/common/assets/generalData/genresSlice'
import { movieListReducer } from '../features/movies/MovieList/movieListSlice'
import { moviePageReducer } from '../features/movies/MoviePage/moviePageSlice'
import { peopleListReducer } from "../features/people/PeopleList/peopleListSlice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        genres: genresReducer,
        movies: movieListReducer,
        moviePage: moviePageReducer,
        people: peopleListReducer,
        // personPage: personPageReducer,
    },
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(watchFetchExample)
sagaMiddleware.run(watchFetchExample2)

export default store
