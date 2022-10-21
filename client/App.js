import axios from "axios";
import React, { useState } from "react";
import Albums from "./components/albums/Albums.jsx";
import Player from "./components/player/Player.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";



const App = () => {
  
  const [albumsArray, setAlbumsArray] = useState([]);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        <Albums albumsArray={albumsArray} />
      </div>
      <Player />
    </div>
  );
};

export default App;
