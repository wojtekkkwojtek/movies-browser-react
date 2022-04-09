import styled from 'styled-components'
import { ReactComponent as Camera } from '../App/assets/videoIcon.svg'
import { ReactComponent as Magnifier } from '../App/assets/searchIcon.svg'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 94px;
    color: white;
    background-color: ${({ theme }) => theme.color.black};
`

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 1400px;
    align-items: center;
    justify-content: space-between;
`
export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
`

export const IconVideo = styled(Camera)`
    height: 40px;
    width: 40px;
    top: calc(50% - 40px / 2);
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
    top: calc(50% - 40px / 2);
    margin-left: 16.58px;
    margin-right: 80px;
`

export const Button = styled.button`
    width: 102px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-transform: uppercase;
    margin: 0px 10px;
    align-items: center;
    padding: 8px 24px;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;

    &:hover,
    &:focus {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    left: -440px;
`

export const SearchIcon = styled(Magnifier)`
    position: absolute;
    right: -50px;
    width: 18.76px;
    height: 19.22px;
    margin-left: 26.76px;
    stroke-width: 3px;
    stroke: red;
    z-index: 1000;
`

export const Input = styled.input`
    /* padding: 10px 30px; */
    /* margin-left: 70px;
    border: none;*/
    padding-left: 60px;
    position: absolute;
    /* margin-left: 400px; */
    width: 432px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    outline: none;
`
