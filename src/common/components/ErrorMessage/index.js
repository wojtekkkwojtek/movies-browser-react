import {
    Announcement,
    GoBackButton,
    Information,
    StyledErrorImage,
    Wrapper,
} from './styled';
import { toMovies } from '../../../core/App/routes';

export const ErrorMessage = () => (
    <Wrapper>
        <StyledErrorImage />
        <Information>Ooops! Something went wrong...</Information>
        <Announcement>
            Please check your network connection or your URL address and try
            again
        </Announcement>
        <GoBackButton to={toMovies()}>Back to home page</GoBackButton>
    </Wrapper>
);
