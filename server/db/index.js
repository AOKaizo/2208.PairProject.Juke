const db = require("./db");
const Album = require("./album");
const Artist = require("./artist");
const Song = require("./song");
// require each of your models here...
// ...and give them some nice associations here!
//Assossiations:

//Song(base)-- belongs to Album ---> album can have many songs. 
//One - to --Many relationship one Album can have many songs and one song can have only one album.
Album.hasMany(Song)
Song.belongsTo(Album)

// Artist can have many songs. One song can have one Artist. 
//One - to --Many relationship 
Artist.hasMany(Song)
Song.belongsTo(Artist)

//One - to --Many relationship 
//One artists can have many album, and one album can belong to one  artist. 
Artist.hasMany(Album)
Album.belongsTo(Artist)

module.exports = {
  db,
  Album,
  Artist,
  Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
};