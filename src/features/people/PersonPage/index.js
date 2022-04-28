import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { Tile } from '../../../common/components/Tiles/Tile'
import { Loader } from '../../../common/components/Loader'
import { Container } from '../../../common/components/Container'
import { selectPersonPage } from './personPageSlice'
import { Title } from '../../../common/components/Title'

const PersonPage = () => {
    const { loading, personPage } = useSelector(selectPersonPage)
    console.log('personPage w index: ', personPage) //////////////////////////
    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                { personPage } && (
                    <Container>
                        <Tile
                            person
                            key={nanoid()}
                            title={personPage.name}
                            event="Date of birth:"
                            date={personPage.birthday}
                            poster={personPage.profile_path}
                            production="Place of birth:"
                            country={[personPage.place_of_birth]}
                            overview={personPage.biography}
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
