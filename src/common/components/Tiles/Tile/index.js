import React from 'react'
import {
    list,
    details,
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
    list,
    details,
    movie,
    onClick,
    title,
    poster,
    year,
    country,
    production,
    release,
    release_date,
    date,
    genres,
    rate,
    score,
    votes,
    overview,
    person,
    bird,
    date_of_bird,
    place,
    place_of_bird

}) => {
    const { genresList } = useSelector(selectMovieList)
    return (
        <TileContainer list={list} details={details} onClick={onClick}><Content>
            <Poster details={details} list={list} src={`${URLimage}${poster}`} alt="" />
            <div>
                <Title details={details} person={person} list={list} >{title}</Title>
                <Year list={list}>{year}</Year>
                <InfoWrapper>
                    <Info person={person}>{production}</Info>
                </InfoWrapper>
                <Info movie={movie} >  {bird}{date_of_bird ? date_of_bird : 'Unknown'}  </Info>
                <Info person={person} details={details}>  {release}{release_date ? release_date : 'Unknown'}</Info>
                <Info movie={movie} >{place} {place_of_bird ? place_of_bird : 'Unknown'}</Info>
                <InfoWrapper movie={movie} person={person}>
                    <InfoDetails movie={movie} person={person} poster={poster}>{date ? date : 'Unknown'}</InfoDetails>
                </InfoWrapper>
                <InfoWrapper person={person}>
                    {genres &&
                        genres.map((genre) => {
                            return genresList.map((item) =>
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
                <InfoWrapper rates >
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
