import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Navi from './components/Nav/index';
import './App.css';
import img from '../public/images/Background-Image.jpg';

class App extends Component {
  render() {
    return(
      <Navi />
    );
  }
}

export default hot(module)(App);