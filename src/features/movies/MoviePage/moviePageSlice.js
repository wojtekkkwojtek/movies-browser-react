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
        fetchMoviePage: (state) => {
            state.loading = false
            state.error = false
            console.log('ok?')
        },
        // fetchMoviePageSuccess: (state, { payload }) => {
        //     state.loading = false
        //     state.error = false
        //     state.moviePage = payload
        // },
        // fetchMoviePageError: (state) => {
        //     state.loading = false
        //     state.error = true
        // },
        // fetchActors: (state, { payload }) => {
        //     state.actors = payload.actors
        // },

        setId: (state, { payload: id }) => {
            state.movie_id = id
            console.log('ze strony jedno id:', state.movie_id)
        },
        setMovieDetails: (state, { payload: movieDetails }) => {
            state.moviePage = movieDetails
            console.log('moviePage:', movieDetails)
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

// export const selectGetEx = (state) => selectMoviePage(state).movie_id

// export const selectLoading = (state) => selectMoviePage(state).loading
// export const selectError = (state) => selectMoviePage(state).error
// export const selectActors = (state) => selectMoviePage(state).actors
// export const selectMovie = (state) => selectMoviePage(state).moviePage

export const moviePageReducer = moviePageSlice.reducer
