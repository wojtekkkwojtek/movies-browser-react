import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { PersonTile } from '../../../common/components/Tiles/PersonTile';
import { Title } from "../../../common/components/Title";
import { Loader } from '../../../common/components/Loader';
import { Container } from '../../../common/components/Container';
import {
    selectPeopleList,
    setPeopleList,
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} from './peopleListSlice';
import { ErrorMessage } from "../../../common/components/ErrorMessage";

const PeopleList = () => {
    const { loading, peopleList, error } = useSelector(selectPeopleList);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchPeopleList())
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    const navigate = useNavigate()

    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    const routeToPerson = (id) => {
        routeChange(id)
    }

    return (
        <Container>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading && <Title>Popular people</Title>}
            {!error &&
                !loading && peopleList && peopleList.map((people) => (
                    <React.Fragment key={people.id}>
                        <PersonTile
                            key={nanoid()}
                            onClick={() => routeChange(people.id)}
                            name={people.name}
                            poster={people.profile_path}
                        />
                    </React.Fragment>
                ))}
        </Container>
    )
};

export default PeopleList;