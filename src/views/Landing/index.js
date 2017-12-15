import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../../img/img@3x.png';
import signature from '../../img/sunset-sig.svg';
import '../../css/Landing.css';
// import BurgerNavbar from '../../components/BurgerMenu';

export default class Home extends Component {
	render() {
		return (
			<div className="Landing">
				<div className="Links">
					<Link to="/about">ABOUT</Link>
					<Link to="/work">WORK</Link>
					<Link to="/contact">CONTACT</Link>
				</div>

				<img className="Landing-sig" src={signature} alt="Taylor Parsell" />
				<img className="Landing-image" src={image} alt="also Taylor Parsell" />
				
			</div>
		)
	}
}