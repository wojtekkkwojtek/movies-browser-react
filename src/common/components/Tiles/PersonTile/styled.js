import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    width: 208px;
    height: 339px;
    padding: 16px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px ${({ theme }) => theme.color.stormGray};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 136px;
        height: 245px;
        padding: 8px;
    }
`

export const Poster = styled.img`
    border-radius: 5px;
    width: 155px;
    max-height: 232px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 110px;
        height: 165px;
    }
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`
export const InfoDetails = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    margin: 6px 0px;
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
`
