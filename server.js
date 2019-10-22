const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

const API_KEY = '2af40492d105b5c1dc33be95d778a3d7';

app.listen(port, () => console.log(`Listening on port ${port}`));

// Get Popular Movies
app.get('/movies', (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(resp => {
      res.send({ data: resp.data.results });
    })
    .catch(err => {
      console.log(err);
    });
});

// Search for movies
app.get('/search/movie', (req, res) => {
  const searchCriteria = req.query.searchCriteria;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchCriteria}&page=1`
    )
    .then(resp => {
      res.send({ data: resp.data.results });
    })
    .catch(err => {
      console.log(err);
    });
});

// Get movie details
app.get('/movie', (req, res) => {
  const id = req.query.id;
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    )
    .then(resp => {
      res.send({ data: resp.data });
    })
    .catch(err => {
      console.log(err);
    });
});
