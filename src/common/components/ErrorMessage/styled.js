import styled from "styled-components";
import { ReactComponent as ErrorImage } from "./error.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledErrorImage = styled(ErrorImage)`
  margin-bottom: 38px;
  max-width: 120px;
`;

export const Information = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
    font-size: 18px;
  }
`;

export const Announcement = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 24px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
    font-size: 14px;
  }
`;

export const GoBackButton = styled.button`
  text-decoration: none; 
  display: inline-block;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  border-radius: 5px;
  
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;