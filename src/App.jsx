
import { Suspense } from 'react';
import './App.css'
import Banner from './Components/HomePage/banner';
import Navbar from './Components/Navbar/Navbar';
import Player from './Components/Players/Player';


const fetchPlayers=async()=>{
  const res=await fetch("/data.json");
  return res.json();
}


function App() {
      const  playerData = fetchPlayers();
  return (
    <>
      <Navbar> </Navbar>
      <Banner></Banner>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Player playerData={playerData}> Player</Player>
      </Suspense>
    </>
  );
}

export default App
