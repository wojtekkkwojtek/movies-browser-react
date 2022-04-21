import styled, { css } from 'styled-components'
import image from './poster-big.jpg'

export const Wrapper = styled.div`
    height: 770px;
    background-color: ${({ theme }) => theme.color.black};
    position: relative;
    justify-content: center;
    display: flex;
`

export const Backdrop = styled.div`
    width: 100%;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
`

export const Title = styled.p`
    position: relative;
    background-color: darkblue;
    border-radius: 10px;
    font-size: 46px;
    color: ${({ theme }) => theme.color.waterloo};

    ${({ subtitle }) =>
        subtitle &&
        css`
            text-transform: uppercase;
        `}
`
