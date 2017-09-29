import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SlideFourteen= (props) => {
  let background = {
    backgroundImage: 'url(http://res.cloudinary.com/ddvn6aemk/image/upload/c_crop,h_354,w_596,x_0,y_98/v1503443046/2012_lw2lvb.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  let text = {
    title: '2012',
    hashtags: ['#halloween ', '#up ', '#wildernessexplorer ', '#friendtoall ', '#russell ']
  }

  return (
    <div className="slide">
      <div style={ background } className="slide"></div>
      <div className="slider-overlay"></div>
      <Link to="https://www.youtube.com/watch?v=WeCAT38Y0tg" target="_blank">
        <div className="slider-title">{ text.title }</div>
      </Link>
      <div className="slider-hashtags">{ text.hashtags }</div>
  </div>
  )
}

export default SlideFourteen;


//Alternate link
// https://www.youtube.com/watch?v=e_C5zsPmuXE