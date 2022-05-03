import axios from "axios";
import Parser from "rss-parser";

const CORS_PROXY = "https://cors.io/?";

const axiosClient = axios.create({
  baseURL: `https://itunes.apple.com/`,
});

export const getPodcasts = async () => {
  let podcasts = [];
  try {
    const { data } = await axiosClient.get(
      "/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    data.feed.entry.forEach((p) => {
      podcasts.push({
        id: p.id.attributes["im:id"],
        img: p["im:image"][2].label,
        title: p["im:name"].label,
        author: p["im:artist"].label,
      });
    });
  } catch (err) {
    console.log(err);
  }
  return podcasts;
};

export const getPodcast = async (id) => {
  const parser = new Parser();
  let podcast = {};

  try {
    const { data } = await axiosClient.get(`/lookup?id=${id}`);
    const d = data.results[0];
    const feed = await parser.parseURL(`${d.feedUrl}`);
    let episodes = [];

    feed?.items?.forEach((e) => {
      episodes.push({
        id: e.guid,
        title: e.title,
        date: e.pubDate,
        duration: e.itunes.duration,
        content: e.content,
        url: e.enclosure.url,
      });
    });

    podcast = {
      id: d.trackId,
      image: d.artworkUrl600,
      name: d.trackName,
      url: d.feedUrl,
      artist: d.artistName,
      description: feed.description,
      episodes: episodes,
    };
  } catch (err) {
    console.log(err);
  }
  return podcast;
};
