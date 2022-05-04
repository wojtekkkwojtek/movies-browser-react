import { createSlice } from '@reduxjs/toolkit'

const moviePageSlice = createSlice({
    name: 'movieOne',
    initialState: {
        moviePage: null,
        actors: [],
        loading: false,
        error: false,
        movie_id: null,
    },
    reducers: {
        fetchMoviePage: (state) => {
            state.loading = true
            state.error = false
        },
        fetchMoviePageError: (state) => {
            state.loading = false
            state.error = true
        },
        fetchMoviePageSuccess: (state, { payload }) => {
            state.loading = false
            state.error = false
            state.moviePage = payload
        },
        fetchActors: (state, { payload }) => {
            state.actors = payload.cast
            console.log('state.actors:', state.actors)
        },
    },
})

export const {
    fetchMoviePage,
    fetchMoviePageSuccess,
    fetchMoviePageError,
    fetchActors,
} = moviePageSlice.actions

export const selectMoviePage = (state) => state.movieOne

export const moviePageReducer = moviePageSlice.reducer
