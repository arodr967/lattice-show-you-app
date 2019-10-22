import React from 'react';

import { MoviePosterList } from '../MoviePosterList';
import { MoviePoster } from '../MoviePoster';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class MovieDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {},
      genres: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.getMovieDetails(params.movieId);
  }

  getMovieDetails(movieId) {
    fetch(`/movie?id=${movieId}`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({ movieDetails: { ...response.data }, isLoading: false });
      })
      .catch(err => {
        console.log('ERROR', err);
        this.setState({ movieDetails: null, isLoading: false });
      });
  }

  displayDetails() {
    const movieDetails = this.state.movieDetails;
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
        <div>
          <div>
            <header>
              <h1>{movieDetails.original_title}</h1>
              <h3 style={{ marginTop: 'inherit', fontStyle: 'italic' }}>
                {movieDetails.tagline}
              </h3>
              <p>{movieDetails.overview}</p>
            </header>
          </div>
          <MoviePosterList>
            <MoviePoster
              title={movieDetails.original_title}
              posterPath={movieDetails.poster_path}
            />
          </MoviePosterList>
        </div>
      );
    }
  }

  render() {
    return <div>{this.displayDetails()}</div>;
  }
}
