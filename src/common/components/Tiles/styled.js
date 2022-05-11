import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: block;
    grid-gap: 40px;
    margin: 64px auto 0;
   
    ${({ isList }) =>
        isList &&
        css`
            width: 324px;
            min-height: 650px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            grid-gap: 0px;
            margin: 0px;
            transition: 1s;

            &:hover{ 
                cursor:pointer;
                transform:scale(1.03)
            }
        `}

    ${({ details }) => details && css``} 

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
              
        ${({ isList }) =>
        isList &&
        css`
            display: flex;
            flex-direction: row;
            min-height: 201px;
            width: 100%;
            padding: 16px;
        `}
    }
`
export const Poster = styled.img`
    width: 312px;
    height: 464px;
    display: block;
    border-radius: 5px;
    float: left;

    ${({ details }) =>
        details &&
        css`
            float: left;
            margin-right: 40px;
        `}
    ${({ isList }) =>
        isList &&
        css`
           height: 434px;
           width:292px;
        `}    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
        height:auto;
        margin-right: 16px;
        flex-shrink:0;
    }
`
export const Content = styled.div`
    ${({ isList }) =>
        isList &&
        css`
            text-align: center;
            margin-right: 8px;
            padding: 0px;
            display:flex;
            flex-direction: column;
        `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}){
        ${({ isList }) =>
        isList &&
        css`
        display: flex;
        flex-direction: column;
        `} 
    }
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
        margin:4px 0;
    }
`
export const Subtitle = styled.p`
    color: ${({ theme }) => theme.color.stormGray};
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    line-height: 1.5;
`;

export const Year = styled.div`
    font-size: 22px;
    margin: 24px 0;
    color: ${({ theme }) => theme.color.darkerGray};

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


    ${({ nonInList }) =>
        nonInList &&
        css`
            display: none;
    `}

    ${({ rates }) =>
        rates &&
        css`
            margin:0;
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: column;

        ${({ nonInList }) =>
        nonInList &&
        css`
            display: none;
        `}

        ${({ rates }) =>
        rates &&
        css`
            align-items: flex-end;
            margin:0;
            flex-grow: 0;
            flex-direction: row;
            margin-top:8px;
        `}

        ${({ isList }) =>
        isList &&
        css`
           display: flex;
           flex-direction: row;
           align-items: baseline;
           margin: 0px;
           margin-bottom:0px;
        `}
    }
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

    ${({ isList }) =>
        isList &&
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

        ${({ isList }) =>
        isList &&
        css`
            font-weight: 400;
            font-size: 10px;
            padding:4px;
        `}
    }
`
export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-top:0px;
    color: ${({ theme }) => theme.color.candlelight};
    margin: 27.09px 0 - 8px 8px;
    align-items:baseline;

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
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        
        ${({ isList }) =>
        isList &&
        css`
                width: 16px;
                height: 16px;
                margin-top:10px;
        `}
    }
`
export const Rate = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    align-items: center;
    margin:0px 8px;
    display:flex;
          
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
    font-size: 13px;
      
    ${({ person }) =>
        person &&
        css`
            display: none;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
                   
    }
`
export const Overview = styled.p`
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;

    ${({ isList }) =>
        isList &&
        css`
            display: none;
        `}


    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }
`
