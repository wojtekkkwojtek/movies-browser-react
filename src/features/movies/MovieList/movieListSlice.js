import { createSlice } from '@reduxjs/toolkit'

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        // page: null,
        // totalPages: null,
        // totalResults: null,
        loading: true,
        error: false,
        movieList: [],
    },
    reducers: {
        fetchMovieList: (state) => {
            state.loading = false
            // state.error = false
        },
        // fetchMovieListSuccess: (state, { payload }) => {
        //     state.loading = false
        //     state.error = false
        //     state.movieList = payload.movieList
        //     state.totalPages = payload.totalPages
        //     state.totalResults = payload.totalResults
        // },
        fetchMovieListError: (state) => {
            state.loading = false
            state.error = true
        },

        setMovieList: (state, { payload: fetchedData }) => {
            state.movieList = fetchedData.results
        },

        // setMovieId: (state, { payload: id }) => {
        //     state.movie_id = id
        // },
    },
})

export const {
    // setMovieId,
    setMovieList,
    fetchMovieList,
    fetchMovieListSuccess,
    fetchMovieListError,
} = movieListSlice.actions

export const selectMovieList = (state) => state.movies
export const selectMovieId = (state) => state.movies.movieList
// export const selectError = (state) => selectMovieList(state)
// export const selectLoading = (state) => selectMovieList(state).loading
// export const selectTotalPages = (state) => selectMovieList(state).totalPages
// export const selectTotalResults = (state) => selectMovieList(state).totalResults

export const getMovieById = (state, movieId) =>
    state.movies.movieList.find((movie) => movie.id === Number(movieId))

export const movieListReducer = movieListSlice.reducer
