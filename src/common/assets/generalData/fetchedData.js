export const API_KEY = process.env.REACT_APP_API_KEY;

export const URL = 'https://api.themoviedb.org/3';

export const URLgenres = `${URL}/genre/movie/list?api_key=${API_KEY}`;

export const URLpopularMovies = `${URL}/movie/popular?api_key=${API_KEY}`;

export const URLpopularPeople = `${URL}/person/popular?api_key=${API_KEY}`;

export const URLmovie = `${URL}/movie/popular?api_key=${API_KEY}`;

export const URLpeople = `${URL}/person/popular?api_key=${API_KEY}`;

export const URLpersonDetails = (personId) =>
    `${URL}/person/${personId}?api_key=${API_KEY}`;

export const URLpersonCredits = (personId) =>
    `${URL}/person/${personId}/credits?api_key=${API_KEY}`;

export const URLimage = `https://image.tmdb.org/t/p/original`;
export const URLimageSmall = `https://image.tmdb.org/t/p/w500`;


export const URLmovieSearch = `${URL}/search/movie?api_key=${API_KEY}`;

export const URLpeopleSearch = `${URL}/search/person?api_key=${API_KEY}`;


