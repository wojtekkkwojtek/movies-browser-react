import { useEffect, useState } from 'react'
import { URLpopularpeoples } from '../../../common/assets/generalData/fetchedData'
import { Tile } from '../../../common/components/Tiles/BigTile'
import { Loader } from '../../../common/components/Loader'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { LittleTile } from '../../../common/components/Tiles/LittleTile'

import { useParams } from 'react-router-dom'
import { Container } from '../../../common/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectPeopleList,
    fetchExample,
    setPeopleList,
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} from './peopleListSlice'

const PeopleList = () => {
    // const isLoading = useSelector(selectLoading)
    const { error, loading, peopleList } = useSelector(selectPeopleList)
    console.log(error, loading, peopleList)
    const dispatch = useDispatch()

    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    console.log(useParams())

    useEffect(() => {
        dispatch(fetchExample())
    }, [dispatch])

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                peopleList &&
                peopleList.map((people) => (
                    <>
                        <LittleTile
                            key={nanoid()}
                            onClick={
                                () => routeChange(people.id)
                                // (window.location.href = `/peoples-browser-react#/people/${people.id}`)
                            }
                            name={people.name}
                            poster={people.profile_path}
                        />
                    </>
                ))
            )}
        </Container>
    )
}

export default PeopleList

