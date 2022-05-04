import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { selectPersonPage, fetchPersonPage, selectPersonCast } from './personPageSlice'
import { Title } from '../../../common/components/Title'
import { useEffect } from "react"
import { ErrorMessage } from '../../../common/components/ErrorMessage'
//import {PersonCast} from './PersonCast'
//import { PersonInfo } from "./PersonInfo"

const PersonPage = () => {

    const {personPage, loading, error } = useSelector(selectPersonPage)
    const personCast= useSelector(selectPersonCast)

console.log('personCast in index: ', personCast )
//console.log('personCast(id) in index: ', personCast )
    const dispatch = useDispatch();

    const { id } = useParams();

    console.log('id__in_PersonPage', id) /////////////////////////

    useEffect(() => {
        dispatch(fetchPersonPage(id));

    }, [id, dispatch])
    console.log('fetchPrsonPage(id): ', fetchPersonPage(id))
    console.log('personPage in index: ', personPage)
    console.log('loading strony personPage:', loading) //////////////////////
    //console.log('error ', error)
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
                            birth="Date of birth: "
                            date_of_birth={personPage.birthday}
                            place="Place of birth: "
                            place_of_birth={personPage.place_of_birth}
                            poster={personPage.profile_path}

                            overview={personPage.biography}
                        />
                        {/* <PersonInfo /> */}
                        <Title>Cast</Title>
                        <Title>Crew</Title>
                    </Container>
                </>

            )}
        </>
    )
}

export default PersonPage
