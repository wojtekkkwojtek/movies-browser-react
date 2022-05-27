import { createSlice } from '@reduxjs/toolkit';

const moviePageSlice = createSlice({
    name: 'movieOne',
    initialState: {
        moviePage: null,
        actors: [],
        crew: [],
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
            state.moviePage = payload
        },
        fetchActorsAndCrew: (state, { payload }) => {
            state.actors = payload.cast
            state.crew = payload.crew
        },
    },
});

export const {
    fetchMoviePage,
    fetchMoviePageSuccess,
    fetchMoviePageError,
    fetchActorsAndCrew,
} = moviePageSlice.actions;

export const selectMoviePage = (state) => state.movieOne;

export const moviePageReducer = moviePageSlice.reducer;
