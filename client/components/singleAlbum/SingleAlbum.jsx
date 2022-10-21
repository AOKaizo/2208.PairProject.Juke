import React from "react";
import Songs from "../songs/Songs";

const SingleAlbum = ({albumsArray}) => {

  return (
    <div class="container">
      <div id="single-album" class="column">
        <div class="album">
          <a>
            <img src="default-album.jpg" />
            <p>ALBUM 2</p>
            <small>Artist Name</small>
          </a>
        </div>
        <Songs />
      </div>
    </div>
  );
};

export default SingleAlbum;
