import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: "movieList",
    initialState: {
        page: null,
        totalPages: null,
        totalResults: null,
        loading: false,
        error: false,
        movieList: null,
    },
    reducers:{
        fetchMovieList: (state) => {
            state.loading = true;
            state.error = false;
            state.movieList = null;
        },
        fetchMovieListSuccess: (state, {payload}) => {
            state.loading = false;
            state.error = false;
            state.movieList = payload.movieList;
            state.totalPages = payload.totalPages;
            state.totalResults = payload.totalResults;
        },
        fetchMovieListError: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions;

export const selectMovieList = state => state.movieList;
export const selectError = state => selectMovieList(state).error;
export const selectLoading = state => selectMovieList(state).loading;
export const selectTotalPages = state => selectMovieList(state).totalPages;
export const selectTotalResults = state => selectMovieList(state).totalResults;

export const movieListReducer = movieListSlice.reducer;