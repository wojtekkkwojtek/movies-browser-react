import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        genres: null,
        status: "initial",
    },
    reducers: {
        fetchGenres: (state) => {
            state.status = "loading";
            state.genres = null;
        },
        fetchGenresSuccess: (state, {genres}) => {
            state.genres = genres.genres;
            state.status = "success";
        },
        fetchGenresError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresError,
} = genresSlice.actions;

export const selectGenres = (state) => state.genres.genres;
export const selectGenresStatus = (state) => state.genres.status;

export const genresReducer = genresSlice.reducer;