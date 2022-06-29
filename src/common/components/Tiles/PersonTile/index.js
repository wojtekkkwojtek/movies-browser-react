import React from 'react';
import { Poster, TileContainer, InfoWrapper, InfoDetails, StyledNoPhoto } from './styled';
import { URLimageSmall } from '../../../assets/generalData/fetchedData';

export const PersonTile = ({
    personTile,
    poster,
    original_name,
    person_name,
    gray,
    as,
    onClick,
}) => {
    return (
        <TileContainer onClick={onClick}>
            {poster ? (
                <Poster
                    src={`${URLimageSmall}${poster}`}
                    alt=""
                    
                />
            ) : (
                <StyledNoPhoto />
            )}
            <InfoWrapper>
                <InfoDetails>{original_name}</InfoDetails>
                <InfoDetails>{person_name}</InfoDetails>
                <InfoDetails gray={gray}>{as}</InfoDetails>
            </InfoWrapper>
        </TileContainer>
    )
};