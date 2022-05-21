import { createSlice } from '@reduxjs/toolkit'

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        totalPages: 1,
        totalResults: 0,
        loading: false,
        error: false,
        movieList: [],
        genresList: [],
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = true
        },
        fetchMovieListError: (state) => {
            state.error = true
        },
        setMovieList: (state, { payload, type }) => {
            console.log('payload:', payload)
            console.log('type:', type)
            state.page = payload.page
            state.movieList = payload.results
            state.totalPages = payload.total_pages
            state.totalMoviesResult = payload.total_results
        },
        setGenres: (state, action) => {
            state.error = false
            state.loading = false
            state.genresList = action.payload.genres
        },
    },
})

export const {
    setGenres,
    setMovieList,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions

export const selectMovieList = (state) => state.movies

export const selectTotalMoviesPages = (state) =>
    selectMovieList(state).totalPages

export const selectTotalMoviesResults = (state) =>
    selectMovieList(state).totalMoviesResult

export const movieListReducer = movieListSlice.reducer
