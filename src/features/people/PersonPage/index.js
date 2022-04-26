import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersonTile } from '../../../common/components/Tiles/PersonTile';
import { Loader } from '../../../common/components/Loader';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Container } from '../../../common/components/Container';


import {
    fetchPersonList,
    fetchPeopleListSuccess,
    fetchPeopleListError,
} from './personPageSlice';

const Person = () => {
    const dispatch = useDispatch();

       // const navigate = useNavigate()
    // const routeChange = (id) => {
    //     navigate(`/people/${id}`)
    // }

 
    const routeToPeoplePage = (id) => {
        routeChange(id)
        dispatch(fetchPersonPage(id))
    }

    return (
        <Container>
            {loading ? (
                <Loader />
            ) : (
                peopleList &&
                peopleList.map((people) => (
                    <>
                        <PersonTile
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
};

export default PeopleList;

