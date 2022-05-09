import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Section } from '../../../common/components/Section'
import { selectPeopleList, fetchPeopleList } from './peopleListSlice'
import { ErrorMessage } from '../../../common/components/ErrorMessage'
import { Pagination } from '../../../common/components/Pagination'

const PeopleList = () => {
    const { loading, peopleList, error } = useSelector(selectPeopleList)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPeopleList())
    }, [dispatch])

    const navigate = useNavigate()

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    return (
        <>
            <Section>
                {error ? (
                    <ErrorMessage />
                ) : loading ? (
                    <>
                        <Title>Popular people</Title>
                        <Loader />
                    </>
                ) : (
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
                    ))
                )}
            </Section>
            {!error && !loading && <Pagination />}
        </>
    )
}

export default PeopleList
