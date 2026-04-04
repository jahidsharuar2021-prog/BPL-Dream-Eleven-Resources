import React, { use } from 'react';

const Player = ({ playerData }) => {
    const playerdata = use(playerData);
    console.log(playerdata);
  return <p>Player:{playerdata.length}</p>;};

export default Player;