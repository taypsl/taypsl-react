import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/About.css';
import Close from '../../components/Close';
import { CSSTransitionGroup } from 'react-transition-group';

class About extends Component {
  render() {
    return (
      <div className="About">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        <Close />
        <div className="flex-container">
          <div className="flex-item">
          	<p className="About-text">I’m a <Link to='/work'>web developer</Link> specializing in front-end development with JavaScript, HTML, CSS and JS libraries.</p>
          </div>
          <div className="flex-item">
          	<p className="About-text">In a past life I worked as a <Link to='/work'>ux designer</Link>, creating and testing digital consumer products.</p>
          </div>
          <div className="flex-item">
          	<p className="About-text">Other things I sometimes am: part-time <Link to='/misc'>bicycle restorer</Link>, on-demand <Link to='/work'>print designer</Link>, and year round <Link to='/misc'>Halloween enthusiast</Link>.</p>
          </div>
        </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default About;

// https://www.npmjs.com/package/react-hover