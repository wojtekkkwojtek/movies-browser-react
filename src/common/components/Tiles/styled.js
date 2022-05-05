import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: block;
    //grid-template-rows:  1fr auto;
    grid-gap: 40px;
    margin: 64px auto 0;

    ${({ isList }) =>
        isList &&
        css`
            width: 324px;
            height: auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
            grid-gap: 0px;
            margin: 0px;
        `}

    ${({ details }) => details && css``} 

     @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: column;
        padding: 16px;
    }
`

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    display: block;
    border-radius: 5px;
    float: left;

    ${({ details }) =>
        details &&
        css`
            float: left;
            margin-right: 40px;
        `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
    }
`

export const Content = styled.div`
    ${({ isList }) =>
        isList &&
        css`
            text-align: center;
            margin-right: 8px;
            padding: 0px;
        `}
`

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;

    ${({ isList }) =>
        isList &&
        css`
            font-weight: 500;
            font-size: 22px;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 16px;
    }
`

export const Year = styled.div`
    font-size: 22px;
    margin: 24px 0;

    ${({ isList }) =>
        isList &&
        css`
            font-weight: 400;
            font-size: 16px;
            margin: 8px 0 0 0;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin: 0;
    }
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 16px -8px;

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    ${({ movie }) =>
        movie &&
        css`
            display: none;
        `}

    ${({ isList }) =>
        isList &&
        css`
            display: none;
        `}

    ${({ nonInList }) =>
        nonInList &&
        css`
            display: none;
        `}



    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: column;
    }

    ${({ rates }) => rates && css``}
`

export const Info = styled.div`
    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0 0 8px 8px;

    ${({ movie }) =>
        movie &&
        css`
            display: none;
        `}

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    ${({ isList }) =>
        isList &&
        css`
            display: none;
        `}
`

export const InfoDetails = styled.div`
    font-size: 18px;
    line-height: 1.2;
    margin: 0 0 8px 10px;

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    ${({ movie }) =>
        movie &&
        css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 12px;
    }
`

export const Genres = styled.div`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 8px 16px 8px 0px;
    border-radius: 5px;

    ${({ isList }) =>
        isList &&
        css`
            font-weight: 400;
            font-size: 14px;
            margin: 8px 8px 0 0;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
        line-height: 1.1;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 22.87px;
    color: ${({ theme }) => theme.color.candlelight};
    // margin: 27.09px 0 - 8px 8px;

    ${({ big }) =>
        big &&
        css`
            width: 40px;
            height: 38.12px;
        `}

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}
`

export const Rate = styled.div`
    width: 32px;
    height: 29px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    align-items: center;
    margin: 27.09px 8px;

    ${({ isList }) =>
        isList &&
        css`
            font-weight: 600;
            font-size: 16px;
        `}

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`

export const Score = styled.div`
    font-size: 14px;
    line-height: 1.2;
    margin: 33px 12px 33px 0;

    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`

export const Overview = styled.p`
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }
`
