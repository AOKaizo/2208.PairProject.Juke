import React from "react";

const Albums = () => {
  return (
    // <!-- All Albums -->
    <div id="albums" class="row wrap">
      <div className="album">
        <a>
          <img src="default-album.jpg" />
          <p>ALBUM 1</p>
          <small>Artist Name</small>
        </a>
      </div>
      <div class="album">
        <a>
          <img src="default-album.jpg" />
          <p>ALBUM 2</p>
          <small>Artist Name</small>
        </a>
      </div>
    </div>
  );
};

export default Albums;
