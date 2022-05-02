import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { selectPersonPage, fetchPersonPage } from './personPageSlice'
import { Title } from '../../../common/components/Title'
import { useEffect } from "react"

const PersonPage = () => {

    const personDetails = useSelector(selectPersonPage)
    //const loading = useSelector(selectLoading)
    const loading=true
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log('id_from_useParams_in_PersonPage', id)


    useEffect(() => {
        dispatch(fetchPersonPage(id));
    }, [id, dispatch])


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                { personDetails } && (
                    <Container>
                        <Tile
                            key={nanoid()}
                            name={personDetails.name}
                            poster={personDetails.profile_path}
                            country={personDetails.place_of_bird}
                            overview={personDetails.biography}
                        />
                        <Title>Cast</Title>
                        <Title>Crew</Title>
                    </Container>
                )
            )}
        </>
    )
}

export default PersonPage
