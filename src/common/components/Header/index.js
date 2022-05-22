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
    ClearInput,
} from './styled'
import { useReplaceQueryParameter } from '../../../features/useParameters'
import { queryKeys } from '../../../features/queryKeys';
import { useState } from 'react';

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')

    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    const searchMovie = (e) => {
        setInputValue(e.target.value)
        replaceQueryParameter({
            key: queryKeys.search,
            value: e.target.value.trim(),
        })
    }

    const deleteInput = () => {
        setInputValue('')
        location.pathname.indexOf('/movie') !== -1
            ? navigate(toMovies())
            : navigate(toPeople())
        // replaceQueryParameter({
        //     key: queryKeys.page,
        //     value: 1,
        // })
        // replaceQueryParameter({
        //     key: queryKeys.search,
        //     value: '',
        // })
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
                    //type="search"
                        value={inputValue}
                        placeholder={`Search for ${
                            location.pathname.indexOf('/movie') !== -1
                                ? 'movies...'
                                : 'people...'
                        } `}
                    />
                    <ClearInput onClick={deleteInput} />
                </Label>
            </Section>
        </Wrapper>
    )
}

export default Header
