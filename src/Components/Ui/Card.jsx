

import React, { useState } from 'react';
import { FaFlag, FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';

    const Card = ({
      player,
      setCoin,
      coin,
      setSelectedPlayer,
      selectedPlayers,
    }) => {
      const [isSelected, setIsSelected] = useState(false);

      const handleChoosePlayer = () => {
        let Newcoin = coin - player.price;
        if (Newcoin >= 0) {
          setIsSelected(true);
          setSelectedPlayer([...selectedPlayers, player]);
          setCoin(coin - player.price);
          toast.success(`${player.playerName} is selected`);
       
        } else {
            toast.error("Not enough coin to purchase this player");
          return;
        }
      };

      //   console.log(coin);

      return (
        <div className="max-w-7xl mx-auto  ">
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img src={player.playerImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <FaUser />
                {player.playerName}
              </h2>

              <div className="flex justify-between gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <FaFlag />
                  <p>{player.playerCountry}</p>
                </div>

                <button className="btn">{player.playerType}</button>
              </div>

              <div className="divider"></div>
              <h2 className="font-bold">Rating:{player.rating}</h2>
              <div className="flex justify-between font-bold">
                <p>{player.battingStyle}</p>
                <p className="text-right">{player.bowlingStyle}</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Price: ${player.price}</p>
                <button
                  className="btn"
                  onClick={handleChoosePlayer}
                  disabled={isSelected}
                >
                  {isSelected === true ? "Selected" : "Choose Players"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Card;



//  <div className="max-w-7xl mx-auto  ">
//                 <div className="card bg-base-100 w-96 shadow-sm">
//                   <figure>
//                     <img src={player.playerImage} alt="Shoes" />
//                   </figure>
//                   <div className="card-body">
//                     <h2 className="card-title">
//                       <FaUser />
//                       {player.playerName}
//                     </h2>

//                     <div className="flex justify-between gap-2 items-center">
//                       <div className="flex gap-2 items-center">
//                         <FaFlag />
//                         <p>{player.playerCountry}</p>
//                       </div>

//                       <button className="btn">{player.playerType}</button>
//                     </div>

//                     <div className="divider"></div>
//                     <h2 className="font-bold">Rating:{player.rating}</h2>
//                     <div className="flex justify-between font-bold">
//                       <p>{player.battingStyle}</p>
//                       <p className="text-right">{player.bowlingStyle}</p>
//                     </div>
//                     <div className="flex justify-between font-bold">
//                       <p>Price: ${player.price}</p>
//                       <button className="btn" onClick={()=>setIsSelected(true)}>  {isSelected===true?"Selected":"Choose Players"}</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>



