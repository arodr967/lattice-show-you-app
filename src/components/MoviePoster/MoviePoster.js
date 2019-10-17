import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export default class MoviePoster extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ maxWidth: 345, margin: 16 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Captain Marvel"
            height="500"
            src="https://cdn.collider.com/wp-content/uploads/2019/01/captain-marvel-poster-brie-larson.jpg"
            title="Captain Marvel"
          />
        </CardActionArea>
      </Card>
    );
  }
}

// api-key: 2af40492d105b5c1dc33be95d778a3d7
// posterpath: https://image.tmdb.org/t/p/w500/