import styled, { css } from 'styled-components'

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    width: 324px;
    min-height:650px;
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    padding-left: 16px;
    padding-right: 16px;



    
    /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        
        padding: 16px;
    } */
`

export const Poster = styled.img`
    width: 292px;
    height: auto;
    display: block;
    border-radius: 5px;
    margin-bottom:8px;
    

    
    /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 114px;
    } */
`

export const Content = styled.div`
   
`

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
    display: flex;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    margin:8px 0;
    

    /* @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 16px;
    } */
`

export const Year = styled.div`
    font-size: 22px;
    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        margin: 0;
    }
`

export const Wrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 0;
    margin: 0 -8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
    }
`

export const Genres = styled.li`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
        line-height: 1.1;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 22.87px;
    color: ${({ theme }) => theme.color.candlelight};
    margin: 27.09px 0 -8px 8px;
`

export const Rate = styled.li`
    width: 32px;
    height: 29px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    align-items: center;
    margin: 27.09px 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`

export const Score = styled.li`
    font-size: 14px;
    line-height: 1.2;
    margin: 33px 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
    }
`


