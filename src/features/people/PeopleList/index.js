import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import { Section } from '../../../common/components/Section'
import { selectPeopleList, fetchPeopleList, selectTotalPeoplelResults } from './peopleListSlice'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Pagination } from '../../../common/components/Pagination'
import { useSearch } from '../../useParameters'
import { queryKeys } from '../../queryKeys'
import { NoResultMessage } from "../../../common/components/NoResultMessage"

const PeopleList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { loading, peopleList, error } = useSelector(selectPeopleList)
    const totalPeopleResults = useSelector(selectTotalPeoplelResults);
    const query = useSearch(queryKeys.search, location)
    const page = useSearch(queryKeys.page, location)

    console.log('totalPeopleResults', totalPeopleResults)
    console.log('query', query)

    useEffect(() => {
        dispatch(fetchPeopleList({ query, page }))
    }, [dispatch, query, page])

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    return (
        <>
            <Section>
                {query && (totalPeopleResults === 0) ?
                    <>
                        <Title title={`Sorry, no result for "${query}"`} />
                        <NoResultMessage />
                    </>
                    :
                    <Title title=
                        {query
                            ? `Search results for "${query}"(${totalPeopleResults})`
                            : `Popular people`}
                    />

                }
                {error && !loading && <ErrorMessage />}
                {!error && loading && (
                    <>
                        <Loader />
                    </>
                )}
                {/* {!error && !loading && <Title title={showTitle()} />} */}
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
                    ))
                }
            </Section>
            {/* {error && loading && !totalPeopleResults && <NoResultMessage />} */}
            {!error && !loading && totalPeopleResults && <Pagination />}
        </>
    )
}

export default PeopleList
