import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMoviePage, selectMoviePage } from './moviePageSlice';
import { MovieHeader } from '../../../common/components/MovieHeader';
import { Tile } from '../../../common/components/Tiles/Tile';
import { Loader } from '../../../common/components/Loader';
import { Section } from '../../../common/components/Section';
import { Title } from '../../../common/components/Title';
import { ErrorMessage } from '../../../common/components/ErrorMessage';
import { PersonTile } from '../../../common/components/Tiles/PersonTile';
import { StyledButton, Wrapper } from "../../../common/components/ShowAllButton/styled";
import { ReactComponent as ArrowDown } from "../../../common/components/ShowAllButton/Arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../../common/components/ShowAllButton/Arrow_up.svg";

const MoviePage = () => {
    const [isShownAll, setIsShownAll] = useState(false);
    const [isShownAllCrew, setIsShownAllCrew] = useState(false);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchMoviePage(id))
    }, [dispatch, id])
    const { error, loading, moviePage, actors, crew } =
        useSelector(selectMoviePage)

    const navigate = useNavigate();

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }


    const shownTiles = isShownAll ? actors.length : 12;
    const shownTilesCrew = isShownAllCrew ? crew.length : 12;
    const toggleShown = () => setIsShownAll(isShownAll => !isShownAll);
    const toggleShownCrew = () => setIsShownAllCrew(isShownAllCrew => !isShownAllCrew);
    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading && moviePage && (
                <>
                    <MovieHeader
                        original_title={moviePage.original_title}
                        backdrop_path={moviePage.backdrop_path}
                        vote_average={moviePage.vote_average}
                        vote_count={moviePage.vote_count}
                    />
                    <Section>
                        <Tile
                            details
                            movie
                            key={nanoid()}
                            title={moviePage.title}
                            poster={moviePage.poster_path}
                            release_date={new Date(
                                moviePage.release_date
                            ).toLocaleDateString()}
                            year={moviePage.release_date.slice(0, 4)}
                            country={moviePage.production_countries}
                            rate={moviePage.vote_average}
                            score="/10"
                            votes={moviePage.vote_count}
                            overview={moviePage.overview}
                            genres={moviePage.genres}
                        />
                    </Section>
                    <Section>
                        <Title title="Cast" />
                        {actors &&
                            actors.slice(0, shownTiles).map((actor) => (
                                <PersonTile
                                    key={actor.id}
                                    personTile={true}
                                    onClick={() => routeChange(actor.id)}
                                    original_name={actor.original_name}
                                    as={actor.character}
                                    poster={actor.profile_path}
                                />
                            ))}
                    </Section>
                    {actors && actors.length > 12 && <Wrapper>
                        <StyledButton
                            onClick={toggleShown}
                        >
                            {isShownAll && <ArrowUp />}
                            <div>
                                {isShownAll ? "show less" : "show all"}
                                {!isShownAll && <ArrowDown />}
                            </div>
                        </StyledButton>
                    </Wrapper>}
                    <Section>
                        <Title title="Crew" />
                        {crew &&
                            crew.slice(0, shownTilesCrew).map((person) => (
                                <PersonTile
                                    key={person.id}
                                    personTile={true}
                                    gray
                                    original_name={person.original_name}
                                    as={person.job}
                                    poster={person.profile_path}
                                />
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

export default MoviePage
