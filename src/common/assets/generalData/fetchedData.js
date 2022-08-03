export const API_KEY = process.env.REACT_APP_API_KEY;
export const baseAPIUrl = `?api_key=${API_KEY}`;
export const URL = 'https://api.themoviedb.org/3';
export const URLgenres = `${URL}/genre/movie/list${baseAPIUrl}`;
export const URLpopularMovies = `${URL}/movie/popular${baseAPIUrl}`;
export const URLpopularPeople = `${URL}/person/popular${baseAPIUrl}`;
export const URLmovie = `${URL}/movie/popular${baseAPIUrl}`;
export const URLpeople = `${URL}/person/popular${baseAPIUrl}`;

export const movieApiDetails = (id) => `${URL}/movie/${id}${baseAPIUrl}`;
export const castApiDetails = (id) => `${URL}/movie/${id}/credits${baseAPIUrl}`;

export const URLpersonDetails = (personId) =>
    `${URL}/person/${personId}${baseAPIUrl}`;
export const URLpersonCredits = (personId) =>
    `${URL}/person/${personId}/credits${baseAPIUrl}`;
export const URLimage = `https://image.tmdb.org/t/p/original`;
export const URLimageSmall = `https://image.tmdb.org/t/p/w400`;
export const URLmovieSearch = `${URL}/search/movie${baseAPIUrl}`;
export const URLpeopleSearch = `${URL}/search/person${baseAPIUrl}`;
