const puppeteer = require('puppeteer');

function capitalize(str){
  str= str.replace("_" , " ");
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase()
     + txt.substr(1).toLowerCase();
   });
}

function scrapWeather(city, res){
  if(city.includes(",")){
    var temp=city;
    temp= temp.split(",")[0];
    city= temp;
  }
  city=capitalize(city);
  let scrape = async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://www.google.co.il/search?q=weather+'+city);
  await page.waitFor(1000);
  const result = await page.evaluate((city) => {
    if(document.querySelector('#wob_tm')== null){
        return {"error": true};
      }
      let temparture = document.querySelector('#wob_tm').innerText;
      let humidity = document.querySelector('#wob_hm').innerText;
      let wind = document.querySelector('#wob_ws').innerText.trim().split(" ")[0];
      let imgUrl = document.querySelector('#wob_tci').src;

      return {
      "error":false,
      "city": city,
      "temp":temparture,
      "humidity": humidity,
      "wind": wind,
      "img": imgUrl
      }

  }, city);

  browser.close();
  return result;
  };

  scrape().then((value) => {
  if(value.city){
    value.city= capitalize(value.city);
  }
  res.send(value);
  });
}


module.exports= scrapWeather;
