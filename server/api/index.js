const router = require("express").Router();
const { db, Album, Artist, Song } = require("../db");

// connect your API routes here!

//GET/api/albums
router.get("/albums", async (req, res, next) => {
  const albums = await Album.findAll();
  res.send(albums);
});

//GET/api/ablums/:albumId
router.get("/albums/:albumId", async (req, res, next) => {
  const album = await Album.findByPk(Number(req.params.albumId));
  if (album) {
    res.status(200).send(album);
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
