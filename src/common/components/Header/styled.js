import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Camera } from '../../assets/icons/videoIcon.svg';
import { ReactComponent as Magnifier } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as ClearIcon } from '../../assets/icons/clearIcon.svg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 94px;
    width: 100%;
    position: sticky;
    z-index: 5;
    top: 0;
    color: white;
    background-color: ${({ theme }) => theme.color.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-top: 20px;
        height: 142px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        padding-top: 0;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        /* background-color: yellow; */
        position: static;
        height: fit-content;
        padding: 10px 0;
        /* padding-bottom: 10px; */
    }
`;

export const Section = styled.div`
    display: flex;
    width: 1400px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        height: fit-content;
        justify-content: end;
        width: 100%;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        flex-direction: row;
        justify-content: start;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-left: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        justify-content: center;
        padding-left: 12px;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        padding-left: 20px;
    }
`;

export const TitleWrapper = styled.div`
    transition: all 0.6s;
    display: flex;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`;
export const IconVideo = styled(Camera)`
    height: 40px;
    width: 40px;
    top: calc(50% - 40px / 2);
    color: red;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 17px;
        /* height: 17px; */
    }
`;

export const Title = styled(NavLink)`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    margin-left: 16.58px;
    margin-right: 80px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-right: 65px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 95px;
        height: 100%;
        font-size: 13px;
        margin-left: 8px;
        margin-right: 10px;
        letter-spacing: -0.5px;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        display: none;
    }
`;

export const StyledNavLink = styled(NavLink)`
    width: 102px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    text-decoration: none;
    margin: 0px 10px;
    align-items: center;
    padding: 8px 24px;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    transition: all 0.6s;
    cursor: pointer;

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
    &:hover {
        opacity: 0.5;
    }

    // to samo dwa razy niżej:

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        display: flex;
        align-items: center;
        width: 70px;
        margin: 24px 6px;
        height: 34px;
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 29px;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        display: flex;
        align-items: center;
        width: 70px;
        margin: 4px 6px;
        height: 34px;
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 29px;
    }
`;

export const Label = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    left: -450px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 30px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        position: static;
    }

    @media (orientation: landscape) and (max-width: 900px) {
        left: -20px;
    }
`;

export const SearchIcon = styled(Magnifier)`
    position: absolute;
    right: -45px;
    width: 18.76px;
    height: 19.22px;
    margin-left: 26.76px;
    z-index: 1000;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: calc(50% + 216px);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        margin-left: 18px;
        width: 16px;
        height: 16px;
        left: calc(50% - 144px);
        top: 95px;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        top: -42px;
        left: calc(50% + 50px);
    }
`;

export const Input = styled.input`
    position: absolute;
    padding-left: 64px;
    padding-right: 10px;
    width: 412px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    outline: none;
    font-weight: 400;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: calc(50% + 216px);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        font-size: 13px;
        padding-left: 45px;
        width: 288px;
        height: 44px;
        left: calc(50% - 144px);
        top: 82px;
        font-weight: 400;
    }
    @media (orientation: landscape) and (max-width: 900px) {
        font-size: 13px;
        padding-left: 45px;
        width: 288px;
        height: 40px;
        left: calc(100% + 60px);
        top: -50px;
        font-weight: 400;
    }
`;

export const ClearInput = styled(ClearIcon)`
    position: absolute;
    right: -400px;
    cursor: pointer;
    @media (orientation: landscape) and (max-width: 900px) {
        right: -200px;
        left: calc(50% + 300px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: calc(50% + 600px);
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        margin-left: 18px;
        width: 16px;
        height: 16px;
        left: calc(50% + 100px);
        top: 95px;
    }
`;
