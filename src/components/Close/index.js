import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import close from '../../img/close_1.svg';

class Close extends Component {
  render() {
    return (
      <div className="Close">
        <Link to='/'>
          <img src={close} className="close-icn" alt="close" />
        </Link>
      </div>
    );
  }
}

export default Close;
