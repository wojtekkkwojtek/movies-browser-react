const API_KEY = process.env.REACT_APP_API_KEY

export const URL = 'https://api.themoviedb.org/3'

export const URLpopularMovies = `${URL}/movie/popular?api_key=${API_KEY}`
console.log(URLpopularMovies)
