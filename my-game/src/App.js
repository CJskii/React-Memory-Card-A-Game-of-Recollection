import "./App.css";
import Header from "./Components/Header";
import Score from "./Components/Game/Score";
import Information from "./Components/Information";
import Game from "./Components/Game/Game";

const App = () => {
  return (
    <div className="app  h-screen">
      <Header />
      <Score />
      <Information />
      <Game />
      {/* HEADER
      SCORE
      GAME
      FOOTER
      bg-neutral-800 */}
    </div>
  );
};

export default App;
