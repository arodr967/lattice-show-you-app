import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/movies');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div>
        <FormControl style={{ color: 'white', width: 500 }}>
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
