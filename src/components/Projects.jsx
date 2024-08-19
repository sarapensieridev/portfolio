import React from 'react';
import { Link } from 'react-router-dom';



const Projects = () => {
	return(
			<div className="component" id="projects-main">
				<Link to="/projects" id="projects-link" className="link"><h1>PROJECTS</h1></Link>
			</div>
		)
	}

export default Projects

