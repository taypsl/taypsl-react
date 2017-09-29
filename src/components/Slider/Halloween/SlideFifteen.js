import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideFifteen= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/c_crop,h_247,w_513,x_0,y_281/v1503443046/2011_fulqpb.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
  	title: '2011',
  	hashtags: ['#halloween ', '#whipit ', '#ellenpage ', '#2ndplace ', '#baberuthless ']
  }

  return (
  	<div className="slide">
	  	<div style={ background } className="slide"></div>
	  	<div className="slider-overlay"></div>
	  	<Link to="http://38.media.tumblr.com/e3999c76a98b1c11882f9c297f356641/tumblr_n680gi4usQ1roi2doo6_500.gif" target="_blank">
	  		<div className="slider-title">{ text.title }</div>
	  	</Link>
	  	<div className="slider-hashtags">{ text.hashtags }</div>
	</div>
  )
}

export default SlideFifteen;


//Alternate link
// https://www.youtube.com/watch?v=e_C5zsPmuXE