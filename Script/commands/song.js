const axios = require("axios");
const fs = require("fs");
const path = require("path");
const yts = require("yt-search");

const baseApiUrl = async () => {
  const base = await axios.get(
    "https://raw.githubusercontent.com/Savage-Army/extras/refs/heads/main/api.json"
  );
  return base.data.api;
};

module.exports.config = {
  name: "song",
  version: "3.0.0",
  aliases: ["music", "play"],
  credits: "Sadman",
  countDown: 5,
  hasPermssion: 0,
  description: "Download audio from YouTube",
  commandCategory: "media",
  usages: "{pn} [song name]"
};

module.exports.run = async ({ api, args, event }) => {
  const query = args.join(" ");
  if (!query) {
    return api.sendMessage("❌ Please enter a song name", event.threadID);
  }

  try {
    const search = await yts(query);
    const videos = search.videos.slice(0, 6);

    if (!videos.length) {
      return api.sendMessage("⭕ No results found", event.threadID);
    }

    let msg = "";
    let thumbnails = [];

    let i = 1;
    for (let v of videos) {
      msg += `${i++}. ${v.title}\nTime: ${v.timestamp}\nChannel: ${v.author.name}\n\n`;
      thumbnails.push(diptoSt(v.thumbnail, `thumb${i}.jpg`));
    }

    api.sendMessage({
      body: msg + "Reply with a number (1-6)",
      attachment: await Promise.all(thumbnails)
    }, event.threadID, (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID,
        videos
      });
    });

  } catch (e) {
    return api.sendMessage("❌ Error: " + e.message, event.threadID);
  }
};

module.exports.handleReply = async ({ event, api, handleReply }) => {
  try {
    const choice = parseInt(event.body);
    const videos = handleReply.videos;

    if (isNaN(choice) || choice < 1 || choice > videos.length) {
      return api.sendMessage("❌ Invalid choice (1-6)", event.threadID);
    }

    const selected = videos[choice - 1];
    const apibase = await baseApiUrl();

    const apiUrl = `${apibase}/sing?url=${encodeURIComponent(selected.url)}`;
    const res = await axios.get(apiUrl);

    const audioUrl = res.data.download_url;
    const title = selected.title;

    const filePath = path.join(__dirname, "audio.mp3");

    const audio = await axios({
      url: audioUrl,
      method: "GET",
      responseType: "arraybuffer"
    });

    fs.writeFileSync(filePath, audio.data);

    await api.unsendMessage(handleReply.messageID);

    api.sendMessage({
      body: `🎵 ${title}`,
      attachment: fs.createReadStream(filePath)
    }, event.threadID, () => fs.unlinkSync(filePath));

  } catch (err) {
    console.log(err);
    api.sendMessage("❌ Failed to fetch audio", event.threadID);
  }
};

async function diptoSt(url, pathName) {
  const res = await axios({
    url,
    method: "GET",
    responseType: "stream"
  });
  res.data.path = pathName;
  return res.data;
}
