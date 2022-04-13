import React from 'react'
import {
    Content,
    Poster,
    Title,
    Year,
    TileContainer,
    InfoWrapper,
    InfoDetails,
    Overview,
    Genres,
    Rate,
    Score,
    Icon,
    Info,
} from './styled'
import poster from './poster.png'
import star from './star.svg'

export const Tile = ({
    title,
    year,
    country,
    date,
    genres,
    rate,
    score,
    votes,
    overview,
}) => {
    return (
        <TileContainer>
            <Poster src={poster} alt="" />
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <InfoWrapper>
                    <Info>Production:</Info>
                    <InfoDetails>{country}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>Release date:</Info>
                    <InfoDetails>{date}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Genres>{genres}</Genres>
                    <Genres>Adventure</Genres>
                    <Genres>Drama</Genres>
                </InfoWrapper>
                <InfoWrapper>
                    <Icon src={star} alt="" />
                    <Rate>{rate}</Rate>
                    <Score>{score}</Score>
                    <Score>{votes} votes</Score>
                </InfoWrapper>
                <Overview>{overview}</Overview>
            </Content>
        </TileContainer>
    )
}

export default Tile
