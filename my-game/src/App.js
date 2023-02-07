import "./App.css";
import Header from "./Components/Header";
import Information from "./Components/Information";
import Game from "./Components/Game/Game";

const App = () => {
  return (
    <div className="app  h-screen p-4">
      <Header />
      <Information />
      <Game />
    </div>
  );
};

export default App;
