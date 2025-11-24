const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/anime");

router.get("/", getHome);

module.exports = router;