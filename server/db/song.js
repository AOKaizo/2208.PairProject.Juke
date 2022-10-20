const Sequelize = require("sequelize");
const { STRING } = require("sequelize");

const db = require("./db");

const Song = db.define("song", {
  name: {
    type: STRING,
    allowNull: false,
  },
  audioUrl: {
    type: STRING,
  },
  genre: {
    type: STRING,
  },
});

module.exports = Song; 
