import Header from "../Header";
import { NoResultImage, Wrapper } from "./styled";
import { MovieHeader } from "../MovieHeader";

export const NoResultMessage = () => {
    return (
        <Header>
            <MovieHeader>
                {`Sorry, there are no results for ""`}
            </MovieHeader>
            <Wrapper>
                <NoResultImage />
            </Wrapper>
        </Header>
    );
};