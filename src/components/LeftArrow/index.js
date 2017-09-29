import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
    	<i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrow;


