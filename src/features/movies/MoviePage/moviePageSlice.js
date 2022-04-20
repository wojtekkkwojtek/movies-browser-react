import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
    name: "moviePage",
    initialState: {
        moviePage: null,
        actors: null,
        loading: false,
        error: false,
    },
    reducers:{
        fetchMoviePage: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchMoviePageSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.moviePage = payload;
        },
        fetchMoviePageError: (state) => {
            state.loading = false;
            state.error = true;
        },
        fetchActors: (state, {payload}) => {
            state.actors = payload.actors;
        },
    },

});

export const {
    fetchMoviePage,
    fetchMoviePageSuccess,
    fetchMoviePageError,
    fetchActors,
} = moviePageSlice.actions;

const selectMoviePage = state => state.moviePage;

export const selectLoading = state => selectMoviePage(state).loading;
export const selectError = state => selectMoviePage(state).error;
export const selectActors = state => selectMoviePage(state).actors;
export const selectMovie = state => selectMoviePage(state).moviePage;

export const moviePageReducer = moviePageSlice.reducer;