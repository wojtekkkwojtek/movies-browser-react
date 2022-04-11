import Header from '../../common/Header'
import { Loader } from '../../common/Loader'
import { apiBase } from '../../common/generalData'
// import { useEffect } from 'react'

function App() {
    ;(async () => {
        const response = await fetch(apiBase)
        const data = await response.json()
        console.log(data)
    })()

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json()
    //     )
    // })

    // console.log({ apiBase })
    return (
        <div>
            <Header />
            <p>Movies browser application in development</p>
            <Loader />
            <p>Movies browser application in development</p>
        </div>
    )
}

export default App
