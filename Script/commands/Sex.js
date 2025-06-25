module.exports.config = {
  'name': "sex",
  'version': "1.0.0",
  'hasPermssion': 0x2,
  'credits': "Sujon",
  'description': "SEX VIDEO",
  'commandCategory': "Hình ảnh",
  'usages': "sex vedio",
  'cooldowns': 0x5,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async ({
  api: _0x135591,
  event: _0x186f28,
  args: _0x150914,
  client: _0xfc64e,
  Users: _0x8a9dfe,
  Threads: _0x5acdae,
  __GLOBAL: _0x124c05,
  Currencies: _0x1efbea
}) => {
  const _0x478b02 = global.nodemodule.request;
  const _0x53f6e6 = global.nodemodule["fs-extra"];
  var _0x2df510 = ["--SEX VIDEO💦--"];
  var _0x5dc03d = _0x2df510[Math.floor(Math.random() * _0x2df510.length)];
  var _0x3a64ec = ["https://drive.google.com/uc?export=download&id=1Pd8APhxsgbkURN6TuLBQBdE3eJznk9rQ", "https://drive.google.com/uc?export=download&id=1fzRyfb_QXpF56yVngTKHmUoLhrHbWJ2H", "https://drive.google.com/uc?export=download&id=1lgM_36wTIxouAJdHEkK7vMJD8khevz6M", "https://drive.google.com/uc?export=download&id=1XN408WHoAs-ZU7i81Y06aUn6cPmRClcP", "https://drive.google.com/uc?export=download&id=1P_rmx7fwgj0U6LNuJhYMTdljnTKb1j3i", "https://drive.google.com/uc?export=download&id=1Bz16rhTtsgkSdzfNrS1vAAKqh_P_OBE6", "https://drive.google.com/uc?export=download&id=1KIz-SOxnELlC0JCsw-pfw9F-GNMOIgLZ", "https://drive.google.com/uc?export=download&id=1Kh2d_oi4fvHjfULVy6MhsJ_tVSWZQXQj",
"https://drive.google.com/uc?export=download&id=1iBxxOdMN5Unyt4u9AxuJ7XLfVZO-WIAV",
"https://drive.google.com/uc?export=download&id=1MRGUwKEDHi5b5Xd59DV7gUsuVYrsoBvI",
"https://drive.google.com/uc?export=download&id=1YhRy-TIm6oiXsYK9A2jrI_rXelseRh6w",
"https://drive.google.com/uc?export=download&id=121eGyvSiJSdUuOJxvv_6Q2BzKXQV5Cy1",
"https://drive.google.com/uc?export=download&id=1mBHGaOFWUbnL1X5stHXWztMOg8b30jWI",
"https://drive.google.com/uc?export=download&id=10TBjLzxZAGet74TuTqL4YdvjMHo_W_W8",
"https://drive.google.com/uc?export=download&id=1UcfDBU8V0YQXRh0IrZEBMiajEYWmxDXu",
"https://drive.google.com/uc?export=download&id=1UWDR5BB7gFNkRD8iygn1sfkOuQNFMGD_",
"https://drive.google.com/uc?export=download&id=1-Os3iLkLieP5ehToerUltjsmQkAnfc1R",
"https://drive.google.com/uc?export=download&id=1jJrT6oU3hNzBtR5DBIa5WaCjdZmATh7J",
"https://drive.google.com/uc?export=download&id=1sImhZSDhec66V4pueaD4r3R0owP5NBI4"];
  var _0x3cb620 = () => _0x135591.sendMessage({
    'body': "「 " + _0x5dc03d + " 」",
    'attachment': _0x53f6e6.createReadStream(__dirname + "/cache/15.mp4")
  }, _0x186f28.threadID, () => _0x53f6e6.unlinkSync(__dirname + "/cache/15.mp4"));
  return _0x478b02(encodeURI(_0x3a64ec[Math.floor(Math.random() * _0x3a64ec.length)])).pipe(_0x53f6e6.createWriteStream(__dirname + "/cache/15.mp4")).on("close", () => _0x3cb620());
};
