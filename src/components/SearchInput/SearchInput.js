import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div >
        <FormControl style={{ color: 'white', width:500 }}>
          <InputLabel
            style={{ color: 'white' }}
            htmlFor="input-with-icon-adornment"
          >
            Search your favorite movies
          </InputLabel>
          <Input
            style={{ color: 'white' }}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            InputProps={{
              root: {
                '.MuiInput-underline': {
                  borderBottomColor: `white !important`
                }
              }
            }}
          />
        </FormControl>
      </div>
    );
  }
}
