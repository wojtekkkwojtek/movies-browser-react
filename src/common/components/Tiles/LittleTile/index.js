import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'

export const LittleTile = ({ poster, title, name }) => {
    return (
        <TileContainer little>
            <Poster little src={`${URLimage}${poster}`} alt="" />
            <Content little>
                <InfoWrapper little>
                    <InfoDetails>{title}</InfoDetails>
                    <InfoDetails>{name}</InfoDetails>
                    <InfoDetails>Role</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
