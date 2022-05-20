import Header from "../Header";
import { NoResultImage, Wrapper } from "./styled";
import { Title } from "../Title";

export const NoResultMessage = (title, query) => {
    return (
        <>
            {/* <Title
                title={`Sorry, there are no results for "${query}"`} /> */}
            
            <Wrapper>
                <NoResultImage />
            </Wrapper>
        </>

    );
};