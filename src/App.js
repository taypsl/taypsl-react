import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

// import Home from './views/Home';
import Landing from './views/Landing';
import About from './views/About';
import Contact from './views/Contact';
import Work from './views/Work';
import Misc from './views/Misc';
// import Portfolio from './views/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={ Landing } />
            <Route path='/about' component={ About } />
            <Route path='/work' component={ Work } />
            <Route path='/contact' component={ Contact } />
            <Route path='/misc' component={ Misc } />
{/*            <Route path='/portfolio' component={ Portfolio } />
*/}          </div>
        </Router>
      </div>
    );
  }
}
 
export default App;
