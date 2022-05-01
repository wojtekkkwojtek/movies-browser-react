import { createSlice } from '@reduxjs/toolkit'

const moviePageSlice = createSlice({
    name: 'movieOne',
    initialState: {
        moviePage: null,
        actors: null,
        loading: true,
        error: false,
        movie_id: null,
    },
    reducers: {
        fetchMoviePage: (state, { payload: id }) => {
            state.loading = false
            state.error = false
            console.log(' fetchMoviePage ok?', id)
            state.movie_id = id
        },
        // fetchMoviePageSuccess: (state, { payload }) => {
        //     state.loading = false
        //     state.error = false
        //     state.moviePage = payload
        // },
        fetchMoviePageError: (state) => {
            state.loading = false
            state.error = true
        },
        // fetchActors: (state, { payload }) => {
        //     state.actors = payload.actors
        // },

        setMovieDetails: (state, { payload: movieDetails }) => {
            state.loading = false
            state.moviePage = movieDetails
            console.log('moviePage z slice:', movieDetails)
        },
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
