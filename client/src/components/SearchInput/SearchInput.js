import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export default class SearchInput extends React.Component {

  handleChange = (event) => {
    event.preventDefault();
    const search = event.target.value;
    this.setState({ search });
    this.props.onSearch(search);
  }

  render() {
    return (
      <div>
        <TextField
          style={{ width: 500 }}
          label="Search for your favorite movie"
          onChange={this.handleChange}
          value={this.props.search}
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
