import { createSlice } from '@reduxjs/toolkit'

const moviePageSlice = createSlice({
    name: 'movieOne',
    initialState: {
        moviePage: null,
        actors: null,
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
        // fetchActors: (state, { payload }) => {
        //     state.actors = payload.actors
        // },
    },
})

export const {
    setId,
    setMovieDetails,
    fetchMoviePage,
    fetchMoviePageSuccess,
    fetchMoviePageError,
    fetchActors,
} = moviePageSlice.actions

export const selectMoviePage = (state) => state.movieOne

export const selectGetEx = (state) => state.movieOne.movie_id

// export const selectLoading = (state) => selectMoviePage(state).loading
// export const selectError = (state) => selectMoviePage(state).error
// export const selectActors = (state) => selectMoviePage(state).actors
// export const selectMovie = (state) => selectMoviePage(state).moviePage

export const moviePageReducer = moviePageSlice.reducer
