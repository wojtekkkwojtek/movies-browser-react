import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 94px;
    width: 100vw;
    color: white;
    background-color: ${({ theme }) => theme.color.black};
`

export const Container = styled.div`
    display: flex;
`

export const IconVideo = styled.img`
    height: 40px;
    width: 40px;
    top: calc(50% - 40px / 2);
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    top: calc(50% - 40px / 2);
`
