import { 
    Announcement,
    GoBackButton,
    Information,
    StyledErrorImage,
    Wrapper,
} from "./styled";

export const ErrorMessage = () => (
    <Wrapper>
        <StyledErrorImage />
        <Information>
            Ooops! Something went wrong...
        </Information>
        <Announcement>
            Please check your network connection and try again
        </Announcement>
        <GoBackButton>
            Back to home page
        </GoBackButton>
    </Wrapper>
);