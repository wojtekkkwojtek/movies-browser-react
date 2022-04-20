import { toMovies, toPeople } from '../../../core/App/routes'
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

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <NavContainer>
                    <IconVideo />
                    <Title>movies browser</Title>
                    <StyledNavLink to={toMovies}>movies</StyledNavLink>
                    <StyledNavLink to={toPeople}>people</StyledNavLink>
                </NavContainer>
                <Label>
                    <SearchIcon />
                    <Input type="text" placeholder="Search for movies..." />
                </Label>
            </Container>
        </Wrapper>
    )
}

export default Header
