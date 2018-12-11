//@ flow
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './styles/App.css';
import Questions from './components/questionnaires/questions';
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
          <header className="App-header">
            <Router>
              <div>
                <Route path="/" exact component={FrontPage}/>
                <Route path="/quizzles/:qsId" component={Questions}/>
                <Route path="/notFound" component={NotFound}/>
              </div>
            </Router>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
