import React, { Component } from 'react';
import './App.css';
import ComputerListContainer from './components/ComputerListContainer'
import { Provider } from 'react-redux'
import store from './store'
import CompDetailsContainer from './components/CompDetailsContainer';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
        <ComputerListContainer />
        <CompDetailsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
