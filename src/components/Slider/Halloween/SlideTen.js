import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideTen= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/v1503443050/2016_k1zpul.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '2016',
    hashtags: ['#halloween ', '#eleven ', '#hopper ', '#strangerthings ', '#mouthbreathersbeware ']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="https://giant.gfycat.com/FlusteredBlackAmericanbadger.gif" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideTen;