import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideFive= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_2322/v1503505157/dad_retirement-08_dpt8wi.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'CAREER BLUEPRINT',
  	hashtags: ['#print ', '#ai ', '#retirement ', '#poster ' ]
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="http://res.cloudinary.com/ddvn6aemk/image/upload/c_scale,w_2322/v1503505157/dad_retirement-08_dpt8wi.png" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideFive;