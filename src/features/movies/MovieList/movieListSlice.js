import { createSlice } from '@reduxjs/toolkit'

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        page: null,
        totalPages: null,
        totalResults: null,
        loading: false,
        error: 'cos',
        movieList: null,
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = true
            state.error = false
            state.movieList = null
        },
        fetchMovieListSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.movieList = payload.movieList
            state.totalPages = payload.totalPages
            state.totalResults = payload.totalResults
        },
        fetchMovieListError: (state) => {
            state.loading = false
            state.error = true
        },

        fetchExample: () => {
            console.log('test')
        },
        setMovieList: (state, { payload: example }) => {
            state.movieList = example.results
        },
    },
})

export const {
    fetchExample,
    setMovieList,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions

export const selectMovieList = (state) => state.movies
// export const selectError = (state) => selectMovieList(state)
// export const selectLoading = (state) => selectMovieList(state).loading
// export const selectTotalPages = (state) => selectMovieList(state).totalPages
// export const selectTotalResults = (state) => selectMovieList(state).totalResults

// export const getMovieById = (state, movieId) =>
export const movieListReducer = movieListSlice.reducer
