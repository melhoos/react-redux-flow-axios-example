//@ flow
import React, { Component } from 'react';
import {Provider} from 'react-redux';
//import logo from './assets/logo.svg';
import './styles/App.css';
//import FrontPage from './components/frontPage';
import Quiz from './components/quiz';
import StartQuiz from './components/startQuiz';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { faUserPlus, faPlus, faMinus, faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus, faPlus, faMinus, faTrashAlt, faSpinner)

class App extends Component {
  // <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Router>
              <div>
                <Route path="/home" component={StartQuiz}/>
                <Route path="/quizzles" component={Quiz}/>
              </div>
            </Router>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
