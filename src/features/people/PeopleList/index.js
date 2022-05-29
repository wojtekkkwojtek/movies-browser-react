import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonTile } from '../../../common/components/Tiles/PersonTile';
import { Title } from '../../../common/components/Title';
import { Loader } from '../../../common/components/Loader';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../../common/components/Section';
import {
    selectPeopleList,
    fetchPeopleList,
    selectTotalPeopleResults,
    selectTotalPeoplePages,
} from './peopleListSlice';
import { ErrorMessage } from '../../../common/components/ErrorMessage';
import { Pagination } from '../../../common/components/Pagination';
import { useSearch } from '../../useParameters';
import { queryKeys } from '../../queryKeys';
import { NoResultMessage } from '../../../common/components/NoResultMessage';

const PeopleList = () => {
    const { loading, peopleList, error } = useSelector(selectPeopleList);
    const totalPeopleResults = useSelector(selectTotalPeopleResults);
    const totalPeoplePages = useSelector(selectTotalPeoplePages);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useSearch(queryKeys.search);
    const page = useSearch(queryKeys.page);

    useEffect(() => {
        dispatch(fetchPeopleList({ query, page }))
    }, [dispatch, query, page]);

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    };

    return (
        <>
            <Section>
                {!error && !loading && totalPeopleResults === 0 ? (
                    <>
                        <Title
                            title={`Sorry, no result for "${query[0].toUpperCase() + query.slice(1)
                                }"`}
                        />
                        <NoResultMessage />
                    </>
                ) : (
                    <Title
                        title={
                            query
                                ? `Search results for "${query[0].toUpperCase() + query.slice(1)
                                }" ${totalPeopleResults &&
                                '(' + totalPeopleResults + ')'
                                } `
                                : `Popular people`
                        }
                    />
                )}
                {error && !loading && <ErrorMessage />}
                {!error && loading && <Loader />}
                {!error &&
                    !loading &&
                    peopleList &&
                    peopleList.map((people) => (
                        <>
                            <PersonTile
                                key={people.id}
                                onClick={() => routeChange(people.id)}
                                person_name={people.name}
                                poster={people.profile_path}
                            />
                        </>
                    ))}
            </Section>
            {!error && !loading && totalPeoplePages > 1 && <Pagination />}
        </>
    );
}

export default PeopleList;