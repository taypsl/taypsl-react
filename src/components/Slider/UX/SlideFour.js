import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideFour= (props) => {
  let background = {
    backgroundImage: 'url(https://taypsl.github.io/taypsl/images/driveproBanner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'MOBILE PRELICENSE APP',
  	hashtags: ['#ux ', '#ui ', '#mobile ', '#ios ', '#design']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="https://taylorparsell.com/portfolio/mobile-project-2/" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideFour;