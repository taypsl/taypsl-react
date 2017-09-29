import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideThirteen= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/v1503443051/2013_solyqc.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '2013',
    hashtags: ['#halloween ', '#hp ', '#magic ', '#levi-OH-sah ', '#notLevio-SAH ', '#bosswitch']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="http://68.media.tumblr.com/3315900ca03de389da523b27498c14ea/tumblr_inline_mhrroub9ha1qz4rgp.gif" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideThirteen;


//alternate link
// http://imgur.com/trmR7Cw