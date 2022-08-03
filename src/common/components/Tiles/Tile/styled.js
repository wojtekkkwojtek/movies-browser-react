import styled, { css } from 'styled-components';

export const TileContainer = styled.li`
    display: inline-block;
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

    margin: 64px auto 0;
    ${({ isList }) =>
        isList &&
        css`
            width: 324px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            margin: 0px;
            transition: 1s;
            overflow: hidden;
            align-items: ;

            &:hover {
                cursor: pointer;
                transform: scale(1.03);
            }
        `}
    ${({ person }) =>
        person &&
        css`
            display: block;
            min-height: 540px;
        `} 
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding: 16px;
        ${({ details }) =>
            details &&
            css`
                margin-top: 10px;
            `}

        ${({ isList }) =>
            isList &&
            css`
                display: flex;
                flex-direction: row;
                min-height: 201px;
                width: 100%;
                padding: 16px;
            `}
        ${({ person }) =>
            person &&
            css`
                min-height: 200px;
            `}
    }
    @media (orientation: landscape) and (max-width: 700px) {
        margin: 10px;
    }
`;

const Image = css`
    width: 312px;
    height: 450px;
    display: flex;
    border-radius: 5px;
    float: left;
    margin: 0 40px 20px 0;

    ${({ details }) =>
        details &&
        css`
            float: left;
            margin-right: 40px;
        `}
    ${({ isList }) =>
        isList &&
        css`
            height: 420px;
            width: 292px;
            margin: 0;
        `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
        height: 169px;
        margin: 0 16px 8px 0;
        flex-shrink: 0;
        ${({ isList }) =>
            isList &&
            css`
                margin: 0 10px 0 0;
            `}
    }
`;

export const Poster = styled.img`
    ${Image}
`;

export const Content = styled.div`
    /* width: 30%; */
    ${({ isList }) =>
        isList &&
        css`
            display: flex;
            text-align: left;
            padding: 0px;
            margin-top: -3px;
            flex-direction: column;
            height: 100%;
            justify-content: start;
        `}
`;

export const Title = styled.header`
    margin-top: 4%;
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
        margin: 4px 0;
    }
`;

export const Subtitle = styled.h2`
    display: none;
    ${({ isList }) =>
        isList &&
        css`
            display: inline-block;
            color: ${({ theme }) => theme.color.stormGray};
            font-size: 16px;
            font-weight: 400;
            margin: 2% 0 0 0;
            line-height: 1.5;
        `}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`;

export const Year = styled.p`
    font-size: 22px;
    margin: 24px 0;
    ${({ isList }) =>
        isList &&
        css`
            font-weight: 400;
            font-size: 16px;
            margin: 6px 0 0 0;
        `}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        color: ${({ theme }) => theme.color.darkerGray};
        font-size: 13px;
        margin: 0 0 4px 0;
    }
`;

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
        margin: 4px 8px 4px 0;
        padding: 4px;
    }
`;

export const Icon = styled.img`
    margin-top: 8px;
    color: ${({ theme }) => theme.color.candlelight};
    margin: 27.09px 0 - 8px 8px;
    align-items: flex-start;
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
        width: 16px;
        height: 16px;
        margin-top: 0;
    }
`;

export const Rate = styled.div`
    font-size: 22px;
    font-weight: 500;
    line-height: 1;
    align-items: center;
    margin: 0px 8px;
    display: flex;
    line-height: 0.8;
    align-content: flex-end;
    ${({ isList }) =>
        isList &&
        css`
            font-weight: 600;
            font-size: 16px;
            line-height: 1;
        `}
    ${({ person }) =>
        person &&
        css`
            display: none;
        `}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        line-height: 1;
        margin-right: 0;
    }
`;

export const Score = styled.div`
    font-size: 16px;
    margin-left: 8px;
    line-height: 1;
    ${({ isList }) =>
        isList &&
        css`
            color: ${({ theme }) => theme.color.darkerGray};
            margin-left: 0;
        `}
    ${({ person }) =>
        person &&
        css`
            display: none;
        `}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin-left: 4px;
        color: ${({ theme }) => theme.color.darkerGray};
        ${({ invisible }) =>
            invisible &&
            css`
                display: none;
            `}
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 0;

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
            align-items: flex-end;
            flex-direction: row;
        `}
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: row;
        margin: 0;
        ${({ nonInList }) =>
            nonInList &&
            css`
                display: none;
            `}
        ${({ rates }) =>
            rates &&
            css`
                align-items: flex-end;
                margin: 0;
                flex-grow: 0;
                flex-direction: row;
                margin-top: 8px;
            `}
        ${({ isList }) =>
            isList &&
            css`
                display: flex;
                align-items: baseline;
                margin: 0px;
                margin-bottom: 0px;
            `}
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0 0 8px 8px;
    display: flex;
    word-break: break-word;
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
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 12px;
        flex-direction: column;
        ${({ inline }) =>
            inline &&
            css`
                flex-direction: row;
                margin: 8px;
            `}
    }
`;

export const NoInfoTag = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: none;
    }
`;

export const TagBlack = styled.div`
    color: black;
`;

export const Tag1 = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: none;
    }
`;

export const Tag2 = styled.div`
    ${({ mobile }) =>
        mobile &&
        css`
            display: none;
        `}
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
    }
`;

export const Overview = styled.p`
    width: 100%;
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
`;
