import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Player from "./Components/Homepage/AviablePlayers/Selected/Player";
import Poster from "./Components/Navbar/Poster";

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerData = fetchPlayers();
  const [coin, setCoin] = useState(50000);

  const [selectedPlayers, setSelectedPlayer] = useState([]);
  console.log(selectedPlayers);

  return (
    <>
      <Navbar coin={coin}> </Navbar>
      <Poster></Poster>
      <div className="max-w-7xl mx-auto">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Player
            selectedPlayers={selectedPlayers}
            coin={coin}
            playerData={playerData}
            setCoin={setCoin}
          >
            {" "}
            Player
          </Player>
        </Suspense>
      </div>
    </>
  );
}

export default App;
