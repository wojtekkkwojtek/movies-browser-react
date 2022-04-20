import { configureStore } from "@reduxjs/toolkit";
import {genresReducer} from "../../src/common/assets/generalData/genresSlice";
import { movieListReducer } from "../features/movies/MovieList/movieListSlice";
import { moviePageReducer } from "../features/movies/MoviePage/moviePageSlice";

const store = configureStore({
    reducer:{
        genres: genresReducer,
        movieList: movieListReducer,
        moviePage: moviePageReducer,
    },
});

export default store;