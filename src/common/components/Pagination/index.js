import PreviousImage from './Previous.svg'
import PreviousOffImage from './PreviousOff.svg'
import NextImage from './Next.svg'
import NextOffImage from './NextOff.svg'
import {
    Wrapper,
    Button,
    Previous,
    PreviousMobile,
    Next,
    NextMobile,
    Text,
    PageInformation,
    Bold,
} from './styled'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchMovieList,
    selectMovieList,
    selectTotalMoviesPages,
} from '../../../features/movies/MovieList/movieListSlice'
import { selectTotalPeoplePages } from '../../../features/people/PeopleList/peopleListSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    useSearch,
    useReplaceQueryParameter,
} from '../../../features/useSearch'
import pageQueryParameter from '../../../features/pageQueryParameter'
import { useState } from 'react'

export const Pagination = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const atMovies = location.pathname.includes('movie') ? true : false
    const page = useSearch(pageQueryParameter) || 1
    const totalMoviesPages = useSelector(selectTotalMoviesPages)
    const totalPeoplePages = useSelector(selectTotalPeoplePages)
    const totalPages = atMovies ? totalMoviesPages : totalPeoplePages
    const inactivePrevious = page === 1
    const inactiveNext = page === totalPages
    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)
    // const { page } = useSelector(selectMovieList)

    // console.log('page:', page)
    console.log('totalPages:', totalPages)
    console.log('currentPage:', page)
    console.log('atMovies:', atMovies)

    // const [page, setPage] = useState(1)

    const onClickButton = (currentPage) => {
        replaceQueryParameter({ key: 'page', value: +currentPage })
        dispatch(fetchMovieList(currentPage))
    }

    // const onClickButtonPrevious = () => {
    //     replaceQueryParameter({
    //         key: pageQueryParameter,
    //         value: +currentPage - 1,
    //     })
    //     dispatch(fetchMovieList(currentPage))
    // }

    // const onClickButtonNext = () => {
    //     replaceQueryParameter({
    //         key: pageQueryParameter,
    //         value: +currentPage + 1,
    //     })
    //     setPage((prev) => prev++)
    //     dispatch(fetchMovieList(currentPage))
    // }

    // const onClickButtonLast = () => {
    //     replaceQueryParameter({ key: pageQueryParameter, value: totalPages })
    //     dispatch(fetchMovieList(currentPage))
    // }

    return (
        <Wrapper>
            <Button
                onClick={() => onClickButton(1)}
                disabled={inactivePrevious}
            >
                <Previous
                    src={inactivePrevious ? PreviousOffImage : PreviousImage}
                />
                <Text>First</Text>
                <PreviousMobile
                    src={inactivePrevious ? PreviousOffImage : PreviousImage}
                />
            </Button>
            <Button
                onClick={() => onClickButton(+page - 1)}
                disabled={inactivePrevious}
            >
                <Previous
                    src={inactivePrevious ? PreviousOffImage : PreviousImage}
                />
                <Text>Previous</Text>
            </Button>
            <PageInformation>
                Page<Bold> {page} </Bold>
                of<Bold> {totalPages} </Bold>
            </PageInformation>
            <Button
                onClick={() => onClickButton(+page + 1)}
                disabled={inactiveNext}
            >
                <Text>Next</Text>
                <Next src={inactiveNext ? NextOffImage : NextImage} />
            </Button>
            <Button onClick={() => onClickButton(1)} disabled={inactiveNext}>
                <Text>Last</Text>
                <NextMobile src={inactiveNext ? NextOffImage : NextImage} />
                <Next src={inactiveNext ? NextOffImage : NextImage} />
            </Button>
        </Wrapper>
    )
}
