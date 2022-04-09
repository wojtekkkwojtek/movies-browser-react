import { Container, IconVideo, Title, Wrapper } from './styled'

import videoIcon from '../App/assets/videoIcon.svg'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <IconVideo src={videoIcon} alt="icon" />
                <Title>Movies Browser</Title>
            </Container>
        </Wrapper>
    )
}

export default Header
