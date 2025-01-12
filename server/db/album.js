const Sequelize = require("sequelize");
const { STRING } = require("sequelize");

const db = require("./db");

const Album = db.define("album", {
  name: {
    type: STRING,
    allowNull: false,
  },
  artworkUrl: {
    type: STRING,
    defaultValue: "default-album.jpg",
  },
});

module.exports = Album;
