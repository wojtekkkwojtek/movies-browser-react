import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'

export const PersonTile = ({ poster, title }) => {
    return (
        <TileContainer small>
            <Poster little src={`${URLimage}${poster}`} alt="" />
            <Content little>
                <InfoWrapper little>
                    <InfoDetails>{title}</InfoDetails>
                    <InfoDetails>Role</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
