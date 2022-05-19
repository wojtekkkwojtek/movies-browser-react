import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import { Section } from '../../../common/components/Section'
import { selectPeopleList, fetchPeopleList, selectTotalPeoplelResults, selectTotalPeoplePages } from './peopleListSlice'
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
    const totalPeoplePages = useSelector(selectTotalPeoplePages)

    console.log('totalPeoplePages', totalPeoplePages)
    console.log('totalPeopleResults', totalPeopleResults)
    console.log('query', query)
    console.log('peopleList', { peopleList })
    useEffect(() => {
        dispatch(fetchPeopleList({ query, page }))
    }, [dispatch, query, page])

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    return (
        <>
            <Section>
                {query && !error && !loading && (totalPeopleResults === 0) ?
                    <>
                        <Title title={`Sorry, no result for "${query[0].toUpperCase() + query.slice(1)}"(${totalPeopleResults})"`} />
                        <NoResultMessage />
                    </>
                    :
                    <Title title=
                        {query
                            ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"(${totalPeopleResults})`
                            : `Popular people`}
                    />
                }
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
                    ))
                }
            </Section>
            {/* {!error && !loading && totalPeopleResults && <Pagination />} */}
            {!error && !loading && totalPeopleResults && totalPeoplePages > 1 && <Pagination />}
        </>
    )
}

export default PeopleList
