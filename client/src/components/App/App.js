import React from 'react';
import './App.css';

import { SearchInput } from '../SearchInput';
import { MoviePosterList } from '../MoviePosterList';
import MoviePoster from '../MoviePoster/MoviePoster';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('/movies')
      .then(response => response.json())
      .then(response =>
        this.setState({ movies: response.data, isLoading: false })
      )
      .catch(err => {
        console.log('ERROR', err);
        this.setState({ movies: [], isLoading: false });
      });
  }

  displayMovies() {
    if (this.state.isLoading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CircularProgress style={{width: 200, height: 200}} />
      </div>
    );
    } else {
      return (
        <MoviePosterList>
          {this.state.movies.map(movie => (
            <MoviePoster
              title={movie.original_title}
              posterPath={movie.poster_path}
            />
          ))}
        </MoviePosterList>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <header>
              <h1>Lattice Show You</h1>
              <p>... the most popular movies this year!</p>
            </header>
            <SearchInput />
          </div>

          {this.displayMovies()}
        </div>
      </div>
    );
  }
}
