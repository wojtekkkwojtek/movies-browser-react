import styled, { css } from 'styled-components';
import { ReactComponent as NoPoster } from './noPoster.svg';

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
                gap: 16px;
                margin: 0px;
                transition: 1s;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.03);
                }
            `
    }
    ${({ details }) => details && css``} 
    ${({ person }) => person && css`
    max-width: 1368px;
    ${({ person }) => person && css`
    display: flex;
    flex-direction: row;
    min-height: 644px;
    `} 
    `} 


    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding: 16px;
        margin: 16px auto 0;

        ${({ isList }) =>
            isList &&
                css`
                    display: flex;
                    flex-direction: row;
                    min-height: 201px;
                    width: 100%;
                    padding: 16px;
                `
        }
    }
    @media (orientation: landscape) and (max-width: 900px)  {
      margin: 5px 0;
    }
`;

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
            `
    }
    ${({ isList }) =>
        isList &&
            css`
                height: 434px;
                width: 292px;
            `
    }    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
        height: auto;
        margin-right: 16px;
        flex-shrink: 0;

        ${({ isList }) =>
            isList &&
                css`
                    margin: 0;
                `
        }
    }
`;

export const StyledNoPoster = styled(NoPoster)`
    min-height: 434px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
        height: 169px;
        min-height:0;
    }
`;

export const Content = styled.div`
    ${({ isList }) =>
        isList &&
            css`
                text-align: left;
                padding: 0px;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                align-content: flex-start;
            `
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        ${({ isList }) =>
            isList &&
                css`
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                `
        }
    }
  
`;

export const Wrapper = styled.div``;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;

    ${({ isList }) =>
        isList &&
            css`
                font-weight: 500;
                font-size: 22px;
            `
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 16px;
        margin: 4px 0;
    }
`;

export const Subtitle = styled.p`
    display: none;

    ${({ isList }) =>
        isList &&
            css`
                display: block;
                color: ${({ theme }) => theme.color.stormGray};
                font-size: 16px;
                font-weight: 400;
                margin: 0;
                line-height: 1.5;
            `
    }

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
                margin: 8px 0 0 0;
            `
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        color: ${({ theme }) => theme.color.darkerGray};
        font-size: 13px;
        margin: 0 0 4px 0;
    }
`;

export const Tag = styled.span`
    color: ${({ theme }) => theme.color.black};
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
   
    ${({ person }) =>
        person &&
            css`
                display: none;
            `
    }
    ${({ movie }) =>
        movie &&
            css`
                display: none;
            `
    }
    ${({ nonInList }) =>
        nonInList &&
            css`
                display: none;
            `
    }
    ${({ rates }) =>
        rates &&
            css`
                align-items: flex-end;
                flex-direction: row;
            `
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        flex-direction: row;
        margin: 0;

        ${({ nonInList }) =>
            nonInList &&
                css`
                    display: none;
                `
        }
        ${({ rates }) =>
            rates &&
                css`
                    align-items: flex-end;
                    margin: 0;
                    flex-grow: 0;
                    flex-direction: row;
                    margin-top: 8px;
                `
        }
        ${({ isList }) =>
            isList &&
                css`
                    display: flex;
                    align-items: baseline;
                    margin: 0px;
                    margin-bottom: 0px;
                `
        }
    }
`;

export const Info = styled.div`
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
            `
    }
    ${({ person }) =>
        person &&
            css`
                display: none;
            `
    }
    ${({ isList }) =>
        isList &&
            css`
                display: none;
            `
    }
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 12px;
        flex-direction: column;

        ${({ inline }) =>
            inline &&
                css`
                    flex-direction: row;
                    margin: 8px;
                `
        }
    }
`;

export const NoInfoTag = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: none;
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
            `
    }

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
            `
    }
    ${({ person }) =>
        person &&
            css`
                display: none;
            `
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 16px;
        height: 16px;
        margin-top:0;
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
            `
    }
    ${({ person }) =>
        person &&
            css`
                display: none;
            `
    }

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
            `
    }
    ${({ person }) =>
        person &&
            css`
                display: none;
            `
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin-left: 4px;
        color: ${({ theme }) => theme.color.darkerGray};

        ${({ invisible }) =>
            invisible &&
                css`
                    display: none;
                `
        }
    }
`;

export const Overview = styled.p`
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    /* min-width: 600px; */

    ${({ isList }) =>
        isList &&
            css`
                display: none;
            `
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
    }
`;

export const Tag1 = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: none;
    }
`;

export const Tag2 = styled.span`
    ${({ mobile }) =>
        mobile &&
            css`
                display: none;
            `
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: block;
    }
`;