import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { selectPersonPage, fetchPersonPage, selectError, selectLoading } from './personPageSlice'
import { Title } from '../../../common/components/Title'
import { useEffect } from "react"
import { ErrorMessage } from '../../../common/components/ErrorMessage'

const PersonPage = () => {

    const { personPage, loading, error } = useSelector(selectPersonPage)

    const dispatch = useDispatch();

    const { id } = useParams();

    console.log('id__in_PersonPage', id) /////////////////////////

    useEffect(() => {
        dispatch(fetchPersonPage(id));
    }, [id, dispatch])

    console.log('personPage in index: ', personPage)
    console.log('loading strony personPage:', loading) //////////////////////
    console.log('error ', error)
    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading}
            {!error && !loading && personPage && (
                <>
                    <Container>
                        <Tile details person
                            key={nanoid()}
                            title={personPage.name}
                            bird="Date of bird: "
                            date_of_bird={personPage.birthday}
                            place="Place of bird: "
                            place_of_bird={personPage.place_of_bird}
                            poster={personPage.profile_path}

                            overview={personPage.biography}
                        />
                        <Title>Cast</Title>
                        <Title>Crew</Title>
                    </Container>
                </>

            )}
        </>
    )
}

export default PersonPage
