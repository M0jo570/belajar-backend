const express = require("express");
const cors = require("cors");

const homeRoute = require("./routes/home");
const ongoingRoute = require("./routes/ongoing");
const completeRoute = require("./routes/complete");
const detailRoute = require("./routes/detail");
const searchRoute = require("./routes/search");
const animeListRoute = require("./routes/animeList");
const episodeRoute = require("./routes/episode");
const genreRoute = require("./routes/genre");
const scheduleRoute = require("./routes/schedule");

const app = express();
app.use(cors());

app.get(["/", "/api"], (req, res) => {
  res.send("Otakudesu scraping by mojoWasTaken");
});

// router
app.use("/api/anime/home", homeRoute);
app.use("/api/anime/ongoing", ongoingRoute);
app.use("/api/anime/complete", completeRoute);
app.use("/api/anime/detail", detailRoute);
app.use("/api/anime/search", searchRoute);
app.use("/api/anime/list", animeListRoute);
app.use("/api/anime/episode", episodeRoute);
app.use("/api/anime/genres", genreRoute);
app.use("/api/anime/schedule", scheduleRoute);

module.exports = app;