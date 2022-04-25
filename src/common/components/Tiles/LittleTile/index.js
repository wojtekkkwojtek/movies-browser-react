import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'

export const LittleTile = ({ poster, title, name, role}) => {
    return (
        <TileContainer little>
            <Poster little src={`${URLimage}${poster}`} alt="" />
            <Content little>
                <InfoWrapper little>
                    <InfoDetails>{title}</InfoDetails>
                    <InfoDetails>{name}</InfoDetails>
                    <InfoDetails>{role}</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
