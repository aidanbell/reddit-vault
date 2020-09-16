import React, { Component } from 'react';

import './App.css';

import Search from './Components/Search'

import { getSaved } from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      saved: getSaved()
    }
  }
  

  show() {
    return (
      <h1>hello logged in user</h1>
    )
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.show()}
        <Search saved={this.state.saved} />
        {this.state.saved.map((s) => (
          <a href={s.href}><p>{s.title}</p></a>
        ))}
      </div>
    );
  }
}

export default App;
