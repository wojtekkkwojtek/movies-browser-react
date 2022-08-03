import styled, { css } from 'styled-components';

export const TileContainer = styled.div`
    width: 208px;
    /* height: 339px; */
    padding: 19px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.stormGray};
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.04);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 136px;
        /* height: 245px; */
        padding: 8px;
    }
`;

export const Poster = styled.img`
    border-radius: 5px;
    width: 167px;
    max-height: 245px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 115px;
        height: 170px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin: 6% 0;
    overflow: hidden;
`;

export const InfoDetails = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    font-weight: 500;
    font-size: 18px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }

    ${({ gray }) =>
        gray &&
        css`
            color: ${({ theme }) => theme.color.stormGray};
            font-weight: 400;
            font-size: 15px;
            line-height: 150%;
            margin: 0px;

            @media (max-width: ${({ theme }) =>
                    theme.breakpoints.mobileNormal}) {
                font-size: 12px;
            }
        `}
`;
