//@ flow
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './styles/App.css';
import FrontPage from './components/frontPage';
import NotFound from './components/notFound';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { faUserPlus, faPlus, faMinus, faTrashAlt, faSpinner, faSadTear, faHandPointLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faUserPlus, faPlus, faMinus, faTrashAlt, faSpinner, faSadTear, faHandPointLeft)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header"></header>
          <Router>
            <div>
              <Route path="/" exact component={FrontPage}/>
              <Route path="/notFound" component={NotFound}/>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
