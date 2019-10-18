import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: ''
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchCriteria: event.target.value });
  }

  render() {
    return (
      <div>
        <TextField
          style={{ width: 500 }}
          label="Search for your favorite movie"
          onChange={this.handleChange}
          value={this.state.searchCriteria}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            root: {
              '.MuiInputAdornment-root': {
                color: 'white'
              }
            }
          }}
        />
      </div>
    );
  }
}
