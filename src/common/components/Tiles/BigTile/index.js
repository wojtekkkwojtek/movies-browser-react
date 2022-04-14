import React from 'react'
import {
    Content,
    Poster,
    Title,
    Year,
    TileContainer,
    InfoWrapper,
    InfoDetales,
    Overview,
    Genres,
    Rate,
    Score,
    Icon,
    Info,
} from '../styled'
import poster from '../poster.png'
import rateIcon from '../rateIcon.svg'

export const Tile = ({
    title,
    year,
    country,
    production,
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
                    <Info>{production}</Info>
                    <InfoDetails>{country}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>Release date:</Info>
                    <InfoDetails>{date}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    {genres && genres.map((genre) => <Genres>{genre}</Genres>)}
                </InfoWrapper>
                <InfoWrapper>
                    <Icon src={rateIcon} alt="" />
                    <Rate>7/8</Rate>
                    <Score>/10</Score>
                    <Score>335 votes</Score>
                </InfoWrapper>
                <Overview>{overview}</Overview>
            </Content>
        </TileContainer>
    )
}
