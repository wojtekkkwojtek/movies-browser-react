import { Container, IconVideo, Button, Title, Wrapper, Input } from './styled'

import videoIcon from '../App/assets/videoIcon.svg'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <IconVideo src={videoIcon} alt="icon" />
                <Title>movies browser</Title>
                <Button>movies</Button>
                <Button>people</Button>
                <Input />
            </Container>
        </Wrapper>
    )
}

export default Header
