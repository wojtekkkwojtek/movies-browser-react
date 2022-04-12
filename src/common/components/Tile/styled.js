import styled, { css } from "styled-components";

export const TileContainer = styled.div`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: grid;
    grid-template-columns:auto 1fr;
    grid-gap: 40px;
  

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
       grid-gap: 40px;
    }
`;

export const Poster = styled.img`
    width: 312px;
    height: 464px;
    display: block;
`;

export const Content = styled.div`
               
`;

export const Title = styled.header`
    font-weight: 600;
    font-size: 36px;
`;

export const Year = styled.div`
    font-size: 22px;
    margin: 24px 0;
`;

export const Wrapper = styled.span`
   
`;

export const InfoWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap ;
    padding-left: 0;
    margin: 16px -8px;
`;

export const InfoDetales = styled.li`
    font-size: 18px;
    line-height: 1.2;
    margin: 0 0 8px 10px;
`;

export const Genres = styled.li`
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.color.mystic};
    font-size: 14px;
    margin: 16px 8px 8px 8px;
    border-radius: 5px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 22.87px;
    color: ${({ theme }) => theme.color.candlelight};
    margin: 27.09px 0 -8px  8px ;
`;

export const Rate = styled.li`
 width: 32px;
    height: 29px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    align-items: center;
    margin: 27.09px 8px;
`;

export const Score = styled.li`
    font-size: 14px;
    line-height: 1.2;
    margin: 33px 8px;
`;

export const Overview = styled.p`
    font-size: 20px;
    margin:  0 8px ;
    line-height: 1.6;
`;
export const Info=styled.div`
 font-size: 18px;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    margin: 0 0 8px 8px;
`;


