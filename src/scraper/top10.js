import axios from "axios";
import cheerio from "cheerio";

export async function scrapeTop10() {
  const url = "https://samehadaku.how/";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const result = [];

  $(".widget_senction .widget-post .widgetseries ul li").each((i, el) => {
    const parent = $(el).find("a.series");

    const title = parent.find(".judul").text().trim();
    const rating = parent.find(".rating").text().trim();
    const image = parent.find("img").attr("src");
    const url = parent.attr("href");
    const rank = parent.find(".is-topten b").eq(1).text().trim();

    result.push({
      rank: Number(rank),
      title,
      rating,
      image,
      url
    });
  });

  return result;
}