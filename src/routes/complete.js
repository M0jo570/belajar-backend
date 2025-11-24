const express = require("express");
const router = express.Router();
const { getComplete } = require("../controllers/anime");

// /api/anime/complete → page 1
router.get("/", (req, res) => {
  req.params.page = 1;
  getComplete(req, res);
});

// /api/anime/complete/page/:page
router.get("/page/:page", getComplete);

module.exports = router;