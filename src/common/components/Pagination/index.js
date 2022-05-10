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
import { selectMovieList } from "../../../features/movies/MovieList/movieListSlice";
import { selectPeopleList } from "../../../features/people/PeopleList/peopleListSlice";
import { useLocation } from "react-router-dom";

export const Pagination = () => {
  const location = useLocation();
  const totalMoviesContent = useSelector(selectMovieList);
  const totalPeopleContent = useSelector(selectPeopleList);
  //const inactivePrevious = currentPage === 1;
  //const inactiveNext = currentPage === totalPages;
  return (
    <Wrapper>
      <Button>
        <Previous src={PreviousImage} />
        <Text>First</Text>
        <PreviousMobile src={inactivePrevious ? PreviousOffImage : PreviousImage} />
      </Button>
      <Button>
        <Previous src={PreviousImage} />
        <Text>Previous</Text>
      </Button>
      <PageInformation>
        Page<Bold> 1 </Bold>
        of<Bold> 000 </Bold>
      </PageInformation>
      <Button>
        <Text>Next</Text>
        <Next src={NextImage} />
      </Button>
      <Button>
        <Text>Last</Text>
        <NextMobile src={inactiveNext ? NextOffImage : NextImage} />
        <Next src={NextImage} />
      </Button>
    </Wrapper>
  )
};