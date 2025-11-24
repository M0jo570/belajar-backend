const express = require("express");
const router = express.Router();
const { getOngoing } = require("../controllers/anime");

// default → page 1
router.get("/", (req, res) => getOngoing({ params: { page: 1 } }, res));

// custom page
router.get("/page/:page", getOngoing);

module.exports = router;