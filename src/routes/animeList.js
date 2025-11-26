const express = require("express");
const router = express.Router();
const { getAnimeList } = require("../controllers/anime");

router.get("/", getAnimeList);
router.get("/:letter", getAnimeList);

module.exports = router;