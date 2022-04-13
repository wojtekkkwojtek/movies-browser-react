import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.breakpoints. mobileNormal}) {
    padding: 0 16px;
  }
`;