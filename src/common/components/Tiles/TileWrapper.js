import styled, { css } from 'styled-components';
export const TileWrapper = styled.ul`
    list-style: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 24px;
    padding: 3%;
    margin-bottom: 3%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding: 0 16px;
        gap: 16px;

        ${({ isList }) =>
            isList &&
            css`
                gap: 10px;
                align-items: center;
            `}
    }
`;
