import { toMovies } from '../../../core/App/routes'
import {
    Announcement,
    GoBackButton,
    Information,
    StyledErrorImage,
    Wrapper,
} from './styled'

export const ErrorMessage = () => (
    <Wrapper>
        <StyledErrorImage />
        <Information>Ooops! Something went wrong...</Information>
        <Announcement>
            Please check your network connection and try again
        </Announcement>
        <GoBackButton to={toMovies()}>Back to home page</GoBackButton>
    </Wrapper>
)
