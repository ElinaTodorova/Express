const express = require('express');

const app = express();

// const port = 5000;

const movies = [

    {
  
      id: 1,
  
      title: "Citizen Kane",
  
      director: "Orson Wells",
  
      year: "1941",
  
      color: false,
  
      duration: 120,
  
    },
  
    {
  
      id: 2,
  
      title: "The Godfather",
  
      director: "Francis Ford Coppola",
  
      year: "1972",
  
      color: true,
  
      duration: 180,
  
    },
  
    {
  
      id: 3,
  
      title: "Pulp Fiction",
  
      director: "Quentin Tarantino",
  
      year: "1994",
  
      color: true,
  
      duration: 180,
  
    },
  
  ];

  const welcome = (req, res) => {
    res.send('Welcome to my favourite movie list')
  };

  const getMovies = (req, res) => {
    res.status(200).json(movies)
  };

  const getMovieWithId = (req, res) => {
    let idMovie = Number(req.params.id);
    
    let foundMovie = movies.find(movie => Number(movie.id) === idMovie);
    
    if(foundMovie) {
        res.status(200).json(foundMovie);
    }else {
        res.status(404).send('Not Found');
    }
  }

  app.get('/', welcome);

  app.get('/api/movies', getMovies);

  app.get('/api/movies/:id', getMovieWithId);

  module.exports = app;