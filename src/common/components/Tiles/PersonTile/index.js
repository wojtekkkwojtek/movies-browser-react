import React from 'react';
import {
    Poster,
    TileContainer,
    InfoWrapper,
    InfoDetails,
    StyledNoPhoto,
    PhotoWrapper,
} from './styled';
import { URLimageSmall } from '../../../assets/generalData/fetchedData';

export const PersonTile = ({
    poster,
    original_name,
    person_name,
    gray,
    as,
    onClick,
}) => {
    return (
        <TileContainer onClick={onClick}>
            <PhotoWrapper>
                {poster ? (
                    <Poster src={`${URLimageSmall}${poster}`} alt="" />
                ) : (
                    <StyledNoPhoto />
                )}
            </PhotoWrapper>
            <InfoWrapper>
                <InfoDetails>{original_name}</InfoDetails>
                <InfoDetails>{person_name}</InfoDetails>
                <InfoDetails gray={gray}>{as}</InfoDetails>
            </InfoWrapper>
        </TileContainer>
    );
};
