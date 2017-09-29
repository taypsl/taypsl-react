import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Link
} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Portfolio from './views/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Route path='/portfolio' component={ Portfolio } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
