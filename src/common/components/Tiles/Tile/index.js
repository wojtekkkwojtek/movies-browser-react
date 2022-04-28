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
    event,
    country,
    production,
    date,
    genres,
    rate,
    score,
    votes,
    overview,
    name
}) => {
    return (
        <TileContainer list={list} onClick={onClick}>
            <Poster list={list} src={`${URLimage}${poster}`} alt="" />
            <Content>
                <Title list={list} >{title}</Title>
                <Year list={list}>{year}</Year>
                <InfoWrapper>
                    <Info>
                        {production}{' '}
                        {country &&
                            country.map((country) => country.name).join(', ')}
                    </Info>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>{event}</Info>
                    <InfoDetails>{date ? date : 'Unknown'}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper list={list}>
                    {genres &&
                        genres.map((genre) => {
                            return AllGenresData.genres.map((item) =>
                                item.id === genre ? (
                                    <Genres list={list} key={nanoid()}>{item.name}</Genres>
                                ) : null
                            )
                        })}
                </InfoWrapper>
                <InfoWrapper>
                    {genres &&
                        genres.map((country) => (
                            <Genres list={list}>{country.name}</Genres>
                        ))}
                </InfoWrapper>
                <InfoWrapper >
                    <Icon src={rateIcon} alt="" />
                    <Rate list={list}>{rate}</Rate>
                    <Score>{score}</Score>
                    <Score>{votes} votes</Score>
                </InfoWrapper>
                <Overview>{overview}</Overview>
            </Content>
        </TileContainer>
    )
}
