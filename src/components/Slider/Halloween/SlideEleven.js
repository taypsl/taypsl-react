import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideEleven= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/c_crop,h_1183,w_1536,x_0,y_0/v1503443055/2015_haapnt.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '2015',
    hashtags: ['#halloween ', '#wednesday ', '#beafraid ', '#snapsnap ']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="https://www.youtube.com/watch?v=buZZyUBwymA" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideEleven;