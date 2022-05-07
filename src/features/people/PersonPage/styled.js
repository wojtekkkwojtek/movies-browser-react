import styled from "styled-components";
import { theme } from "../../../core/App/theme";

export const StyledButton = styled.button`
    border: none;
    height:80px;
    width: 120px;
    font-size: 20px;
    margin: 16px;
    background-color: ${({ theme }) => theme.color.whisper};
    color: ${({ theme }) => theme.color.waterloo};
cursor: pointer;
`;
export const Wrapper = styled.div`
text-align: center;
`;