import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { useLocation, useNavigate } from 'react-router-dom'
import { Section } from '../../../common/components/Section'
import { selectPeopleList, fetchPeopleList } from './peopleListSlice'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Pagination } from '../../../common/components/Pagination'
import { useSearch } from '../../useParameters'
import { queryKeys } from '../../queryKeys'

const PeopleList = () => {
    const { loading, peopleList, error } = useSelector(selectPeopleList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const query = useSearch(queryKeys.search, location)
    const page = useSearch(queryKeys.page, location)
    useEffect(() => {
        dispatch(fetchPeopleList({ query, page }))
    }, [dispatch, query, page])

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }
    const showTitle = () => (query ? `Search for "${query}"` : 'Popular people')

    return (
        <>
            <Section>
                {error && !loading && <ErrorMessage />}
                {!error && loading && (
                    <>
                        <Title title={showTitle()} /> <Loader />
                    </>
                )}
                {!error && !loading && <Title title={showTitle()} />}
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
            {!error && !loading && <Pagination />}
        </>
    )
}

export default PeopleList
