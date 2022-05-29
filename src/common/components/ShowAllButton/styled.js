import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    height:80px;
    width: 120px;
    font-size: 20px;
    margin: 16px;
    background-color: ${({ theme }) => theme.color.whisper};
    color: ${({ theme }) => theme.color.waterloo};
    cursor: pointer;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 14px;
        height:40px;
        width: 80px;
    }
`;

export const Wrapper = styled.div`
    text-align: center;
`;