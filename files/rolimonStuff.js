//bro i got no idea what im doing
//-hardware
// "https://www.rolimons.com/player/987931586"

var url = "https://www.rolimons.com/player/987931586";
const axios = require('axios').default;
const cheerio = require('cheerio');


async function rolimonRequest(){
  try {
    const res = await axios.get(url);
    if (res.status !== 200) {
      console.error("Bad Request, issue:", res.statusText);
    }
    const html = cheerio.load(res.data);
    console.log(html.root().children()[0].lastChild.tagName);
  } catch (error) {
    console.error("Axios error", error);
  }
}

module.exports = {rolimonRequest};

