// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY = "5a59313a8c2952c7e8707cf61f724f36";
export const URL = 'https://api.themoviedb.org/3'

export const URLpopularMovies = `${URL}/movie/popular?api_key=${API_KEY}`

export const URLpopularPeople = `${URL}/person/popular?api_key=${API_KEY}`

export const URLmovie = `${URL}/movie/popular?api_key=${API_KEY}`

export const URLpeople = `${URL}/person/popular?api_key=${API_KEY}`

console.log(URLpopularMovies)
console.log(URLpopularPeople)

export const URLimage = `https://image.tmdb.org/t/p/original`


// export const URLcredits = `${URL}/${movie_id}/credits?api_key=${API_KEY}`

// export const URLdetails = `${URL}/${movie_id}?api_key=${API_KEY}`
