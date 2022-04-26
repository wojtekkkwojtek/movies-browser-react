import axios from 'axios'
import { useEffect } from 'react'

import {
    URLpopularMovies,
    URLmovieDetails,
} from '../common/assets/generalData/fetchedData'

export const getMovieList = async () => {
    const response = await fetch(URLpopularMovies)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}

// export const getMovieDetails = async () => {
//     const response = await fetch(URLmovieDetails)

//     if (!response.ok) {
//         new Error(response.statusText)
//     }

//     return await response.json()
// }
// useEffect(() => {
//     const getApi = () => {
//         ;(async (URL) => {
//             try {
//                 const response = await axios.get(URL)
//                 console.log('response:', response)
//                 return response
//             } catch (error) {
//                 console.log('coś nie tak', error)
//             }
//         })()
//     }
//     console.log(getApi())
// }, [])
// export default getApi

// export const getApi = (URL) => {
//     ;(async (URL) => {
//         try {
//             const response = await axios.get(URL)
//             console.log('response:', response)
//             return response
//         } catch (error) {
//             console.log('coś nie tak', error)
//         }
//     })()
// }

export const getMovieDetails = async (URL) => {
    return (await axios.get(URL)).data
}
