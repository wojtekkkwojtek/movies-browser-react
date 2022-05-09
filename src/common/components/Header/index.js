import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toMovies, toPeople } from '../../../core/App/routes'
import { URLmovieSearch } from '../../assets/generalData/fetchedData'
import { getApiData } from '../../../features/getApiData'
import {
    Container,
    IconVideo,
    Title,
    Wrapper,
    Input,
    Label,
    NavContainer,
    SearchIcon,
    StyledNavLink,
} from './styled'
import { fetchMovieList } from '../../../features/movies/MovieList/movieListSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('search')

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const searchMovie = (e) => {
        const searchParams = new URLSearchParams(location.search)
        if (e.target.value.trim() === '') {
            searchParams.delete('search')
        } else {
            searchParams.set('search', e.target.value)
            console.log('e.target:', e)
        }
        navigate(`${location.pathname}?${searchParams.toString()}`)

        dispatch(fetchMovieList(e.target.value))
    }

    console.log(query)

    return (
        <Wrapper>
            <Container>
                <NavContainer>
                    <IconVideo />
                    <Title to={toMovies()}>movies browser</Title>
                    <StyledNavLink to={toMovies()}>movies</StyledNavLink>
                    <StyledNavLink to={toPeople()}>people</StyledNavLink>
                </NavContainer>
                <Label>
                    <SearchIcon />
                    <Input
                        onChange={searchMovie}
                        type="search"
                        placeholder={`Search for ${
                            location.pathname === '/movies'
                                ? 'movies...'
                                : 'people...'
                        } `}
                    />
                </Label>
            </Container>
        </Wrapper>
    )
}

export default Header
