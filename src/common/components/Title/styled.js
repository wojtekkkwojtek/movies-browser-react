import styled from 'styled-components';

export const Container = styled.h1`
    width: 100%;
    margin: 56px 0 16px;
    padding-left: 45px;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-align: center;
        margin-top: 30px;
        padding-left: 5px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        text-align: left;
        font-size: 18px;
        margin: 3% auto 3% 0;
    } ;
`;
