import React, { useState } from 'react';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import { Title } from '../../../common/components/Title';
import { Tile } from '../../../common/components/Tiles/Tile';
import { Loader } from '../../../common/components/Loader';
import { Section } from '../../../common/components/Section';
import { fetchPersonPage, selectPersonPage } from './personPageSlice';
import { ErrorMessage } from '../../../common/components/ErrorMessage';
import { StyledButton, Wrapper } from "../../../common/components/ShowAllButton/styled";
import { ReactComponent as ArrowDown } from "../../../common/components/ShowAllButton/Arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../../common/components/ShowAllButton/Arrow_up.svg";

const PersonPage = () => {
    const [isShownAll, setIsShownAll] = useState(false);
    const [isShownAllCrew, setIsShownAllCrew] = useState(false);
    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchPersonPage(id))
    }, [id, dispatch])

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/movie/${id}`)
    }

    const routeToMoviePage = (id) => {
        routeChange(id)
    }

    const { personPage, loading, error, cast, crew } = useSelector(selectPersonPage);
    const shownTiles = isShownAll ? cast.length : 8;
    const shownTilesCrew = isShownAllCrew ? crew.length : 8;
    const toggleShown = () => setIsShownAll(isShownAll => !isShownAll);
    const toggleShownCrew = () => setIsShownAllCrew(isShownAllCrew => !isShownAllCrew);
    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading}
            {!error && !loading && personPage && (
                <>
                    <Section>
                        <Tile
                            details
                            person
                            key={nanoid()}
                            title={personPage.name}
                            birth="Date of birth: "
                            date_of_birth={new Date(
                                personPage.birthday
                            ).toLocaleDateString()}
                            place="Place of birth: "
                            place_of_birth={personPage.place_of_birth}
                            poster={personPage.profile_path}
                            overview={personPage.biography}
                        />
                    </Section>
                    <Section>
                    <Title
                            title={`Movies  - cast (${cast && cast.length})`}
                        />                        {cast &&
                            cast.slice(0, shownTiles).map((movie) => (
                                <React.Fragment key={cast.id}>
                                    <Tile
                                        isList
                                        nonInList
                                        key={nanoid()}
                                        title={movie.title}
                                        genres={movie.genre_ids}
                                        rate={movie.vote_average}
                                        poster={movie.poster_path}
                                        release_date={ movie.release_date
                                          ? movie.release_date.slice(0, 4)
                                          : 'Unknown'}
                                        votes={movie.vote_count}
                                        character={movie.character}
                                        onClick={() =>
                                            routeToMoviePage(movie.id)
                                        }
                                    />
                                </React.Fragment>
                            ))}
                    </Section>
                    {cast && cast.length > 8 && <Wrapper>
                        <StyledButton
                            onClick={toggleShown}
                        >
                            {isShownAll && <ArrowUp />}
                            <div>
                                {isShownAll ? 'show less' : 'show all'}
                                {!isShownAll && <ArrowDown />}
                            </div>
                        </StyledButton>
                    </Wrapper>}
                    <Section>
                    <Title
                            title={`Movies  - crew (${crew && crew.length})`}
                        />
                        {crew &&
                            crew.slice(0, shownTilesCrew).map((movie) => (
                                <React.Fragment key={crew.id}>
                                    <Tile
                                        isList
                                        nonInList
                                        key={nanoid()}
                                        title={movie.title}
                                        genres={movie.genre_ids}
                                        rate={movie.vote_average}
                                        poster={movie.poster_path}
                                        year={
                                            movie.release_date
                                                ? movie.release_date.slice(0, 4)
                                                : 'Unknown'
                                        }
                                        score="/10"
                                        votes={movie.vote_count}
                                        job={movie.job}
                                        onClick={() =>
                                            routeToMoviePage(movie.id)
                                        }
                                    />
                                </React.Fragment>
                            ))}
                    </Section>
                    {crew && crew.length > 8 && <Wrapper>
                        <StyledButton
                            onClick={toggleShownCrew}
                        >
                            {isShownAllCrew && <ArrowUp />}
                            <div>
                                {isShownAllCrew ? "show less" : "show all"}
                                {!isShownAllCrew && <ArrowDown />}
                            </div>
                        </StyledButton>
                    </Wrapper>}
                </>
            )}
        </>
    )
}

export default PersonPage
