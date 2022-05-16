import { createSlice } from '@reduxjs/toolkit';

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        // page: null,
        // totalPages: null,
        // totalResults: null,
        loading: false,
        error: false,
        movieList: [],
        genresList: [],
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = true;
        },
        fetchMovieListSuccess: (state, { payload }) => {
            //     state.loading = false
            //     state.error = false
            //     state.movieList = payload.movieList
            state.totalPages = payload.totalPages;
            //     state.totalResults = payload.totalResults
        },
        fetchMovieListError: (state) => {
            state.error = true;
        },
        setMovieList: (state, { payload: { results }, type }) => {
            state.movieList = results;
            console.log(state.movieList);
        },
        setGenres: (state, action) => {
            state.error = false;
            state.loading = false;
            state.genresList = action.payload.genres;
        },
    },
});

export const {
    // setMovieId,
    setGenres,
    setMovieList,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions;

export const selectMovieList = (state) => state.movies;
// export const selectMovieId = (state) => state.movies.movieList;
// export const selectGenres = (state) => state.genresList;
// export const selectError = (state) => selectMovieList(state);
// export const selectLoading = (state) => selectMovieList(state).loading;
export const selectTotalMoviesPages = (state) => selectMovieList(state).totalPages;
// export const selectTotalResults = (state) => selectMovieList(state).totalResults;

// export const getMovieById = (state, movieId) =>
//     state.movies.movieList.find((movie) => movie.id === Number(movieId));

export const movieListReducer = movieListSlice.reducer;