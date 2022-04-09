import {
    Container,
    IconVideo,
    Button,
    Title,
    Wrapper,
    Input,
    Label,
    ReactLogo1,
} from './styled'
import videoIcon from '../App/assets/videoIcon.svg'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <IconVideo src={videoIcon} alt="icon video" />
                <Title>movies browser</Title>
                <Button>movies</Button>
                <Button>people</Button>
                <Label>
                    <ReactLogo1 />
                    <Input type="text" placeholder="Search for movies..." />
                </Label>
            </Container>
        </Wrapper>
    )
}

export default Header
