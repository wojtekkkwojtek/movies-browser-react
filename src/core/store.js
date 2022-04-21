import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { watchFetchExample } from '../features/movies/MovieList/movieListSaga'
import { genresReducer } from '../../src/common/assets/generalData/genresSlice'
import { movieListReducer } from '../features/movies/MovieList/movieListSlice'
import { moviePageReducer } from '../features/movies/MoviePage/moviePageSlice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        genres: genresReducer,
        movies: movieListReducer,
        moviePage: moviePageReducer,
    },
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(watchFetchExample)

export default store
