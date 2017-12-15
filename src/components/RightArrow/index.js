import React from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
    	<i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;
