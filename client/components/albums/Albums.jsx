import React from "react";

const Albums = ({ albumsArray }) => {
  const renderAlbums = albumsArray.map((album) => {
    return (
      <div className="album">
        <a>
          <img src={album.artworkUrl} />
          <p>{album.name}</p>
          <small>{album.artist.name}</small>
        </a>
      </div>
    );
  });
  return (
    <div id="albums" className="row wrap">
      {[renderAlbums]}
    </div>
  );
};

export default Albums;
