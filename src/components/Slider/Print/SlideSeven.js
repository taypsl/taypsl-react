import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideSeven= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1124/v1503508898/safg_EDP_Page_09_h9rtm1.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'SAFG ENGINEERING DESIGN POSTER',
  	hashtags: ['#print ', '#scientificadventuresforgirls ', '#design ', '#edp ', '#poster']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_1124/v1503508898/safg_EDP_Page_09_h9rtm1.png" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideSeven;