import React from 'react';
import { Poster, TileContainer, InfoWrapper, InfoDetails } from './styled';
import { URLimageSmall } from '../../../assets/generalData/fetchedData';
import errorPerson from '../../../assets/icons/personError.jpeg';

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
            <Poster
                src={poster ? `${URLimageSmall}${poster}` : errorPerson}
                alt=""
            />
            <InfoWrapper>
                <InfoDetails>{original_name}</InfoDetails>
                <InfoDetails>{person_name}</InfoDetails>
                <InfoDetails gray={gray}>{as}</InfoDetails>
            </InfoWrapper>
        </TileContainer>
    );
};
