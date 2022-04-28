import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { PersonTile } from '../../../common/components/Tiles/PersonTile'
import { Title } from '../../../common/components/Title'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { fetchPersonPage } from '../PersonPage/personPageSlice'
import { selectPeopleList } from './peopleListSlice'

const PeopleList = () => {
    const dispatch = useDispatch()

    const { loading, peopleList } = useSelector(selectPeopleList)
    console.log('loading, peopleList: ' + { loading, peopleList }) ///////////////////////

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    const routeToPersonPage = (id) => {
        routeChange(id)
        dispatch(fetchPersonPage(id))
        console.log('id-roote= ', id) /////////////////////////
    }

    return (
        <Container>
            <Title>Popular people</Title>
            {loading ? (
                <Loader />
            ) : (
                peopleList &&
                peopleList.map((people) => (
                    <React.Fragment key={people.id}>
                        peopleId_w_list', {people.id}
                        <PersonTile
                            key={nanoid()}
                            onClick={() => routeToPersonPage(people.id)}
                            name={people.name}
                            poster={people.profile_path}
                        />
                    </React.Fragment>
                ))
            )}
        </Container>
    )
}

export default PeopleList
