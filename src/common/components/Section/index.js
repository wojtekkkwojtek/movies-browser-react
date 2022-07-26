import styled, { css } from 'styled-components';

export const Section = styled.div`
    height: 100%;
    max-width: 1368px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    padding-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding: 0 16px;
        gap: 16px;

        ${({ isList }) =>
            isList &&
            css`
                gap: 10px;
            `}
    }
`;
