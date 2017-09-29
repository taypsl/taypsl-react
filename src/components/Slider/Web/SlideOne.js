import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideOne= (props) => {

  let background = {
    backgroundImage: 'url(https://taypsl.github.io/taypsl/images/wikihood.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'EXPLORE THE WIKIHOOD',
  	hashtags: ['#html ', '#css ', '#jquery ', '#ui ', '#wikipedia ', '#googlemaps ', '#api ']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to='https://github.com/taypsl/explore-the-wikihood' target='_blank'>
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideOne;