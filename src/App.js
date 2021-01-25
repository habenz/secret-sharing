import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import GetSecret from './components/GetSecret'
import MakeSecret from './components/MakeSecret'

import './App.css';

class App extends Component{

  render() {
    return (
     <Router>
          <div>
            <nav>
              <ul>
                <li><Link className="link" to="/">Make Secret</Link></li>
                <li><Link className="link" to="/get">Retrieve Secret</Link></li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/get">
                <GetSecret />
              </Route>
              <Route path="/">
                <MakeSecret />
              </Route>
            </Switch>
          </div>
        </Router>
    )   
  }
}

export default App;
