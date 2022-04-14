import { Loader } from "../../common/components/Loader";
import Header from "../../common//components/Header";
import {  Tile } from "../../common/components/Tiles/BigTile";
import { LittleTile } from "../../common/components/Tiles/LittleTile";
import Main from "../../common/Main/index";
import { Container } from "../../common/components/Container";

function App() {
  return (
    <div>
      <Header />
      {/* <Loader /> */}
      <Container>
        <Tile />
      </Container>
      <Container>
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
        <LittleTile />
      </Container>
      <Main />
    </div>
  );
}

export default App;
