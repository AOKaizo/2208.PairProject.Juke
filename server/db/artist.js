const Sequelize = require("sequelize");
const { STRING } = require("sequelize");

const db = require("./db");

const Artist = db.define("artist", {
  name: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Artist;
