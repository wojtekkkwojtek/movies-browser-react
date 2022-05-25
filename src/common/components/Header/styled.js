import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as Camera } from '../../assets/icons/videoIcon.svg'
import { ReactComponent as Magnifier } from '../../assets/icons/searchIcon.svg'
import { ReactComponent as ClearIcon } from "../../assets/icons/clearIcon.svg"

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
`
export const Section = styled.div`
    display: flex;
    width: 1400px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-direction: column;
        height: fit-content;
        justify-content: center;
        width: 100%;
    }
`
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
`
export const IconVideo = styled(Camera)`
    height: 40px;
    width: 40px;
    top: calc(50% - 40px / 2);
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
        width: 17px;
        height: 17px;
    }
`
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
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
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
`
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
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
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
`
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
`
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
`
export const Input = styled.input`
    position: absolute;
    padding-left: 64px;
    padding-right: 10px;
    width: 432px;
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
`
export const ClearInput = styled(ClearIcon)`  
    position: absolute;
    right: -418px;
    cursor:pointer;
    width: 16px;
    height: 16px;
              
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: calc(50% + 610px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileNormal}) {
     
        /* width: 16px;
        height: 16px; */
        left: calc(50% +50px);
        top: 95px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        /* width: 16px;
        height: 16px; */
        left: calc(50% + 612px);
    }  
`;
