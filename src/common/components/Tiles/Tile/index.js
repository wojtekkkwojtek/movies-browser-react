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
} from '../styled'
import rateIcon from '../rateIcon.svg'
import AllGenresData from '../../../assets/generalData/genreData.json'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { nanoid } from 'nanoid'

export const Tile = ({
    list,
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
        <TileContainer list={list} onClick={onClick}>
            <Poster list={list} src={`${URLimage}${poster}`} alt="" />
            <Content>
                <Title>{title}</Title>
                <Year>{year}</Year>
                <InfoWrapper>
                    <Info>
                        {production}{' '}
                        {country &&
                            country.map((country) => country.name).join(', ')}
                    </Info>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>Release date:</Info>
                    <InfoDetails>{date ? date : 'Unknown'}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper list={list}>
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
                    {genres &&
                        genres.map((country) => (
                            <Genres>{country.name}</Genres>
                        ))}
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
