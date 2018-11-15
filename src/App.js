//@ flow
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import logo from './assets/logo.svg';
import './styles/App.css';
import Counter from './components/counter';
import AddName from './components/addName';
import ListNames from './components/listNames';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faUserPlus, faPlus, faMinus)


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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
