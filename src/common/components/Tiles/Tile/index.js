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
import { URLimage } from '../../../assets/generalData/fetchedData'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { selectMovieList } from '../../../../features/movies/MovieList/movieListSlice'
// import {
//     // fetchGenresList,
//     selectGenres,
// } from '../../../../features/genres/genresSlice'

export const Tile = ({
    nonInList,
    isList,
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
    const { genresList } = useSelector(selectMovieList)
    return (
        <TileContainer isList={isList} onClick={onClick}>
            <Poster isList={isList} src={`${URLimage}${poster}`} alt="" />
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
                <InfoWrapper isList={isList}>
                    {genres &&
                        genres.map((genre) => {
                            return genresList.map((item) =>
                                item.id === genre ? (
                                    <Genres key={nanoid()}>{item.name}</Genres>
                                ) : null
                            )
                        })}
                </InfoWrapper>
                <InfoWrapper nonInList={nonInList}>
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
