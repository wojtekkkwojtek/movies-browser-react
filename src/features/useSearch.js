export const useSearch = (key, location) => {
    const searchParams = new URLSearchParams(location.search)

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

        if (location.pathname.indexOf('/movie') !== -1) {
            navigate(`/movies?${searchParams.toString()}`)
        } else {
            navigate(`/people?${searchParams.toString()}`)
        }
    }
}
