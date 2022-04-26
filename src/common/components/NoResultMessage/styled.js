import styled from "styled-components";
import { ReactComponent as NoResult } from "./no-result.svg";

export const Wrapper = styled.div`
    display: flex;
    flex-basis: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        margin-top: 15px;
    }
`;

export const NoResultImage = styled(NoResult)`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        height: 50%;
    }
`;