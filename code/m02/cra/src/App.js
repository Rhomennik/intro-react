import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {

  constructor() {
    super()
    this.state = {
      apostado: [],
      partido: [],
      Nacional: []
    }
  }

  getEquipo (equipo) {
    return (e) => {
      console.log(equipo)
      ajax().get(`http://localhost:3001/partidos/apuesta/${equipo}`)
      .then((result) => {
        this.setState({
          [equipo]: result.map((repo) => {
            return {
              nombre: repo.nombre
            }
          })
        })
      })

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

        <AppContent
        {...this.state}
        bangu1={this.getEquipo('Nacional')}
        caxias2={this.getEquipo('Palmeiras')}
        />
        </header>
      </div>
    );
  }
}

export default App;
