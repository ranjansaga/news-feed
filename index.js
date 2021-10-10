import express  from 'express';
import fetch  from 'node-fetch';

//import routes from './routes/api';

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

// app.use((req, res, next) => {
//   res.send('Welcome to Express');
// });

//app.use('/api', routes);

app.get('/news', (req, res, next) => {
  const searchString = req.query.searchString ? req.query.searchString : 'bitcoin'
  fetch('https://newsapi.org/v2/everything?q='+ searchString + '&apiKey=119cf834e03c43538425e1f1a81db02a')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  })
});

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
