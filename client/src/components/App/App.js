import React from 'react';
import './App.css';


import { SearchInput } from '../SearchInput';
import { MoviePosterList } from '../MoviePosterList';
import MoviePoster from '../MoviePoster/MoviePoster';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1>Lattice Show You</h1>
          <p>... the most popular movies this year!</p>
        </header>
        <SearchInput/>
        <MoviePosterList>
          <MoviePoster/>
        </MoviePosterList>
      </div>
    </div>
  );
}

export default App;
