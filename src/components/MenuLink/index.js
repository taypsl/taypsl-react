import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../css/Portfolio.css';

const MenuLink = (props) => {

  return (
    <div >
      <div 
      	className={"Menu-links " + (props.slideCount >= props.countStart && props.slideCount <= props.countEnd ? 'pink' : ' ')}
      	onClick={props.slideFunction} >
        <div className="Menu-link">
        	{props.title}
        </div>
      </div>
    </div>
  );
}


export default MenuLink;
