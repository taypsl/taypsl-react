import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideSix= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/v1503508610/2017SummerCamp_v2_Page_1_r1lqly.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'SAFG SUMMER CAMP FLYER',
  	hashtags: ['#print ', '#scientificadventuresforgirls ', '#design ', '#poster']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="http://res.cloudinary.com/ddvn6aemk/image/upload/v1503508610/2017SummerCamp_v2_Page_1_r1lqly.png" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideSix;