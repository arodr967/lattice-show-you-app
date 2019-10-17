import React from 'react';

export default class MoviePosterList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          margin: 20,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >{this.props.children}</div>
    );
  }
}
