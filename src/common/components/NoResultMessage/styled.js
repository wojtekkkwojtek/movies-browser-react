import styled from 'styled-components';
import { ReactComponent as NoResult } from '../../assets/icons/no-result.svg';

export const Wrapper = styled.div`
    display: flex;
    flex-basis: auto;
    justify-content: center;
`;

export const NoResultImage = styled(NoResult)`
      @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
          height: 500px;
          width: 500px;
      }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        height: 300px;
        width: 300px;
    }



    @media (orientation: landscape) and (max-width: 900px) {
      position:absolute;
      top: 15%;
      height: 350px;
        width: 350px;    }
`;