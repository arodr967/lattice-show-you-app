import React from 'react';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const tileData = [
  {
    img: '../public/logo192.png',
    title: 'Image1',
    author: 'author1',
    featured: true
  },
  {
    img: '../public/logo192.png',
    title: 'Image2',
    author: 'author2',
    featured: true
  }
];

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <h1>Lattice Show You</h1>
          <p>... the most popular movies this year!</p>
        </header>
        <div className="grid-container">
          <GridList cellHeight={200} spacing={1} className="grid-list">
            {tileData.map(tile => (
              <GridListTile
                key={tile.img}
                cols={tile.featured ? 2 : 1}
                rows={tile.featured ? 2 : 1}
              > 
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${tile.title}`}
                      className="icon"
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                  className="title-bar"
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  );
}

export default App;
