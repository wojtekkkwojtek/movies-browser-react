import { apiBase } from '../../common/generalData'
import { useEffect } from 'react'
import { Wrapper } from './styled'
const Main = () => {
    useEffect(() => {
        ;(async () => {
            const response = await fetch(apiBase)
            const data = await response.json()
            console.log(data)
        })()
    }, [])
    return (
        <>
            <Wrapper>test</Wrapper>
        </>
    )
}

export default Main
