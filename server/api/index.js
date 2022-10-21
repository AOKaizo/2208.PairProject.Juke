const router = require("express").Router();
const { db, Album, Artist, Song } = require("../db");

// connect your API routes here!

//GET/api/albums
router.get("/albums", async (req, res, next) => {
  const albums = await Album.findAll({ include: Artist });
  res.send(albums);
});

//GET/api/ablums/:albumId
router.get("/albums/:albumId", async (req, res, next) => {
  const album = await Album.findAll({
    where: {
      albumId: req.params.albumId},
       include: {Song, Artist}
      };
  if (album) {
    res.status(200).send(album);
  } else {
    res.sendStatus(400);
  }
});

// User.findAll({
//   where: {
//     '$Instruments.size$': { [Op.ne]: 'small' }
//   },
//   include: [{
//     model: Tool,
//     as: 'Instruments'
//   }]
// });

module.exports = router;
