import express from "express";
import { scrapeTop10 } from "./scraper/top10.js";

const app = express();

app.get("/top10", async (re, res) => {
  try {
    const data = await scrapeTop10();
    res.json(data);
  } catch (err) {
    res.status(500).json({ eror: "gagal scraping!" });
  }
});

app.listen(3000, () => {
  console.log("server berjalan di port 3000");
});