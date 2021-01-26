import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import GetSecret from './components/GetSecret'
import MakeSecret from './components/MakeSecret'
import ExplainerModal from './components/ExplainerModal';

import './App.css';

class App extends Component{

  state = {
    explainerModal: true
  }

  closeModal = () => {
    this.setState({explainerModal:false});
  }

  render() {
    return (
     <Router>
        {this.state.explainerModal? <ExplainerModal close={this.closeModal}/>: ''}

          <div>
            <nav>
              <ul>
                <li><NavLink activeStyle={{color:"black"}} className="link" to="/make">Make Secret</NavLink></li>
                <li><NavLink activeStyle={{color:"black"}} className="link" to="/get">Retrieve Secret</NavLink></li>
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
