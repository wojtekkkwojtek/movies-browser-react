import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'

export const PersonTile = ({
    poster,
    title,
    isName,
    role,
    isList,
    onClick,
}) => {
    return (
        <TileContainer isList onClick={onClick}>
            <Poster isList src={`${URLimage}${poster}`} alt="" />
            <Content>
                <InfoWrapper>
                    <InfoDetails>{title}</InfoDetails>
                    <InfoDetails>{isName}</InfoDetails>
                    <InfoDetails>{role}</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
