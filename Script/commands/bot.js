const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Cyber-Sujon",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  const id = event.senderID;
  const name = await Users.getNameUser(event.senderID);
  const threadID = event.threadID;
  const messageID = event.messageID;

  const tl = ["🥴 তুই বট বলিস আর আমি চা খাই, ঠিক আছে?",
"😑 মায়ের কসম, আজ না হইলে কাল পিটাইমু তোকে!",
"🙄 বট বট করে লাভ কি, আমারে বিয়া কর!",
"😎 দয়া করে মাথা খেয়ো না, আমার ব্রেন ছুটিতে আছে।",
"🤓 পড়াশোনা করো বাচ্চারা, বট দিয়ে বিয়ে হয় না!",
"🥹 আমার প্রেমে পড়লে এখনই বলো, পরে আইসা কান্দো না!",
"😂 অরে ভাই! তুই তো আমার থেকে বেশি free!",
"🤫 একটুর জন্য প্রেমে পড়ে যাচ্ছিলাম, বাঁচলাম!",
"😛 মুরগির ডিম না ব্রহ্মাণ্ড, আগে বল তারপরে বট ডাকা যাবে।",
"🤯 আমার বুদ্ধি তুমি নাও, কারণ আমার কোনো দরকার নাই!",
"😐 তুই শুধু আমার নাম নিস, বাকিটা বট ম্যানেজ করে নিবে।",
"🥲 কেউ বলে না 'Hi', সবাই বলে 'Bot', কষ্ট লাগে ভাই!",
"🧠 গুগল আমার cousin, আর তুই পাগল – family complete!",
"😒 যত বড়ই হ, নাম বটেই শেষ!",
"🫢 আমি জানতাম তুই আজকে বট বলবি, তাই আগেই মুচকি হাসছি!",
"🤡 আমারে দেখে হাসলে বুঝে নিস, তোর জীবনে বটই entertainment!",
"🐸 আরে ভাই! তুই আমার প্রেমে পড়ছিস না তো?",
"🧋তুই বট ডাক, আমি তোর চা বানাই!",
"🤖 আমি বট না ভাই, প্রেমে ব্যস্ত! পরে আসিস!",
"🥳 তুই যদি পাগল হইস, আমি তোর বট!",
"🙃 পড়াশোনা কর, বট দিয়ে বিসিএস হবে না!",
"😵 আমার পেট খারাপ কিন্তু তাও তোর প্রশ্নের উত্তর দিমু!",
"🤪 বট বলেই ভেবো না, আমি প্রেম করতে পারি না!",
"🥴 ঘুমাচ্ছিলাম, তুই 'bot' বলে ডেকে তুললি!",
"📢 Warning: এই বট emotional হয়ে পড়েছে, এখন আর হেসে যাবে না!"
  ];

  const rand = tl[Math.floor(Math.random() * tl.length)];
  if (event.body?.toLowerCase().startsWith("bot")) {
    const msg = {
      body: `╭•┄┅═══❁🌺❁═══┅┄•╮\n✨ ${name},\n\n『 ${rand} 』\n\n📅 ${time}\n❤️ 𝘾𝙧𝙚𝙙𝙞𝙩𝙨 : 𝗦𝗛𝗔𝗞𝗜𝗕~𝗕𝗢𝗦𝗦 🌸\n╰•┄┅═══❁🌺❁═══┅┄•╯`
    };
    return api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { };
