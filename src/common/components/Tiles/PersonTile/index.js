import React from 'react'
import { Poster, TileContainer, InfoWrapper, InfoDetails } from './styled'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { ReactComponent as NoPhoto } from './noPhoto.svg'

export const PersonTile = ({
    personTile,
    poster,
    original_name,
    gray,
    as,
    onClick,
}) => {
    return (
        <TileContainer personTile={personTile} onClick={onClick}>
            {poster ? (
                <Poster
                    src={`${URLimage}${poster}`}
                    alt=""
                    personTile={personTile}
                />
            ) : (
                <NoPhoto />
            )}

            <InfoWrapper>
                <InfoDetails>{original_name}</InfoDetails>
                <InfoDetails gray={gray}>{as}</InfoDetails>
            </InfoWrapper>
        </TileContainer>
    )
}
