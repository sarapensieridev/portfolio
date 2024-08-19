import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

	return (
		<div className="component" id="about">
			<Link to="/about" id="about-link" className="link"><h1>ABOUT</h1></Link>
		</div>
		)
}

export default About