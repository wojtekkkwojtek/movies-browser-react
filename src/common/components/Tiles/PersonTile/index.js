import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'

export const PersonTile = ({ poster, title, name, role }) => {
    return (
        <TileContainer isList>
            <Poster isList src={`${URLimage}${poster}`} alt="" />
            <Content isList>
                <InfoWrapper isList>
                    <InfoDetails>{title}</InfoDetails>
                    <InfoDetails>{name}</InfoDetails>
                    <InfoDetails>{role}</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
