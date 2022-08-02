import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        error: false,
        loading: false,
        totalPages: 1,
        totalMoviesResult: null,
        movieList: [],
    },
    reducers: {
        fetchMovieList: (state) => {
            state.error = false;
            state.loading = true;
            state.totalMoviesResult = '';
        },
        fetchMovieListError: (state) => {
            state.error = true;
            state.loading = false;
        },
        setMovieList: (state, { payload }) => {
            state.error = false;
            state.loading = false;
            state.page = payload.page;
            state.movieList = payload.results;
            state.totalPages = payload.total_pages;
            state.totalMoviesResult = payload.total_results;
        },
    },
});

export const {
    setMovieList,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions;

export const selectMovieList = (state) => state.movies;

export const selectTotalMoviesPages = (state) =>
    selectMovieList(state).totalPages;

export const selectTotalMoviesResults = (state) =>
    selectMovieList(state).totalMoviesResult;

export const movieListReducer = movieListSlice.reducer;
