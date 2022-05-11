import { useLocation, useNavigate } from 'react-router-dom'
import { toMovies, toPeople } from '../../../core/App/routes'
import { URLmovieSearch } from '../../assets/generalData/fetchedData'
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
import {
    useReplaceQueryParameter,
    useSearch,
} from '../../../features/useSearch'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    const query = useSearch('search', location)

    const searchMovie = (e) => {
        replaceQueryParameter({
            key: 'search',
            value: e.target.value.trim() === '' ? '' : e.target.value,
        })
        console.log('query:', query)
        const q2 = query.length + 1
        if (query && q2 > 2) {
            dispatch(fetchMovieList(e.target.value))
        }
    }

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
                        value={query ? query : ''}
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
