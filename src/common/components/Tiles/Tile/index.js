import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import star from '../star.svg'
import { URLimage } from '../../../assets/generalData/fetchedData'
import { selectMovieList } from '../../../../features/movies/MovieList/movieListSlice'
import { ReactComponent as NoPoster } from './noPoster.svg'
import { ReactComponent as NoPhoto } from '../PersonTile/noPhoto.svg'

import {
    Content,
    Poster,
    Title,
    Subtitle,
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
    Mobile
} from '../styled'

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
    birth,
    date_of_birth,
    place,
    place_of_birth,
    character,
    job,
}) => {
    const { genresList } = useSelector(selectMovieList)
    return (
        <TileContainer isList={isList} details={details} onClick={onClick}>

            {poster ? (
                <Poster
                    details={details}
                    isList={isList}
                    src={`${URLimage}${poster}`}
                    alt=""
                />
            ) : !person ? (
                <NoPoster />
            ) : (
                <NoPhoto />
            )}
            <Content>

                <Title isList={isList} details={details} person={person}>
                    {title}
                </Title>
                <Subtitle isList={isList} >
                    {(character || job)
                        ? <>
                            {character ? character : job} {release_date && `(${release_date})`}
                        </>
                        : <>
                            {release_date}
                        </>
                    }
                </Subtitle>
                <Year isList={isList}>{year}</Year>
                <Info isList={isList} person={person}>
                    <Mobile mobile> {production}</Mobile>
                </Info>
                <Info isList={isList} movie={movie}>
                    {birth}
                    {date_of_birth ? date_of_birth : 'Unknown'}{' '}
                </Info>
                <Info isList={isList} person={person} details={details}>
                    <Mobile mobile>{release}</Mobile>
                    {release_date ? release_date : 'Unknown'}
                </Info>

                <Info isList={isList} movie={movie}>
                    {place} {place_of_birth ? place_of_birth : 'Unknown'}
                </Info>
                <InfoWrapper nonInList={nonInList} person={person}>
                    <InfoDetails
                        movie={movie}
                        isList={isList}
                        person={person}
                        poster={poster}
                    >
                        {date ? date : 'Unknown'}
                    </InfoDetails>
                </InfoWrapper>
                <InfoWrapper isList={isList} person={person}>
                    {genres &&
                        genres.map((genre) => {
                            return genresList.map((item) =>
                                item.id === genre ? (
                                    <Genres isList={isList} key={nanoid()}>
                                        {item.name}
                                    </Genres>
                                ) : null
                            )
                        })}
                </InfoWrapper>
                <InfoWrapper nonInList={nonInList} person={person}>
                    {genres &&
                        genres.map((country) => (
                            <Genres>{country.name}</Genres>
                        ))}
                </InfoWrapper>
                <InfoWrapper rates>
                    <Icon person={person} src={star} alt="" />
                    <Rate person={person} isList={isList}>
                        {rate}
                    </Rate>
                    <Score person={person}>{score}</Score>
                    <Score person={person}>{votes} </Score>
                </InfoWrapper>
                <Overview>{overview}</Overview>
            </Content>
        </TileContainer>
    )
}
