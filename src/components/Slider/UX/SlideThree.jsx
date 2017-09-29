import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideThree= (props) => {
  
  let background = {
    backgroundImage: 'url(https://taylorparselldotcom.files.wordpress.com/2015/12/perspective-sm.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'MOBILE APP REDESIGN',
  	hashtags: ['#ux ', '#ui ', '#mobile ', '#ios ', '#teens ', '#redesign ']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="https://taylorparsell.com/portfolio/mobile-project/" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideThree;