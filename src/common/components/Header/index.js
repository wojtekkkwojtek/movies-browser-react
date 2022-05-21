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
} from './styled'

import { useReplaceQueryParameter } from '../../../features/useParameters'
import { queryKeys } from '../../../features/queryKeys'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    const searchMovie = (e) => {
        console.log('iwent:', e.target.value)
        replaceQueryParameter({
            key: queryKeys.search,
            value: e.target.value.trim(),
        })
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
                </Label>
            </Section>
        </Wrapper>
    )
}

export default Header
