import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    height: 770px;
    background-color: ${({ theme }) => theme.color.black};
    position: relative;
    justify-content: center;
    display: flex;
    width: 100vw;
    /* margin-bottom: 64px; */
`

export const Backdrop = styled.div`
    width: 1368px;
    height: 100%;
    background-image: url(${(props) => props.img});
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    text-align: center;
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: end;
    box-shadow: inset 0px 0px 60px 50px black;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        
    }
`

export const Title = styled.p`
    position: relative;
    border-radius: 10px;
    font-size: 46px;
    margin: 22px auto 22px 0px;
    color: ${({ theme }) => theme.color.white};

    ${({ subtitle }) =>
        subtitle &&
        css`
            text-transform: uppercase;
        `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 24px;
        
    }
`

export const VoteCount = styled.div`
    font-size: 16px;
    line-height: 120%;
    margin-left: 0px;
    margin-bottom: 56px;
    color: white;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 10px;
    }
`
