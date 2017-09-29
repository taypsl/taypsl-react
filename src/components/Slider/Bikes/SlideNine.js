import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideNine= (props) => {
  let background = {
    backgroundImage: 'url(https://apilgriminnarnia.files.wordpress.com/2016/10/stranger-things-bikes.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: 'THRIFTED RETRO-FIT',
    hashtags: ['#bikes ', '#thrift ', '#strangerthings ', '#sissybar ', '#bananaseat ']
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

export default SlideNine;