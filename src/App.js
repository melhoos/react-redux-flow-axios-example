//@ flow
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './assets/logo.svg';
import './styles/App.css';
import Counter from './components/counter';
import AddName from './components/addName';
import ListNames from './components/listNames';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <Counter/>
            <AddName/>
            <ListNames/>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
