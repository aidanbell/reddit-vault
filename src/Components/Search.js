import React, { Component } from 'react';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: props.saved
    }
  }

  render() {
    return(
      <div>Search
      </div>

    )
  }
}

export default Search;