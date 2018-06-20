import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          headerTitle='TodoTaskSimple'
        >
          <Greeting />
        </Header>

      </div>
    );
  }
}

export default App;
