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

const Header = () => {
    return (
        <Wrapper>
            <Section>
                <NavContainer>
                    <IconVideo />
                    <Title to={toMovies()}>movies browser</Title>
                    <StyledNavLink to={toMovies()}>movies</StyledNavLink>
                    <StyledNavLink to={toPeople()}>people</StyledNavLink>
                </NavContainer>
                <Label>
                    <SearchIcon />
                    <Input type="text" placeholder="Search for movies..." />
                </Label>
            </Section>
        </Wrapper>
    )
}

export default Header
