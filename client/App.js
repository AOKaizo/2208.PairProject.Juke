import axios from "axios";
import React, { useEffect, useState } from "react";
import Albums from "./components/albums/Albums.jsx";
import Player from "./components/player/Player.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import SingleAlbum from "./components/singleAlbum/SingleAlbum.jsx";


const App = () => {
  const [albumsArray, setAlbumsArray] = useState([]);
  const fetchAlbums = async () => {  await axios
  .get('http://localhost:8080/api/albums/')
  .then((res) => {
    const albums = res.data;
    setAlbumsArray(albums);
    console.log(albums);
  })
  }
  //hooks:
  // The GET request will be something like '/api/albums'.
  useEffect(() => {
    fetchAlbums()
  }, []);

  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className="container">
        {/* <Albums albumsArray={albumsArray} /> */}
        <SingleAlbum albumsArray={albumsArray}  />
      </div>
      <Player />
    </div>
  );
};

export default App;
