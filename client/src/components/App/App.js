import React from 'react';
import './App.css';

import { SearchInput } from '../SearchInput';
import { MoviePosterList } from '../MoviePosterList';
import {MoviePoster} from '../MoviePoster';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieDetailsPage } from '../MovieDetailsPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
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
          <CircularProgress style={{ width: 200, height: 200 }} />
        </div>
      );
    } else {
      return (
        <MoviePosterList>
          {this.state.movies.map(movie => (
            <Link to={`/${movie.id}`}>
              <MoviePoster
                title={movie.original_title}
                posterPath={movie.poster_path}
              />
            </Link>
          ))}
        </MoviePosterList>
      );
    }
  }

  searchMovies = searchCriteria => {
    this.setState({ isLoading: true });
    if (searchCriteria) {
      fetch(`/search/movie?searchCriteria=${searchCriteria}`)
        .then(response => response.json())
        .then(response =>
          this.setState({ movies: response.data, isLoading: false })
        )
        .catch(err => {
          console.log('ERROR', err);
          this.setState({ movies: [], isLoading: false });
        });
    } else {
      this.getMovies();
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/:movieId" component={MovieDetailsPage}></Route>
            <Route path="/">
              <div>
                <div>
                  <header>
                    <h1>Lattice Show You</h1>
                    <p>... the most popular movies this year!</p>
                  </header>
                  <SearchInput onSearch={this.searchMovies} />
                </div>

                {this.displayMovies()}
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
