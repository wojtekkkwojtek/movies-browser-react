import { createSlice } from "@reduxjs/toolkit";

const moviesGenresSlice = createSlice({
  name: "genres",
  initialState: {
    loading: false,
    genresList: [],
  },
  reducers: {
fetchGenres: (state) => {
  state.loading = true
},
    setGenres: (state, {payload}) => {
      state.genresList = payload.genres
      console.log("genresList", state.genresList);
  },
  }
})
export const {
  fetchGenres, 
  setGenres
} = moviesGenresSlice.actions;

export const selectMoviesGenresList = (state) => state.genres

export const moviesGenresReducer = moviesGenresSlice.reducer