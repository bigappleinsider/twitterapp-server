var Twitter = require('twitter');
require('dotenv').config()

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());


app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search', (req, res) => {
  client.get('search/tweets', {q: req.query.search || ''}, function(error, tweets, response) {
    if (!error) {
      res.send(tweets.statuses);
    }
    else{
      console.log(error);
    }
  });
});

app.listen(process.env.PORT || 5000, () => console.log('App listening on port 5000!'))


 
