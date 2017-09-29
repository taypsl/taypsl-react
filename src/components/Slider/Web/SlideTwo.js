import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideTwo= (props) => {

  let background = {
    backgroundImage: 'url(https://taypsl.github.io/taypsl/images/mxlist.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: 'MX LIST',
  	hashtags: ['#html ', '#css ', '#node ', '#express ', '#bootstrap ', '#passport ', '#crud ', '#mongoDB ', '#ejs ']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to='https://github.com/taypsl/mx-list' target='_blank'>
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideTwo;