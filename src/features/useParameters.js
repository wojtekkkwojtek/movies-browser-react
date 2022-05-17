import { useLocation } from 'react-router-dom'

export const useSearch = (key) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    console.log('searchParams.get(key):', searchParams.get(key))
    return searchParams.get(key)
}

export const useReplaceQueryParameter = (location, navigate) => {
    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search)
        if (value === undefined) {
            searchParams.delete(key)
        } else {
            searchParams.set(key, value)
        }
        console.log('location.pathname:', location.pathname)
        // navigate(`${location.pathname}?${searchParams.toString()}`)
        if (location.pathname.indexOf('/movie') !== -1) {
            navigate(`/movies?${searchParams.toString()}`)
        } else {
            navigate(`/people?${searchParams.toString()}`)
        }
    }
}
