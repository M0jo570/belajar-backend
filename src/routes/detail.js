const express = require("express");
const router = express.Router();
const { getDetail } = require("../controllers/anime");

router.get("/:slug", getDetail);

module.exports = router;