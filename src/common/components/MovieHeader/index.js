import React from 'react';
import { Backdrop, Container, Star, Title, VoteCount, Wrapper } from './styled';
import star from '../Tiles/Tile/star.svg';
import { URLimage } from '../../assets/generalData/fetchedData';

export const MovieHeader = ({
    original_title,
    backdrop_path,
    vote_average,
    vote_count,
}) => {
    return (
        <Wrapper>
            <Backdrop img={`${URLimage}${backdrop_path}`} alt="">
                <Title> {original_title}</Title>
                <Container>
                    <Title subtitle>
                        <Star src={star} alt="" /> {vote_average}/10
                    </Title>
                    <VoteCount>{vote_count} votes</VoteCount>
                </Container>
            </Backdrop>
        </Wrapper>
    )
};