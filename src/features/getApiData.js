import axios from 'axios'
import { useEffect } from 'react'

import {
    URLpopularMovies,
    URLmovieDetails,
    URLpopularPeople,
    URLpersonDetails,
    URL
} from '../common/assets/generalData/fetchedData'

import { URLgenres } from '../common/assets/generalData/fetchedData'
   



export const getApiData = async (URL) => {
    const response = await fetch(URL)

    if (!response.ok) {
        new Error(response.statusText)
    }
}   

export const getMovieList = async () => {
    const response = await fetch(URLpopularMovies)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}

export const getPeopleList = async () => {
    const response = await fetch(URLpopularPeople)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}




export const getMovieDetails = async (URL) => {
    return (await axios.get(URL)).data
}

export const getGenres = async (URLgenres) => {
    return (await axios.get(URLgenres)).data
}
console.log("getMovieDetails="+{getMovieDetails})/////////////////////

export const getPersonDetails = async (URL) => {
    return (await axios.get(URL)).data
}
console.log("getPersonDetails"+{getPersonDetails})////////////////////
