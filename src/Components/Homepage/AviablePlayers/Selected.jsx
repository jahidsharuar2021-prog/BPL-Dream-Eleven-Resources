import React from 'react';
import { FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Selected = ({ selectedPlayers, setSelectedPlayer, coin, setCoin }) => {
  // console.log("  consol",setSelectedPlayer);
  const handleDeleteSelectedPlayer = (player) => {
    const filterPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.playerName !== player.playerName,
    );
    setCoin(coin+player.price)
    setSelectedPlayer(filterPlayers);
  };

  return (
    <div className="mb-4">
      {
        selectedPlayers.length===0?
        <div className='flex flex-col h-[400px] items-center '>
          <h2 className='font-semibold text-xl'>No player slected yet</h2>
          <p>Go to Avilable tab to select players</p>
        </div>:
        selectedPlayers.map((player) => {
        console.log(player);
        return (
          <div className="mb-4">
            <div className="flex justify-between border rounded-2xl p-3 ">
              <div className="imgdiv flex gap-4">
                <img
                  className="h-[100px] w-auto"
                  src={player.playerImage}
                  alt=""
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span>
                      {" "}
                      <FaUser></FaUser>
                    </span>
                    <h2 className="font-bold">{player.playerName}</h2>
                  </div>
                  <p>{player.playerType}</p>
                </div>
              </div>

              <button
                className="btn text-red-500 "
                onClick={() => handleDeleteSelectedPlayer(player)}
              >
                <MdDelete></MdDelete>
              </button>
            </div>
          </div>
        );
      })}
      
     
    </div>
  );
};

export default Selected;