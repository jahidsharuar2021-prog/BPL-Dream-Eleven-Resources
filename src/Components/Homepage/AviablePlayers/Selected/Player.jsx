import React, { use, useState } from "react";
import AviablePlayers from "../AviablePlayers";
import { Ghost } from "lucide-react";
import Selected from "../Selected";

const Player = ({ playerData, setCoin, coin, selectedPlayers }) => {
  const players = use(playerData);

  const [selectedType, setSelectedType] = useState("avilable");
  // console.log("selected:", selectedType);
  // console.log(selectedPlayers);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between my-8">
          {selectedType == "avilable" ? (
            <h1 className="font-bold text-2xl"> Avilable Players</h1>
          ) : (
            <h1 className="font-bold text-2xl"> Selected Players</h1>
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
              Selected (0)
            </button>
          </div>
        </div>

        {selectedType == "avilable" ? (
          <AviablePlayers players={players} coin={coin} setCoin={setCoin}>
            {" "}
          </AviablePlayers>
        ) : (
          <Selected selectedPlayers={selectedPlayers}> </Selected>
        )}
      </div>
    </>
  );
};

export default Player;
