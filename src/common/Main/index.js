import { URL } from '../assets/generalData/fetchedData'
import { useEffect } from 'react'
import { Wrapper } from './styled'
const Main = () => {
    useEffect(() => {
        ;(async () => {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            return data
        })()
    }, [])
    return (
        <>
            <Wrapper>test</Wrapper>
        </>
    )
}

export default Main
