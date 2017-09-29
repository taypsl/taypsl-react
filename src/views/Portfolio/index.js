import React, { Component } from 'react';
import '../../css/Portfolio.css';
import { CSSTransitionGroup } from 'react-transition-group';
import Close from '../../components/Close';
// import Slider from '../../components/Slider';
import Menu from '../../components/Menu';
// import '../../css/Slider.css';

import SlideOne from '../../components/Slider/Web/SlideOne';
import SlideTwo from '../../components/Slider/Web/SlideTwo';
import SlideThree from '../../components/Slider/UX/SlideThree';
import SlideFour from '../../components/Slider/UX/SlideFour';
import SlideFive from '../../components/Slider/Print/SlideFive';
import SlideSix from '../../components/Slider/Print/SlideSix';
import SlideSeven from '../../components/Slider/Print/SlideSeven';
import SlideEight from '../../components/Slider/Bikes/SlideEight';
import SlideNine from '../../components/Slider/Bikes/SlideNine';
import SlideTen from '../../components/Slider/Halloween/SlideTen';
import SlideEleven from '../../components/Slider/Halloween/SlideEleven';
import SlideTwelve from '../../components/Slider/Halloween/SlideTwelve';
import SlideThirteen from '../../components/Slider/Halloween/SlideThirteen';
import SlideFourteen from '../../components/Slider/Halloween/SlideFourteen';
// import SlideFifteen from '../../components/Slider/Halloween/SlideFifteen';

import RightArrow from '../../components/RightArrow';
import LeftArrow from '../../components/LeftArrow';

import MenuLink from '../../components/MenuLink';


export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.webSlide = this.webSlide.bind(this);
    this.uxSlide = this.uxSlide.bind(this);
    this.printSlide = this.printSlide.bind(this);
    this.bikeSlide = this.bikeSlide.bind(this);
    this.octSlide = this.octSlide.bind(this);
  }

  render() {
    return (
      <div className="Portfolio">
        <CSSTransitionGroup 
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

        <Close />

        <div className="slider">
		      {/* Slides go here */}
		      { this.state.slideCount === 1 ? <SlideOne /> : null }
		      { this.state.slideCount === 2 ? <SlideTwo /> : null }
		      { this.state.slideCount === 3 ? <SlideThree /> : null }
		      { this.state.slideCount === 4 ? <SlideFour /> : null }
		      { this.state.slideCount === 5 ? <SlideFive /> : null }
          { this.state.slideCount === 6 ? <SlideSix /> : null }
          { this.state.slideCount === 7 ? <SlideSeven /> : null }
		      { this.state.slideCount === 8 ? <SlideEight /> : null }
		      { this.state.slideCount === 9 ? <SlideNine /> : null }
		      { this.state.slideCount === 10 ? <SlideTen /> : null }		      
		      { this.state.slideCount === 11 ? <SlideEleven /> : null }
		      { this.state.slideCount === 12 ? <SlideTwelve /> : null }
		      { this.state.slideCount === 13 ? <SlideThirteen /> : null }
		      { this.state.slideCount === 14 ? <SlideFourteen /> : null }
		      { this.state.slideCount > 14 ? this.setState({ slideCount: 1 }) : null }
		      

		      {/* Arrow Functionality */}
		      <RightArrow nextSlide={this.nextSlide} />
		      <LeftArrow previousSlide={this.previousSlide} />
		    </div>
		    <div className="Menu">
			    <MenuLink 
			        slideFunction={this.webSlide}
			        title='WEB'
              slideCount={this.state.slideCount}
              countStart={1}
              countEnd={2}  />
			    <MenuLink 
			        slideFunction={this.uxSlide}
			        title='UX'
              slideCount={this.state.slideCount}
              countStart={3}
              countEnd={4} />
			    <MenuLink 
			        slideFunction={this.printSlide}
			        title='PRINT'
              slideCount={this.state.slideCount}
              countStart={5}
              countEnd={7} />
			    <MenuLink 
			        slideFunction={this.bikeSlide}
			        title='BIKES'
              slideCount={this.state.slideCount}
              countStart={8}
              countEnd={9} />
			    <MenuLink 
			        slideFunction={this.octSlide}
			        title='10/31'
              slideCount={this.state.slideCount}
              countStart={10}
              countEnd={14} />
			    </div>
          </CSSTransitionGroup>
      </div>
    );
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

  webSlide() {
    this.setState({ slideCount: 1 })
  }

  uxSlide() {
    this.setState({ slideCount: 3 })
  }

  printSlide() {
    this.setState({ slideCount: 5 })
  }

  bikeSlide() {
    this.setState({ slideCount: 8 })
  }

  octSlide() {
    this.setState({ slideCount: 10})
  }


}

// className={(this.state.slideCount < 3 ? 'pink' : ' ')}
