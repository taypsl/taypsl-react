import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideEight= (props) => {
  let background = {
    backgroundImage: 'url(https://taylorparselldotcom.files.wordpress.com/2016/02/final.jpg?w=1760)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '1970 SCHWINN RESTORATION',
    hashtags: ['#bikes ', '#schwinn ', '#restoration ', '#diy ']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="https://taylorparsell.com/portfolio/schwinn-restoration/" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideEight;