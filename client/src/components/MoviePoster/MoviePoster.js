import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export default class MoviePoster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const POSTER_PATH = 'https://image.tmdb.org/t/p/w500/';

    return (
      <Card style={{ maxWidth: 345, margin: 16 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={this.props.title}
            height="500"
            src={POSTER_PATH + this.props.posterPath}
            title={this.props.title}
          />
        </CardActionArea>
      </Card>
    );
  }
}
