import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import star from './star.svg';
import errorPoster from '../../../assets/icons/posterError.png';
import errorPerson from '../../../assets/icons/personError.jpeg';
import { URLimageSmall } from '../../../assets/generalData/fetchedData';
import {
    TileContainer,
    Poster,
    Content,
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
    Tag1,
    Tag2,
    Overview,
    TagBlack,
} from './styled';
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
    const { genresList } = useSelector(selectMoviesGenresList);

    return (
        <TileContainer
            isList={isList}
            details={details}
            onClick={onClick}
            person={person}
        >
            <Poster
                details={details}
                isList={isList}
                src={
                    poster
                        ? `${URLimageSmall}${poster}`
                        : person
                        ? errorPerson
                        : errorPoster
                }
                alt=""
            />

            <Content isList={isList} person={person}>
                {/* <Wrapper> */}
                <Title isList={isList} details={details} person={person}>
                    {title}
                </Title>
                <Subtitle isList={isList}>
                    {character || job ? (
                        <>
                            {character ? character : job}{' '}
                            {release_date && `(${release_date})`}
                        </>
                    ) : (
                        <>{release_date}</>
                    )}
                </Subtitle>
                <Year isList={isList}>{year}</Year>
                <Info isList={isList} person={person}>
                    <NoInfoTag>Production:&nbsp; </NoInfoTag>
                    <TagBlack>
                        {country && country.map(({ name }) => name).join(', ')}
                    </TagBlack>
                </Info>
                <Info isList={isList} person={person} details={details}>
                    <NoInfoTag>Release date:&nbsp; </NoInfoTag>
                    <TagBlack>
                        {' '}
                        {release_date ? release_date : 'Unknown'}
                    </TagBlack>
                </Info>
                <Info inline isList={isList} movie={movie}>
                    {' '}
                    <Tag1>Date of birth:&nbsp; </Tag1>
                    <Tag2 mobile>Birth:&nbsp;</Tag2>
                    <TagBlack>
                        {' '}
                        {date_of_birth ? date_of_birth : 'Unknown'}
                    </TagBlack>
                </Info>
                <Info isList={isList} movie={movie}>
                    Place of birth:&nbsp;
                    <TagBlack>
                        {place_of_birth ? place_of_birth : 'Unknown'}
                    </TagBlack>{' '}
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
                            );
                        })}
                </InfoWrapper>
                <InfoWrapper nonInList={nonInList} person={person}>
                    {genres &&
                        genres.map((genre) => (
                            <Genres key={nanoid()}>{genre.name}</Genres>
                        ))}
                </InfoWrapper>
                {/* </Wrapper> */}
                <InfoWrapper rates>
                    <Icon isList={isList} person={person} src={star} alt="" />
                    <Rate person={person} isList={isList}>
                        {' '}
                        {rate}
                    </Rate>
                    <Score invisible isList={isList} person={person}>
                        {score}
                    </Score>
                    <Score isList={isList} person={person}>
                        {votes}{' '}
                    </Score>
                    <Score isList={isList} person={person}>
                        &nbsp;votes
                    </Score>
                </InfoWrapper>
                <Overview isList={isList}>{overview}</Overview>
            </Content>
        </TileContainer>
    );
};
