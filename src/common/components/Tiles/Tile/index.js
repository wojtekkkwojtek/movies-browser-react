import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import star from './star.svg';
import { URLimageSmall } from '../../../assets/generalData/fetchedData';
import { ReactComponent as NoPhoto } from '../PersonTile/noPhoto.svg';
import {
    TileContainer,
    Poster,
    StyledNoPoster,
    Content,
    Wrapper,
    Title,
    Subtitle,
    Year,
    InfoWrapper,
    Info,
    NoInfoTag,
    Genres,
    Icon,
    Rate,
    Score,
    Tag,
    Tag1,
    Tag2,
    Overview
} from './styled';
import {StyledNoPhoto} from "../PersonTile/styled"
import { selectMoviesGenresList } from '../../../../features/movies/MovieGenres/moviesGenresSlice';

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
    release_date,
    genres,
    rate,
    score,
    votes,
    overview,
    person,
    date_of_birth,
    place,
    place_of_birth,
    character,
    job,
}) => {
    const { genresList } = useSelector(selectMoviesGenresList)
    
    return (
        <TileContainer 
            isList={isList} 
            details={details} 
            onClick={onClick}
            person={person}
        >
            {poster ? (
                <Poster
                    details={details}
                    isList={isList}
                    src={`${URLimageSmall}${poster}`}
                    alt=""
                />
            ) : person ? (
                <StyledNoPhoto person={person}/>
            ) : (
                <StyledNoPoster />
            )}
            <Content isList={isList} person={person}>
                {/* <Wrapper> */}
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
                        <NoInfoTag>Production:&nbsp; </NoInfoTag>
                        <Tag>
                            {country &&
                                country.map(({ name }) => name).join(", ")
                            }
                        </Tag>
                    </Info>
                    <Info inline isList={isList} movie={movie}>
                        <Tag1>Date of birth:&nbsp;</Tag1>
                        <Tag2 mobile>Birth:&nbsp;</Tag2>
                        <Tag>{date_of_birth ? date_of_birth : 'Unknown'}</Tag>
                    </Info>
                    <Info isList={isList} movie={movie}>
                        {place}
                        <Tag>{place_of_birth ? place_of_birth : 'Unknown'}</Tag>
                    </Info>
                    <Info isList={isList} person={person} details={details}>
                        <NoInfoTag>Release date:&nbsp; </NoInfoTag>
                        <Tag>  {release_date ? release_date : 'Unknown'}</Tag>
                    </Info>
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
                            genres.map((genre) => (
                                <Genres key={nanoid()}>{genre.name}</Genres>
                            ))
                        }
                    </InfoWrapper>
                {/* </Wrapper> */}
                <InfoWrapper rates>
                    <Icon isList={isList} person={person} src={star} alt="" />
                    <Rate person={person} isList={isList}> {rate}</Rate>
                    <Score invisible isList={isList} person={person}>{score}</Score>
                    <Score isList={isList} person={person}>{votes} </Score>
                    <Score isList={isList} person={person}>&nbsp;votes</Score>
                </InfoWrapper>
            </Content>
            <Overview isList={isList}>{overview}</Overview>
        </TileContainer>
    )
};