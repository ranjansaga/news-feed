import express from 'express';
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config()
const myAPIKey = process.env.API_KEY;
console.log('myAPIKey', process.env, myAPIKey);
const app = express();

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/news', (req, res, next) => {
  const pageSize = req.query.pageSize;
  const page = req.query.page;
  const searchString = req.query.searchString ? req.query.searchString : '';
  const url =
    'https://newsapi.org/v2/top-headlines?country=gb' +
    `&pageSize=${pageSize}&page=${page}&q=${searchString}&apiKey=${myAPIKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // const data = {
  //   status: 'ok',
  //   totalResults: 9712,

  //   articles: [
  //     {
  //       source: {
  //         id: 'engadget',
  //         name: 'Engadget',
  //       },
  //       author: 'Jon Fingas',
  //       title: 'AMC theaters will accept cryptocurrencies beyond Bitcoin',
  //       description:
  //         "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bitcoin Cash when crypto payments are available. He didn't hav…",
  //       url:
  //         'https://www.engadget.com/amc-theaters-accept-ethereum-litecoin-bitcoin-cash-132642183.html',
  //       urlToImage:
  //         'https://s.yimg.com/os/creatr-uploaded-images/2021-09/4a01cb80-16eb-11ec-abfe-c7b840dd48ca',
  //       publishedAt: '2021-09-16T13:26:42Z',
  //       content:
  //         "You won't have to stick to Bitcoin if you're determined to pay for your movie ticket with cryptocurrency. AMC chief Adam Aron has revealed his theater chain will also accept Ethereum, Litecoin and Bi… [+1198 chars]",
  //     },
  //     {
  //       source: {
  //         id: 'engadget',
  //         name: 'Engadget',
  //       },
  //       author: 'Karissa Bell',
  //       title: 'Twitter will let users send and receive Bitcoin tips',
  //       description:
  //         'Four months after Twitter first introduced in-app tipping, the company is expanding its “tip jar” feature in a major way. The company is opening up tipping to all its users globally, and for the first time will allow some users to send and receive tips in Bit…',
  //       url:
  //         'https://www.engadget.com/twitter-opens-tipping-in-bitcoin-170017891.html',
  //       urlToImage:
  //         'https://s.yimg.com/os/creatr-uploaded-images/2021-09/28751be0-1c8e-11ec-9ffb-353ffababd7e',
  //       publishedAt: '2021-09-23T17:00:17Z',
  //       content:
  //         'Four months after Twitter first introduced in-app tipping, the company is expanding its tip jar feature in a major way. The company is opening up tipping to all its users globally, and for the first … [+2390 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: 'Blogspot.com',
  //       },
  //       author: 'noreply@blogger.com (Unknown)',
  //       title: 'Bitcoin hits strongest level since May',
  //       description:
  //         '<ul><li>Bitcoin, in terms of market value, rose 4.6% to $53,859.6.</li><li>It passed $50,000 mark for first time in four weeks on Tuesday. </li><li>Bitcoin fell below $50,000 in early September.</li></ul>Bitcoin hit its highest level since mid-May on Wednesda…',
  //       url:
  //         'https://techncruncher.blogspot.com/2021/10/bitcoin-hits-strongest-level-since-may.html',
  //       urlToImage:
  //         'https://blogger.googleusercontent.com/img/a/AVvXsEhiFZua2TKlWOHoZ5qipQ8zBVpSMbXNdxOFJmwNkddvji4GqJRO4SonCCmwV_IBrxtHCb2UlJ850RuZPY75s54QZkedzrYthaQqoo4tuOD3zUbMhTGxJ2T-rFtSu8I1vRJY9RtH8dWw7_5XtGfoeUvJuAWZU-U9XLsHKTKffBSWD6G9su34rjkO0sYD-w=w1200-h630-p-k-no-nu',
  //       publishedAt: '2021-10-06T17:17:00Z',
  //       content:
  //         '<ul><li>Bitcoin, in terms of market value, rose 4.6% to $53,859.6.</li><li>It passed $50,000 mark for first time in four weeks on Tuesday. </li><li>Bitcoin fell below $50,000 in early September.</li>… [+821 chars]',
  //     },
  //     {
  //       source: {
  //         id: 'engadget',
  //         name: 'Engadget',
  //       },
  //       author: 'Andrew Tarantola',
  //       title:
  //         "Hitting the Books: How Bitcoin is somehow worth more than the paper it's printed on",
  //       description:
  //         'Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn of the century. Unlike gold, which derives its value from bo…',
  //       url:
  //         'https://www.engadget.com/hitting-the-books-the-future-of-money-eswar-prasad-harvard-university-press-153024975.html',
  //       urlToImage:
  //         'https://s.yimg.com/os/creatr-uploaded-images/2021-09/5ea7d740-17ff-11ec-9ffd-ff33ac942d83',
  //       publishedAt: '2021-09-25T15:30:24Z',
  //       content:
  //         'Bitcoin and similar blockchain-based cryptos exhibit the same radical divergence from traditional scarcity economics that we first saw when MP3s and Napster cratered physical album sales at the turn … [+8436 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: 'Blogspot.com',
  //       },
  //       author: 'noreply@blogger.com (Unknown)',
  //       title:
  //         'JPMorgan CEO Says Bitcoin Has No Intrinsic Value After Claiming That Its Price Could Rise 10X',
  //       description:
  //         'JPMorgan CEO Jamie Dimon is still not a Bitcoin fan despite rapid price appreciation   from U.Today https://ift.tt/3iyi5nR https://ift.tt/eA...',
  //       url:
  //         'https://techncruncher.blogspot.com/2021/10/jpmorgan-ceo-says-bitcoin-has-no.html',
  //       urlToImage: null,
  //       publishedAt: '2021-10-04T19:49:00Z',
  //       content:
  //         'JPMorgan CEO Jamie Dimon is still not a Bitcoin fan despite rapid price appreciationfrom U.Today https://ift.tt/3iyi5nR https://ift.tt/eA8V8J',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: 'Blogspot.com',
  //       },
  //       author: 'noreply@blogger.com (Unknown)',
  //       title: 'BTC, DOGE, and SHIBA Price Analysis for October 6',
  //       description:
  //         'How high are the chances of Bitcoin sustaining its gains and pushing altcoins higher?   from U.Today https://ift.tt/3BkD5px https://ift.tt/e...',
  //       url:
  //         'https://techncruncher.blogspot.com/2021/10/btc-doge-and-shiba-price-analysis-for.html',
  //       urlToImage: null,
  //       publishedAt: '2021-10-06T19:49:00Z',
  //       content:
  //         'How high are the chances of Bitcoin sustaining its gains and pushing altcoins higher?from U.Today https://ift.tt/3BkD5px https://ift.tt/eA8V8J',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: 'Blogspot.com',
  //       },
  //       author: 'noreply@blogger.com (Unknown)',
  //       title: 'Who Bought $1.6B in Bitcoin Wednesday, and Why?',
  //       description:
  //         'last week the cryptocurrency market persistently asked the gnawing and annoying question, “Why?”\r\nSpecifically, why did someone make a massive purchase of $1.6 billion worth of bitcoin on Wednesday in a couple of minutes?\r\nWhile many see this huge buy as a si…',
  //       url:
  //         'https://techncruncher.blogspot.com/2021/10/who-bought-16b-in-bitcoin-wednesday-and.html',
  //       urlToImage:
  //         'https://blogger.googleusercontent.com/img/a/AVvXsEhsl_C2ZYUVeK-jmFi6Uqp_jp_ZkAFVcEXJD30f7HZvv6DGdmfboiV_UzjK5tbXge19JF93vpfwuN3KmtOaP-sfElPl1iTri7dE13Qn-epBs9qE93eEWjlP3lgWTuCsg_TxslHIoO1Dt61iSIYwmSVCJi4L-ap81CxS0pHD6eYqqClD11QGr_dfpPzQ6w=w1200-h630-p-k-no-nu',
  //       publishedAt: '2021-10-10T20:12:00Z',
  //       content:
  //         'Specifically, why did someone make a massive purchase of $1.6 billion worth of bitcoin on Wednesday in a couple of minutes?\r\nWhile many see this huge buy as a signal of bullishness, there may be more… [+8443 chars]',
  //     },
  //     {
  //       source: {
  //         id: null,
  //         name: 'Blogspot.com',
  //       },
  //       author: 'noreply@blogger.com (Unknown)',
  //       title: 'Why have Elon Musk and Tesla suddenly turned against bitcoin?',
  //       description:
  //         'Elon Musk has performed a sudden U-turn on bitcoin over concerns about its energy usage, and says his electric car firm Tesla will no longer accept the cryptocurrency as payment – but will his decision have an impact, and could Tesla turn to an alternative cu…',
  //       url:
  //         'https://techncruncher.blogspot.com/2021/09/why-have-elon-musk-and-tesla-suddenly.html',
  //       urlToImage:
  //         'https://blogger.googleusercontent.com/img/a/AVvXsEh20SgNNsDlKyWWmB7XgB5SfFY10M6CqJAq93HwGtssTn2cWz6w9zHPjXf91WwoWr27QeaC4HsGv2NxPOXUdvk6xodUojnw8rUuAkEMY3Qb4ucoVpN3nSyF8JW_xVDWa2aSMEWH387hPsfouSJyClLNburIcDbXIeJamuTHwiSvw4hdNnqeeICcvg1wrQ=w1200-h630-p-k-no-nu',
  //       publishedAt: '2021-09-28T20:03:00Z',
  //       content:
  //         'Elon Musk has performed a sudden U-turn on bitcoin over concerns about its energy usage, and says his electric car firm Tesla will no longer accept the cryptocurrency as payment – but will his decisi… [+3069 chars]',
  //     },
  //   ],
  // };
  // res.json({status: 400});
});

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
