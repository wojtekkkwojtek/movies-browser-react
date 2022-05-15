import PreviousImage from "./Previous.svg";
import PreviousOffImage from "./PreviousOff.svg";
import NextImage from "./Next.svg";
import NextOffImage from "./NextOff.svg";
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
} from "./styled";
import { useSelector } from "react-redux";
import { selectTotalMoviesPages } from "../../../features/movies/MovieList/movieListSlice";
import { selectTotalPeoplePages } from "../../../features/people/PeopleList/peopleListSlice";
import { useLocation } from "react-router-dom";
import { useSearch, useReplaceQueryParameter } from "../../../features/useSearch";
import pageQueryParameter from "../../../features/pageQueryParameter";

export const Pagination = () => {
  const location = useLocation();
  const atMovies = location.pathname.includes("movies") ? true : false;
  const currentPage = +useSearch(pageQueryParameter) || 1;
  const totalMoviesPages = useSelector(selectTotalMoviesPages);
  const totalPeoplePages = useSelector(selectTotalPeoplePages);
  const totalPages = atMovies ? totalMoviesPages : totalPeoplePages;
  const inactivePrevious = currentPage === 1;
  const inactiveNext = currentPage === totalPages;
  const replaceQueryParameter = useReplaceQueryParameter();

  const onClickButtonFirst = () => {
    replaceQueryParameter({ key: pageQueryParameter, value: 1 })
  };

  const onClickButtonPrevious = () => {
    replaceQueryParameter({ key: pageQueryParameter, value: +currentPage - 1 });
  };

  const onClickButtonNext = () => {
    replaceQueryParameter({ key: pageQueryParameter, value: +currentPage + 1 });
  };

  const onClickButtonLast = () => {
    replaceQueryParameter({ key: pageQueryParameter, value: totalPages });
  };
  
  return (
    <Wrapper>
      <Button
        onClick={onClickButtonFirst}
        disabled={inactivePrevious}
      >
        <Previous src={inactivePrevious ? PreviousOffImage : PreviousImage} />
        <Text>First</Text>
        <PreviousMobile src={inactivePrevious ? PreviousOffImage : PreviousImage} />
      </Button>
      <Button
        onClick={onClickButtonPrevious}
        disabled={inactivePrevious}
      >
        <Previous src={inactivePrevious ? PreviousOffImage : PreviousImage} />
        <Text>Previous</Text>
      </Button>
      <PageInformation>
        Page<Bold> {currentPage} </Bold>
        of<Bold> {totalPages} </Bold>
      </PageInformation>
      <Button
        onClick={onClickButtonNext}
        disabled={inactiveNext}
      >
        <Text>Next</Text>
        <Next src={inactiveNext ? NextOffImage : NextImage} />
      </Button>
      <Button
        onClick={onClickButtonLast}
        disabled={inactiveNext}
      >
        <Text>Last</Text>
        <NextMobile src={inactiveNext ? NextOffImage : NextImage} />
        <Next src={inactiveNext ? NextOffImage : NextImage} />
      </Button>
    </Wrapper>
  )
};