import { URLpopularMovies } from '../common/assets/generalData/fetchedData'

export const getExampleTasks = async () => {
    const response = await fetch(URLpopularMovies)

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}

console.log(getExampleTasks())
