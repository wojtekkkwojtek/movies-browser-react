import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const loaderAnimation = keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}
`;

export const StyledSpinner = styled(Spinner)`
    animation-name: ${loaderAnimation};
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  `;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top:120px;
  `;

