import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../App.css';
// import MenuLink from '../MenuLink'


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portfolio'
          >
            WEB
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portfolio'
          >
            UX
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portfolio'
          >
            PRINT
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portfolio'
          >
            BIKES
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/portfolio'
          >
            10/31
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Menu;



