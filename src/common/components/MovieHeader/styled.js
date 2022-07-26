import styled, { css } from 'styled-components';
import { Icon } from '../Tiles/Tile/styled';

export const Wrapper = styled.div``;

export const Content = styled.div`
    height: 770px;
    background: ${({ theme }) => theme.color.black} 100% no-repeat;
    position: relative;
    justify-content: center;
    display: flex;
    width: 100vw;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 50vw;
        width: 100%;
        object-fit: contain;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        background-position: top;
        width: 100%;
        object-fit: contain;
    }
`;

export const Backdrop = styled.div`
    width: 1368px;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    /* background: ${({ theme }) => theme.color.black} no-repeat; */

    text-align: center;
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: end;
    box-shadow: inset 0 0 40px 70px black;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 20px;
        width: 100%;
        object-fit: contain;
        box-shadow: inset 0 -10px 40px 50px black;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        background-position: top;
        width: 100%;
        object-fit: contain;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: row;
        align-items: baseline;
    }
`;

export const Title = styled.p`
    position: relative;
    border-radius: 10px;
    font-size: 46px;
    margin: 22px auto 22px 0px;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 auto 6px 16px;
    }

    ${({ subtitle }) =>
        subtitle &&
        css`
            text-transform: uppercase;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 24px;
        font-weight: 600;

        ${({ subtitle }) =>
            subtitle &&
            css`
                font-size: 14px;
            `}
    }
`;

export const VoteCount = styled.div`
    font-size: 16px;
    line-height: 120%;
    margin-left: 0px;
    margin-bottom: 56px;
    color: white;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 0 auto 6px 8px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
    }
`;

export const Star = styled(Icon)`
    width: 40px;
    height: 38.12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 24px;
        height: 24px;
    }
`;
