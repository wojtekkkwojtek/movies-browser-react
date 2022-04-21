import React, { useEffect, useState } from 'react'
import {
    Content,
    Poster,
    Title,
    Year,
    TileContainer,
    Wrapper,
    InfoDetails,
    Overview,
    Genres,
    Rate,
    Score,
    Icon,
    Info,
} from './styled'
import rateIcon from '../rateIcon.svg'
import AllGenresData from '../../../assets/generalData/genreData.json'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { nanoid } from 'nanoid'

export const MiddleTile = ({
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
            <Content>
                <div> <Poster src={`${URLimage}${poster}`} alt="" /></div>

                <div>
                    <Title>{title}</Title>
                    <Year>{year}</Year>
                    <Wrapper>
                        {genres &&
                            genres.map((genre) => {
                                return AllGenresData.genres.map((item) =>
                                    item.id === genre ? (
                                        <Genres key={nanoid()}>{item.name}</Genres>
                                    ) : null
                                )
                            })}
                    </Wrapper>
                </div>
            </Content>
            <Wrapper rates>
                <Icon src={rateIcon} alt="" />
                <Rate>{rate}</Rate>
                <Score>{score}</Score>
                <Score>{votes} votes</Score>
            </Wrapper>

        </TileContainer>
    )
}
