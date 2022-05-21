import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid';
import { useSearch } from '../../useParameters';
import { Tile } from '../../../common/components/Tiles/Tile';
import { Loader } from '../../../common/components/Loader';
import { ErrorMessage } from '../../../common/components/ErrorMessage';
import {
    fetchMovieList,
    selectMovieList,
    selectTotalMoviesResults,
    selectTotalMoviesPages
} from './movieListSlice';
import { Title } from '../../../common/components/Title';
import { Pagination } from '../../../common/components/Pagination';
import { Section } from '../../../common/components/Section';
import { queryKeys } from '../../queryKeys';
import { NoResultMessage } from "../../../common/components/NoResultMessage";

const MovieList = () => {
    const { loading, movieList, error } = useSelector(selectMovieList);
    const totalMoviesResults = useSelector(selectTotalMoviesResults);;
    const totalMoviesPages = useSelector(selectTotalMoviesPages);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const query = useSearch(queryKeys.search);
    const page = useSearch(queryKeys.page);

    useEffect(() => {
        dispatch(fetchMovieList({ query, page }))
    }, [dispatch, query, page]);

    const routeToMoviePage = (id) => {
        navigate(`/movie/${id}`)
    };

    return (
        <Section isList>
            {query && !error && !loading && (totalMoviesResults === 0) ?
                <>
                    <Title title={`Sorry, no result for "${query[0].toUpperCase() + query.slice(1)}"`} />
                    <NoResultMessage />
                </>
                :
                <Title title=
                    {query
                        ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"(${totalMoviesResults})`
                        : `Popular movies`}
                />
            }
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error &&
                !loading &&
                movieList &&
                movieList.map((movie) => (
                    <React.Fragment key={movie.id}>
                        <Tile
                            isList
                            nonInList
                            key={nanoid()}
                            onClick={() => routeToMoviePage(movie.id)}
                            title={movie.title}
                            poster={movie.poster_path}
                            year={
                                movie.release_date
                                    ? movie.release_date.slice(0, 4)
                                    : 'Unknown'
                            }
                            rate={movie.vote_average}
                            votes={movie.vote_count}
                            genres={movie.genre_ids}
                            country={movie.production_countries}
                        />
                    </React.Fragment>
                ))}
            {/* {!error && !loading && <Pagination />} */}
            {!error && !loading && totalMoviesResults && totalMoviesPages > 1 && <Pagination />}
        </Section>
    )
}

export default MovieList;
