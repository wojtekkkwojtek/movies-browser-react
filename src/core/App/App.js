import Header from '../../common/Header'
import { Loader } from '../../common/Loader'
import Main from '../../common/Main'

// import { useEffect } from 'react'

function App() {
    return (
        <div>
            <Header />
            <Main>
                <Loader />
                <p>Movies browser application in development</p>
            </Main>
        </div>
    )
}

export default App
