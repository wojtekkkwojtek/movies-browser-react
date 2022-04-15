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
import poster from '../poster.png'
import rateIcon from '../rateIcon.svg'
import AllGenresData from '../../../assets/generalData/genreData.json'

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
    // const [data, setData] = useState([])
    // const getData = () => {
    //     fetch('../../../assets/generalData/genreData.json')
    //         .then(function (response) {
    //             console.log('ppppp', response)
    //             return response.text()
    //         })
    //         .then(function (myJson) {
    //             console.log('lllll', myJson)
    //             setData(myJson)
    //             console.log(data)
    //         })
    // }
    // useEffect(() => {
    //     getData()
    // }, [])

    // useEffect(() => {
    //     const test = () => {
    //         fetch(data)
    //             .then((response) => response.json())
    //             .then((x) => console.log(x))
    //     }
    //     setTimeout(test, 2000)
    // }, [])

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
                    {genres &&
                        genres.map((genre) => {
                            return AllGenresData.genres.map((piwo) =>
                                piwo.id === genre ? (
                                    <Genres>{piwo.name}</Genres>
                                ) : null
                            )
                        })}
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
