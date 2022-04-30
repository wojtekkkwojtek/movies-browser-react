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
    person

}) => {
    return (
        <TileContainer list={list} onClick={onClick}><Content>
            <Poster list={list} src={`${URLimage}${poster}`} alt="" />
            <div>
                <Title person={person} list={list} >{title}</Title>
                <Year list={list}>{year}</Year>
                <InfoWrapper person={person}>
                    <Info>
                        {production}{' '}
                        {country &&
                            country.map((country) => country.name).join(', ')}
                    </Info>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>{event}</Info>
                    <InfoDetails poster={poster}>{date ? date : 'Unknown'}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper person={person}>
                    {genres &&
                        genres.map((genre) => {
                            return AllGenresData.genres.map((item) =>
                                item.id === genre ? (
                                    <Genres list={list} key={nanoid()}>{item.name}</Genres>
                                ) : null
                            )
                        })}
                </InfoWrapper>
                <InfoWrapper person={person}>
                    {genres &&
                        genres.map((country) => (
                            <Genres list={list}>{country.name}</Genres>
                        ))}
                </InfoWrapper>
                <InfoWrapper >
                    <Icon person={person} src={rateIcon} alt="" />
                    <Rate person={person} list={list}>{rate}</Rate>
                    <Score person={person}>{score}</Score>
                    <Score person={person}>{votes} </Score>
                </InfoWrapper>
                </div>
                </Content>
                <Overview>{overview}</Overview>
            
        </TileContainer>
    )
}
