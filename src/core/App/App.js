import { Loader } from "../../common/components/Loader";
import Header from "../../common//components/Header";
import Tile from "../../common/components/Tile";
import Main from "../../common/Main/index";

function App() {
  return (
    <div>
      <Header />
      {/* <Loader /> */}
      <Tile />
      <Main />
    </div>
  );
}

export default App;
