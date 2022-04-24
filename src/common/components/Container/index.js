import styled, { css } from 'styled-components'

export const Container = styled.div`
    max-width: 1368px;
    margin: auto;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding: 0 16px;
    }
`
