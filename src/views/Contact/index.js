import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Mailto from 'react-mailto';
import { CSSTransitionGroup } from 'react-transition-group';

import Close from '../../components/Close';
import '../../css/Contact.css';

import emailBlob from '../../img/blob-1.svg';
import linkedinBlob from '../../img/blob-2.svg';
import twitterBlob from '../../img/blob-3.svg';
import gitBlob from '../../img/blob-4.svg';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
      	<Close />
        <div className="blob">
        	<Mailto email='taylorparsell@gmail.com' obfuscate={false}>
        		<img src={emailBlob} className="blob email-blob" alt="email" />
        	</Mailto>
        </div>
        <div className="blob">
        	<Link to='https://www.linkedin.com/in/tparsell' target='_blank'>
        		<img src={linkedinBlob} className="blob linkedin-blob" alt="linkedin" />
        	</Link>
        </div>
        <div className="blob">
        	<Link to='https://twitter.com/taypsl' target='_blank'>
        		<img src={twitterBlob} className="blob twitter-blob" alt="twitter" />
        	</Link>
        </div>
        <div className="blob">
          <Link to='https://github.com/taypsl' target='_blank'>
            <img src={gitBlob} className="blob git-blob" alt="github" />
          </Link>
        </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Contact;


