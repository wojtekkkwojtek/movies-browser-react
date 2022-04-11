import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../assets/icons/spinner.svg";

const loaderAnimation = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
    animation: 1.8s infinite linear ${loaderAnimation};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 35px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
`;