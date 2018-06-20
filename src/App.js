import React, { Component } from 'react';
import Header from './components/Header';
import Greeting from './components/Greeting';
import TasksStatusContainer from './containers/TasksStatusContainer';
import TasksListContainer from './containers/TasksListContainer';
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
        <div className='App-container'>
          <TasksStatusContainer />
          <TasksListContainer />
        </div>
      </div>
    );
  }
}

export default App;
