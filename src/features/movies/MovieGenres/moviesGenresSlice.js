import { createSlice } from '@reduxjs/toolkit';

const moviesGenresSlice = createSlice({
  name: "genres",
  initialState: {
    error: false,
    loading: false,
    genresList: [],
  },
  reducers: {
    fetchGenres: (state) => {
      state.error = false
      state.loading = true
    },
    fetchGenresError: (state) => {
      state.error = true
      state.loading = false
    },
    setGenres: (state, { payload }) => {
      state.loading = false
      state.genresList = payload.genres
    },
  }
})

export const {
  fetchGenres,
  fetchGenresError,
  setGenres
} = moviesGenresSlice.actions;

export const selectMoviesGenresList = (state) => state.genres;
export const moviesGenresReducer = moviesGenresSlice.reducer;