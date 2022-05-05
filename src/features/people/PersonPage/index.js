import React from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import { Title } from '../../../common/components/Title';
import { Tile } from '../../../common/components/Tiles/Tile';
import { Loader } from '../../../common/components/Loader';
import { Container } from '../../../common/components/Container';
import { fetchPersonPage, selectPersonPage, selectPersonCast, selectMovieCrew } from './personPageSlice';
import { ErrorMessage } from '../../../common/components/ErrorMessage';

const PersonPage = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    console.log('id__in_PersonPage', id) /////////////////////////

    useEffect(() => {
        dispatch(fetchPersonPage(id));
    }, [id, dispatch]);

    const { personPage, loading, error, cast, crew } = useSelector(selectPersonPage);

    //const cast = useSelector(selectPersonCast);
    //const crew = useSelector(selectMovieCrew);

    console.log('fetchPrsonPage(id): ', fetchPersonPage(id))
    //console.log('personCast(id) in index: ', personCast )
    console.log('loading strony personPage:', loading) /////////////
    console.log('personPage in index: ', personPage)
    console.log('personCast in index: ', cast)
    console.log('personCrew in index: ', crew)
    //console.log('personCastlength: ', cast.length)
    //console.log('error ', error)

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`);
    };

    const routeToMoviePage = (id) => {
        routeChange(id)
    };

    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading}
            {!error && !loading && personPage && (
                <>
                    <Container>
                        <Tile details person
                            key={nanoid()}
                            title={personPage.name}
                            birth="Date of birth: "
                            date_of_birth={personPage.birthday}
                            place="Place of birth: "
                            place_of_birth={personPage.place_of_birth}
                            poster={personPage.profile_path}
                            overview={personPage.biography}
                        />
                    </Container>

                    <Container>
                        <Title>Movies cast({cast.length})</Title>
                        {cast &&
                            cast.map((movie) => (
                                <React.Fragment key={cast.id}>
                                    <Tile isList nonInList
                                        key={nanoid()}
                                        title={movie.title}
                                        genres={movie.genre_ids}
                                        rate={movie.vote_average}
                                        poster={movie.poster_path}
                                        //year={movie.release_date.slice(0, 4)}
                                        score="/10"
                                        votes={movie.vote_count}
                                        character={movie.character}
                                        onClick={() => routeToMoviePage(movie.id)}
                                    />
                                </React.Fragment>
                            ))}
                    </Container>

                    <Container>
                        <Title>Movies-Crew({crew.length})</Title>
                        {crew &&
                            crew.map((movie) => (
                                <React.Fragment key={crew.id}>
                                    <Tile isList nonInList
                                        key={nanoid()}
                                        title={movie.title}
                                        genres={movie.genre_ids}
                                        rate={movie.vote_average}
                                        poster={movie.poster_path}
                                        //year={movie.release_date.slice(0, 4)}
                                        score="/10"
                                        votes={movie.vote_count}
                                        job={movie.job}
                                        onClick={() => routeToMoviePage(movie.id)}
                                    />
                                </React.Fragment>
                            ))}
                    </Container>
                </>
            )}
        </>
    )
}

export default PersonPage
