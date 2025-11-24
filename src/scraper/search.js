const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeSearch(query) {
  const url = `https://otakudesu.best/?s=${query}`;
  
  const data = await axios.get(url, {
    headers: { "User-Agent": "Mozila/5.0" }
  });
  
  const $ = cheerio.load(data);
  const result = [];
  
  console.log("Jumlah li:", $(".chivsrc li").length);
  
  $(".chivsrc li").each((i, el) => {
    const thumbnail = $(el).find("img").attr("src") || null;
    const title = $(el).find("h2 a").text().trim();
    const link = $(el).find("h2 a").attr("href") || null;
    
    
    let slug = null;
    if (link && link.includes("/anime/")) {
      slug = link.split("/anime/")[1].replace("/", "");
    }
    
    const genres = [];
    $(el).find(".set a").each((i2, g) => {
      genres.push($(g).text().trim());
    });
    
    result.push({
      title,
      slug,
      link,
      thumbnail,
      genres
    });
  });
  
  return result;
  
}

module.exports = { scrapeSearch };