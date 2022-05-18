import { useLocation, useNavigate } from 'react-router-dom'
import { toMovies, toPeople } from '../../../core/App/routes'
import { URLmovieSearch } from '../../assets/generalData/fetchedData'
import {
    Section,
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
} from '../../../features/useParameters'
import { fetchPeopleList } from '../../../features/people/PeopleList/peopleListSlice'
import { queryKeys } from '../../../features/queryKeys'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    const query = useSearch(queryKeys.search, location)

    const searchMovie = (e) => {
        replaceQueryParameter({
            key: queryKeys.search,
            value: e.target.value.trim() === '' ? '' : e.target.value,
        })

        if (
            (query && query.length > 2 && location.pathname === '/movies') ||
            location.pathname === '/movie/'
        ) {
            dispatch(fetchMovieList(e.target.value))
        } else if (query && query.length > 2) {
            dispatch(fetchPeopleList(e.target.value))
        }
    }

    return (
        <Wrapper>
            <Section>
                <NavContainer>
                    <IconVideo />
                    <Title to={toMovies()}>movies browser</Title>
                    <StyledNavLink
                        className={
                            location.pathname.indexOf('/movie') !== -1
                                ? 'active'
                                : null
                        }
                        to={toMovies()}
                    >
                        movies
                    </StyledNavLink>
                    <StyledNavLink to={toPeople()}>people</StyledNavLink>
                </NavContainer>
                <Label>
                    <SearchIcon />
                    <Input
                        onChange={searchMovie}
                        value={query ? query : ''}
                        type="search"
                        placeholder={`Search for ${
                            location.pathname.indexOf('/movie') !== -1
                                ? 'movies...'
                                : 'people...'
                        } `}
                    />
                </Label>
            </Section>
        </Wrapper>
    )
}

export default Header
