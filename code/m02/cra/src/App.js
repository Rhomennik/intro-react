import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppContent from './components/app-content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <AppContent />

        </header>
      </div>
    );
  }
}

export default App;
