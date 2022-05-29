import { useLocation } from 'react-router-dom';

export const useSearch = (key) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    return searchParams.get(key);
};

export const useReplaceQueryParameter = (location, navigate) => {
    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search)
        if (value === undefined) {
            searchParams.delete(key)
        } else {
            searchParams.set(key, value)
        }
        if (location.pathname.indexOf('/movie') !== -1) {
            navigate(`/movies?${searchParams.toString()}`)
        } else {
            navigate(`/people?${searchParams.toString()}`)
        }
    }
};