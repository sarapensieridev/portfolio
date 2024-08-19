import React from 'react';
import { Link } from 'react-router-dom';


const Resume = () => {
		return(
			<div className="component" id="resume-main">
				<Link to="/resume" id="resume-link" className="link"><h1>RESUME</h1></Link>
			</div>
		)
	}

export default Resume