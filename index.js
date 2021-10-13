import express from 'express';
import fetch from 'node-fetch';
import dotenv from "dotenv";

dotenv.config()
const myAPIKey = process.env.API_KEY;
console.log('myAPIKey', process.env, myAPIKey);
const app = express();

const port = process.env.PORT || 5000;

// This is added for development purposes.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Api to get the latest news. The following are the query params used.
// pageSize     : No of news items to be fetched.
// page         : The page from which news items are to be fetched.
// searchString : The search keyword based on which we filter the news items.
// apiKey       : API key fro newsapi.org.

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
});

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
