import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonTile } from '../../../common/components/Tiles/PersonTile';
import { Title } from "../../../common/components/Title";
import { Loader } from '../../../common/components/Loader';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container } from '../../../common/components/Container';
import { fetchPersonPage } from '../PersonPage/personPageSlice';
import {
    selectPeopleList,
    setPeopleList,
    fetchPeopleList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} from './peopleListSlice';
import {ErrorMessage} from "../../../common/components/ErrorMessage";


const PeopleList = () => {
    const dispatch = useDispatch();

    const { loading, peopleList, error } = useSelector(selectPeopleList);
    console.log(loading, peopleList);


    const navigate = useNavigate()
    const routeChange = (id) => {
        navigate(`/people/${id}`)
    }

    const routeToPersonPage = (id) => {
        routeChange(id)
        dispatch(fetchPersonPage(id))
    }

    return (
        <Container>
            {error ? (
                <ErrorMessage />
            ) : loading ? (
                <>
                    <Title>Popular people</Title>
                    <Loader />
                </>
            ) : peopleList && peopleList.map((people) => (
                <>
                    <PersonTile
                        key={nanoid()}
                        onClick={() => routeChange(people.id)}
                        name={people.name}
                        poster={people.profile_path}
                    />
                </>
            )
        )}
        </Container>
    )
};

export default PeopleList;