import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideTwelve= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/v1503443062/2014_babqye.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '2014',
    hashtags: ['#halloween ', '#april ', '#andy ', '#parksandrec ', '#knope2020 ']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="https://www.youtube.com/watch?v=LrkwAJWDp5E" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideTwelve;