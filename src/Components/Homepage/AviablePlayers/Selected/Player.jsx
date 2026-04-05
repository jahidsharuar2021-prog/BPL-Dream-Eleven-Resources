import React, { use, useState } from "react";
import AviablePlayers from "../AviablePlayers";
import { Ghost } from "lucide-react";
import Selected from "../Selected";

const Player = ({ playerData, setCoin, coin }) => {
  const players = use(playerData);

  const [selectedType, setSelectedType] = useState("avilable");
   const [selectedPlayers, setSelectedPlayer] = useState([]);
   console.log("tesing=",selectedPlayers);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between my-8">
          {selectedType == "avilable" ? (
            <h1 className="font-bold text-2xl"> Avilable Players</h1>
          ) : (
            <h1 className="font-bold text-2xl">
              {" "}
              Selected Players({selectedPlayers.length}/{players.length})
            </h1>
          )}

          <div className="flex gap-2">
            <button
              onClick={() => setSelectedType("avilable")}
              className={`btn ${selectedType == "avilable" ? "btn-accent" : "bg-amber-00"} `}
            >
              Avilable
            </button>
            <button
              onClick={() => setSelectedType("selected")}
              className={`btn ${selectedType == "selected" ? "btn-accent" : "bg-amber-00"} `}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {selectedType == "avilable" ? (
          <AviablePlayers
            selectedPlayers={selectedPlayers}
            setSelectedPlayer={setSelectedPlayer}
            players={players}
            coin={coin}
            setCoin={setCoin}
          >
            {" "}
          </AviablePlayers>
        ) : (
          <Selected
            selectedPlayers={selectedPlayers}
            setSelectedPlayer={setSelectedPlayer}
            coin={coin}
            setCoin={setCoin}
          >
            {" "}
          </Selected>
        )}
      </div>
    </>
  );
};

export default Player;
