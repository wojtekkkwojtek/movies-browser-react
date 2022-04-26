import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { genresReducer } from '../../src/common/assets/generalData/genresSlice'
import { movieListReducer } from '../features/movies/MovieList/movieListSlice'
import { moviePageReducer } from '../features/movies/MoviePage/moviePageSlice'
import rootSaga from '../rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        genres: genresReducer,
        movies: movieListReducer,
        movieOne: moviePageReducer,
    },
    middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)

export default store
