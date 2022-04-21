import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 324px;
    min-height:650px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;   
`;

export const Poster = styled.img`
    width: 292px;
    height: auto;
    display: block;
    border-radius: 5px;
    margin-top:16px;
    margin-bottom:8px;
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-content: space-between;  
`;

export const Title = styled.header`
    font-weight: 500;
    font-size: 22px;
    display: flex;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    margin:4px 0;
    line-height: 1.3;
    
    /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 16px;
    } */
`;

export const Year = styled.p`
    font-weight: 400px;
    font-size: 16px;
    line-height: 1.5;
    margin:4px 0;
    color: ${({ theme }) => theme.color.waterloo};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin: 0;
    }
`;

export const Wrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 0;
    margin: 4px -8px 0px -4px;
 
    ${({ rates }) => rates && css`
        gap:8px;
        margin: 8px 0 16px 0;
        justify-content: flex-start;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
    }
`;

export const Genres = styled.li`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 4px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
        line-height: 1.1;
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 20.87px;
    color: ${({ theme }) => theme.color.candlelight};   
`;

export const Rate = styled.li`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`;

export const Score = styled.li`
    font-size: 16px;
    font-weight: 400px;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`;
