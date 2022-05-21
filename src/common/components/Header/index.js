import { debounce } from 'lodash'
import { useLocation, useNavigate } from 'react-router-dom'
import { toMovies, toPeople } from '../../../core/App/routes'
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
    ClearButton,
    ClearInput,
} from './styled'
import { fetchMovieList } from '../../../features/movies/MovieList/movieListSlice'
import {
    useReplaceQueryParameter,
    useSearch,
} from '../../../features/useParameters'
import { fetchPeopleList } from '../../../features/people/PeopleList/peopleListSlice'
import { queryKeys } from '../../../features/queryKeys'
import { useDispatch } from 'react-redux'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    const query = useSearch(queryKeys.search, location)
    const searchMovie = (e) => {
        console.log('iwent:', e.target.value)
        replaceQueryParameter({
            key: queryKeys.search,
            value: e.target.value.trim(),
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

    const deleteInput = (e) => {
        replaceQueryParameter(
            {
                key: queryKeys.search,
                value: (e.target.value = ''),
            },
            {
                key: queryKeys.search,
                value: (e.target.page = 1),
            }
        )
    }

    const debouncedSearchMovie = debounce((e) => {
        searchMovie(e)
    }, 2000)

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
                        onChange={debouncedSearchMovie}
                        type="search"
                        placeholder={`Search for ${
                            location.pathname.indexOf('/movie') !== -1
                                ? 'movies...'
                                : 'people...'
                        } `}
                    />
                    <ClearButton onClick={deleteInput}>
                        <ClearInput />
                    </ClearButton>
                </Label>
            </Section>
        </Wrapper>
    )
}

export default Header
