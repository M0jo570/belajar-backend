const express = require("express");
const router = express.Router();
const { getSearch} = require("../controllers/anime");

router.get("/:query", getSearch);

module.exports = router;