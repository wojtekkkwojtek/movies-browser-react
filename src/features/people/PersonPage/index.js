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

    const personPage  = useSelector(selectPersonPage)
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const dispatch = useDispatch();

    const { id } = useParams();

    console.log('id__in_PersonPage', id) /////////////////////////
    console.log('loading strony personPage:', loading) //////////////////////

    useEffect(() => {
        dispatch(fetchPersonPage(id));
    }, [id, dispatch])

    console.log('personPage in index: ', personPage)

    return (
        <>
            {error && !loading && <ErrorMessage />}
            {!error && loading && <Loader />}
            {!error && !loading}
            {!error && !loading && personPage && (
                <>
                    <Container>
                        <Tile
                            key={nanoid()}
                            name={personPage.name}
                            poster={personPage.profile_path}
                            country={personPage.place_of_bird}
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
