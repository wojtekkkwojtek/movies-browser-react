import styled from 'styled-components';
import { ReactComponent as ErrorImage } from './error.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    padding: 0 5%;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: 5%;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        margin-top: 2%;
    }
`;

export const StyledErrorImage = styled(ErrorImage)`
    margin-bottom: 38px;
    max-width: 120px;

    @media (orientation: landscape) and (max-width: 900px) {
        margin-bottom: 20px;
        height: 100px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 90px;
    }
`;

export const Information = styled.h2`
    font-size: 36px;
    font-weight: 600;
    margin: 0;

    @media (orientation: landscape) and (max-width: 900px) {
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 18px;
    }
`;

export const Announcement = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin: 24px 0;
    @media (orientation: landscape) and (max-width: 900px) {
        font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }
`;

export const GoBackButton = styled.button`
    text-decoration: none;
    display: inline-block;
    padding: 16px 24px;
    font-size: 14px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    border: none;
    border-radius: 5px;

    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;
