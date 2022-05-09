import axios from 'axios'

import {
    URLpopularMovies,
    URLpopularPeople,
} from '../common/assets/generalData/fetchedData'

export const getApiData = async (URL) => {
    const response = await fetch(URL)

    if (!response.ok) {
        new Error(response.statusText)
    }
}

export const getMovieList = async (URL) => {
    const response = await fetch(URL)

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

export const getData = async (URL) => {
    return (await axios.get(URL)).data
}
