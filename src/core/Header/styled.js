import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 94px;
  width: 100vw;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
`;

export const Container = styled.div`
  display: flex;
`;
