import { URLpopularMovies } from '../common/assets/generalData/fetchedData'
import { URLpopularPeople } from '../common/assets/generalData/fetchedData'

export const getExampleTasks = async () => {
    const response = await fetch(URLpopularMovies)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}

console.log(getExampleTasks())

export const getPopularPeople = async () => {
    const response = await fetch(URLpopularPeople)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}
console.log(getPopularPeople())
