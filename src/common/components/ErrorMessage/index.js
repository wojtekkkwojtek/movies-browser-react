import {
    Announcement,
    GoBackButton,
    Information,
    StyledErrorImage,
    Wrapper,
} from './styled';
import { Link } from 'react-router-dom';
import { toMovies } from '../../../core/App/routes';

export const ErrorMessage = () => (
    <Wrapper>
        <StyledErrorImage />
        <Information>Ooops! Something went wrong...</Information>
        <Announcement>
            Please check your network connection or your URL address and try again
        </Announcement>
        <GoBackButton as={Link} to={toMovies()}>
            Back to home page
        </GoBackButton>
    </Wrapper>
);