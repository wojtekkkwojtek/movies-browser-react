import React from 'react'
import {
    Content,
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
} from '../styled'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { ReactComponent as NoPhoto } from './noPhoto.svg'

export const PersonTile = ({
    poster,
    original_name,
    character,
    role,
    isList,
    onClick,
}) => {
    return (
        <TileContainer isList onClick={onClick}>
            {poster ? (
                <Poster isList src={`${URLimage}${poster}`} alt="" />
            ) : (
                <NoPhoto />
            )}
            <Content>
                <InfoWrapper>
                    <InfoDetails>{original_name}</InfoDetails>
                    <InfoDetails>{character}</InfoDetails>
                    <InfoDetails>{role}</InfoDetails>
                </InfoWrapper>
            </Content>
        </TileContainer>
    )
}
