import styled from "styled-components";
import { theme } from "../../../core/App/theme";

export const StyledButton = styled.button`
    border: none;
    height: 40px;
    width: 130px;
    font-size: 22px;
    margin: 16px;
    background-color: ${({ theme }) => theme.color.blue};
    color: ${({ theme }) => theme.color.white};
cursor: pointer;
`;
export const Wrapper = styled.div`
text-align: center;
`;