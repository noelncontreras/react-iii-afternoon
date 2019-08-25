import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}
