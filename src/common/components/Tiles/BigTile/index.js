import React, { useEffect, useState } from 'react'
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
} from '../styled'
import rateIcon from '../rateIcon.svg'
import AllGenresData from '../../../assets/generalData/genreData.json'
import { URLpopularMovies } from '../../../assets/generalData/fetchedData'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { nanoid } from 'nanoid'

export const Tile = ({
    onClick,
    title,
    poster,
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
        <TileContainer onClick={onClick}>
            <Poster src={`${URLimage}${poster}`} alt="" />
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <InfoWrapper>
                    <Info>{production}</Info>
                    <InfoDetails>{country}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>Release date:</Info>
                    <InfoDetails>{date ? date : 'Unknown'}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    {genres &&
                        genres.map((genre) => {
                            return AllGenresData.genres.map((item) =>
                                item.id === genre ? (
                                    <Genres key={nanoid()}>{item.name}</Genres>
                                ) : null
                            )
                        })}
                </InfoWrapper>
                <InfoWrapper>
                    <Icon src={rateIcon} alt="" />
                    <Rate>{rate}</Rate>
                    <Score>{score}</Score>
                    <Score>{votes} votes</Score>
                </InfoWrapper>
                <Overview>{overview}</Overview>
            </Content>
        </TileContainer>
    )
}
