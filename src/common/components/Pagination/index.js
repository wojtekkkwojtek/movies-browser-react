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
    selectTotalMoviesPages,
} from '../../../features/movies/MovieList/movieListSlice'
import {
    fetchPeopleList,
    selectTotalPeoplePages,
} from '../../../features/people/PeopleList/peopleListSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    useSearch,
    useReplaceQueryParameter,
} from '../../../features/useParameters'
import { queryKeys } from '../../../features/queryKeys'

export const Pagination = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const atMovies = location.pathname.includes('movie')
    const page = useSearch(queryKeys.page) || 1
    const totalMoviesPages = useSelector(selectTotalMoviesPages)
    const totalPeoplePages = useSelector(selectTotalPeoplePages)
    const totalMoviesPagesMax500 =
        totalMoviesPages < 500 ? totalMoviesPages : 500
    console.log('totalMoviesPages:', totalMoviesPages)
    console.log('pages:', totalMoviesPagesMax500)

    const totalPages = atMovies ? +totalMoviesPagesMax500 : totalPeoplePages
    const inactivePrevious = +page === 1
    const inactiveNext = +page === totalPages
    const replaceQueryParameter = useReplaceQueryParameter(location, navigate)

    console.log('totalPages:', totalPages)
    console.log('currentPage:', page)
    console.log('atMovies:', atMovies)
    console.log('inactiveNext:', inactiveNext)

    const onClickButton = (page) => {
        replaceQueryParameter({ key: queryKeys.page, value: +page })
        atMovies
            ? dispatch(fetchMovieList(page))
            : dispatch(fetchPeopleList(page))
    }

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
            <Button
                onClick={() => onClickButton(totalPages)}
                disabled={inactiveNext}
            >
                <Text>Last</Text>
                <NextMobile src={inactiveNext ? NextOffImage : NextImage} />
                <Next src={inactiveNext ? NextOffImage : NextImage} />
            </Button>
        </Wrapper>
    )
}
