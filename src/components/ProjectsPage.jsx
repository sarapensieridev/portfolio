import React from 'react';
import {useNavigate} from "react-router-dom";
import close from "./close.png";
import { Carousel } from './Carousel';
import carouselData from '../data/carouselData.json';
import { Carousel1 } from './Carousel1'


const {slides} = carouselData;

const ProjectsPage = () => {

	const navigate = useNavigate();
		const closeWindow = () => {
		navigate(-1);
		}
	return (
		<div className="projects-page">
			<button onClick={closeWindow} className="close-button"><img src={close} className="close" alt="close-tag"></img></button>
			<div className='moenia-pres'>
				<h2 className='moenia-title'>Moenia landing page</h2>
				<div className='moenia-paragraph'>
				<p className='moenia-p'>Moenia is an app that was born to help users to discover Europe's archaeological heritage. Moenia offers to the users the possibility to localize archaeological sites near them and created an immersive, educational and gamified experience, offering the opportunity to track the sites users have already visited.</p>
				<p className='moenia-p'>My project was about creating a landing page to present Moenia App, with the objective to let it know to a wider public and to invite people to download it.</p>
				<p className='moenia-p'>The landing page was created with React Hook and mantain Moenia App design and colors. As the final objective is that people download the app, I mantain a simple but clear structure for the page,with some interactive point to show main Moenia functionalities. 	
				Thanks to differents links, the visitor of Moenia landing page can acces to the direct download page.</p>
				<p className='moenia-p'>In the navbar the visitor can chose between five different languages, the central part of the page shows Moenia principal features and in the footer there are the links to contact with Moenia team ot to visit Moenia Instagram.
				</p>
				</div>
				<Carousel data= {slides} />
			</div>
			<div className='moenia-pres1'>
				<h2 className='moenia-title1'>Moenia landing page</h2>
				<div className='moenia-paragraph1'>
				<p className='moenia-p1'>Moenia is an app that was born to help users to discover Europe's archaeological heritage. Moenia offers to the users the possibility to localize archaeological sites near them and created an immersive, educational and gamified experience, offering the opportunity to track the sites users have already visited.</p>
				<p className='moenia-p1'>My project was about creating a landing page to present Moenia App, with the objective to let it know to a wider public and to invite people to download it.</p>
				<p className='moenia-p1'>The landing page was created with React Hook and mantain Moenia App design and colors. As the final objective is that people download the app, I mantain a simple but clear structure for the page,with some interactive point to show main Moenia functionalities. 	
				Thanks to differents links, the visitor of Moenia landing page can acces to the direct download page.</p>
				<p className='moenia-p1'>In the navbar the visitor can chose between five different languages, the central part of the page shows Moenia principal features and in the footer there are the links to contact with Moenia team or to visit Moenia Instagram.
				</p>
				</div>
				<Carousel1 data= {slides} />
			</div>
		</div>
	)
}

export default ProjectsPage;