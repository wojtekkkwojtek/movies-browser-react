import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container } from '../../../common/components/Container'
import { selectPeopleList, fetchPeopleList } from './peopleListSlice'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Pagination } from '../../../common/components/Pagination'
import { useSearch } from '../../useSearch'

const PeopleList = () => {
    const { loading, peopleList, error } = useSelector(selectPeopleList)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const query = useSearch('search', location)
    useEffect(() => {
        dispatch(fetchPeopleList())
    }, [dispatch])

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }
    const showTitle = () => (query ? `Search for "${query}"` : 'Popular movies')

    return (
        <>
            <Container>
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
                                key={nanoid()}
                                onClick={() => routeChange(people.id)}
                                person_name={people.name}
                                poster={people.profile_path}
                            />
                        </>
                    ))}
            </Container>
            {!error && !loading && <Pagination />}
        </>
    )
}

export default PeopleList
