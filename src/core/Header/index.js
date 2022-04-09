import {
    Container,
    IconVideo,
    Button,
    Title,
    Wrapper,
    Input,
    Label,
    NavContainer,
    SearchIcon,
} from './styled'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <NavContainer>
                    <IconVideo />
                    <Title>movies browser</Title>
                    <Button>movies</Button>
                    <Button>people</Button>
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
