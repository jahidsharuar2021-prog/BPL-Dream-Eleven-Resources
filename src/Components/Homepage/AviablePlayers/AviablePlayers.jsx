import React from 'react';
import Card from '../../Ui/Card';



const AviablePlayers = ({
  players,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayer,
}) => {
  // console.log("arrays=",selectedPlayers, setSelectedPlayer);
  return (
    <>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3">
        {players.map((player, index) => {
          return (
            <Card
              setSelectedPlayer={setSelectedPlayer}
              selectedPlayers={selectedPlayers}
              key={index}
              coin={coin}
              setCoin={setCoin}
              player={player}
            >
              {" "}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default AviablePlayers;