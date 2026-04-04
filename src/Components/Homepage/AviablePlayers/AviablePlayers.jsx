import React from 'react';
import Card from '../../Ui/Card';



const AviablePlayers = ({ players, setCoin ,coin }) => {
  // console.log(players);
  return (
    <>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3">
        {players.map((player,index) => {
          return (
            <Card key={index} coin={coin} setCoin={setCoin} player={player}>
              {" "}
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default AviablePlayers;