import React from 'react'
import {
    isList,
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
    isList,
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
        <TileContainer isList={isList} details={details} onClick={onClick}>
            <Content>
                <Poster details={details} isList={isList} src={`${URLimage}${poster}`} alt="" />
                <div>
                    <Title isList={isList} details={details} person={person}  >{title}</Title>
                    <Year isList={isList}>{year}</Year>
                    <Info isList={isList} person={person}>{production}</Info>
                    <Info isList={isList} movie={movie} >  {bird}{date_of_bird ? date_of_bird : 'Unknown'}  </Info>
                    <Info isList={isList} person={person} details={details}>  {release}{release_date ? release_date : 'Unknown'}</Info>
                    <Info isList={isList} movie={movie} >{place} {place_of_bird ? place_of_bird : 'Unknown'}</Info>
                    <InfoWrapper isList={isList} movie={movie} person={person}>
                        <InfoDetails movie={movie} person={person} poster={poster}>{date ? date : 'Unknown'}</InfoDetails>
                    </InfoWrapper>
                    <InfoWrapper person={person}>
                        {genres &&
                            genres.map((genre) => {
                                return genresList.map((item) =>
                                    item.id === genre ? (
                                        <Genres isList={isList} key={nanoid()}>{item.name}</Genres>
                                    ) : null
                                )
                            })}
                    </InfoWrapper>
                    <InfoWrapper person={person}>
                        {genres &&
                            genres.map((country) => (
                                <Genres>{country.name}</Genres>
                            ))}
                    </InfoWrapper>
                    <InfoWrapper rates >
                        <Icon person={person} src={rateIcon} alt="" />
                        <Rate person={person} isList={isList}>{rate}</Rate>
                        <Score person={person}>{score}</Score>
                        <Score person={person}>{votes} </Score>
                    </InfoWrapper>
                </div>
            </Content>
            <Overview>{overview}</Overview>

        </TileContainer>
    )
}
