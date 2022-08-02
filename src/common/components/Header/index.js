import { useLocation, useNavigate } from 'react-router-dom';
import { toMovies, toPeople } from '../../../core/App/routes';
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
    TitleWrapper,
} from './styled';
import { useReplaceQueryParameter } from '../../../features/useParameters';
import { queryKeys } from '../../../features/queryKeys';
import { useState } from 'react';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const replaceQueryParameter = useReplaceQueryParameter(location, navigate);
    const searchMovie = (e) => {
        setInputValue(e.target.value);
        replaceQueryParameter({
            key: queryKeys.page,
            value: 1,
        });
        replaceQueryParameter({
            key: queryKeys.search,
            value: e.target.value.trim(),
        });
    };
    const deleteInput = () => {
        setInputValue('');
        location.pathname.indexOf('/movie') !== -1
            ? navigate(toMovies())
            : navigate(toPeople());
    };

    return (
        <Wrapper>
            <Section>
                <NavContainer>
                    <TitleWrapper>
                        <IconVideo />
                        <Title to={toMovies()}>movies browser</Title>
                    </TitleWrapper>
                    <StyledNavLink
                        className={
                            location.pathname.indexOf('/movie') !== -1
                                ? 'active'
                                : null
                        }
                        to={toMovies()}
                        onClick={deleteInput}
                    >
                        movies
                    </StyledNavLink>
                    <StyledNavLink to={toPeople()} onClick={deleteInput}>
                        people
                    </StyledNavLink>
                </NavContainer>
                <Label>
                    <SearchIcon />
                    <Input
                        onChange={searchMovie}
                        value={inputValue}
                        placeholder={`Search for ${
                            location.pathname.indexOf('/movie') !== -1
                                ? 'movies...'
                                : 'people...'
                        } `}
                    />
                    {inputValue && <ClearInput onClick={deleteInput} />}
                </Label>
            </Section>
        </Wrapper>
    );
};

export default Header;
