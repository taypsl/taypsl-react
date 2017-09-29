import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import '../../css/Home.css';
import Signature from '../../components/Signature';

import about from '../../img/btn_about.svg'
import contact from '../../img/btn_contact.svg'
import portfolio from '../../img/btn_portfolio.svg'
import aboutOutline from '../../img/btn_about_ol.svg'
import contactOutline from '../../img/btn_contact_ol.svg'
import portfolioOutline from '../../img/btn_portfolio_ol.svg'
import signature from '../../img/signature.svg'
import signatureBw from '../../img/signature-bw.svg'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      x: 0, 
      y: 0,
      circle: ''
    };
    this.periscopeMove = this.periscopeMove.bind(this)
  }

  periscopeMove(e) {
    this.setState({ x: e.screenX, y: e.screenY, circle: `circle(150px at ${this.state.x}px ${this.state.y}px) `});
  }

  render() {
    const {x, y, circle} = this.state;
    const circleStyle = {clipPath: this.state.circle};
    return (

      <div 
        className="Home"
        onMouseMove={this.periscopeMove}>
         
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="svg-container"><img src={signatureBw} /></div>       
          <div className="links">
            <div className="btn about-btn-ol"><img src={aboutOutline} /></div>
            <div className="btn contact-btn-ol"><img src={contactOutline} /></div>
            <div className="btn portfolio-btn-ol"><img src={portfolioOutline} /></div>
          </div>

          <article 
            className="frame"
            style={circleStyle}> 
            <div className="svg-container"><img src={signature} /></div> 
            <div className="hidden-links">
              <div className="hidden-sig"></div>
              <div className="btn about-btn">
              	<Link to='/about'><img src={about} /></Link>
              </div>
              <div className="btn contact-btn">
      	        <Link to='/contact'><img src={contact} /></Link>
            	</div>
              <div className="btn portfolio-btn">
                <Link to='/portfolio'><img src={portfolio} /></Link>
              </div>
            </div>
          </article>

        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Home;

 // componentDidMount() {
 //    this.periscopeMove()
 //  }
