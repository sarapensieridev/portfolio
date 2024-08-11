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
				<p className='moenia-p'>I developed a React-based landing page to introduce Moenia, an app dedicated to exploring Europe's archaeological treasures. The page was designed to captivate users, inform them about Moenia's features, and drive app downloads.</p>
				<p className='moenia-p'>By adhering to Moenia's established design language, I created a visually appealing and intuitive user interface. The landing page highlights key functionalities through interactive elements, making the app's value proposition clear and engaging. A multi-language navbar ensures accessibility for a global audience.</p>
				<p className='moenia-p'>The landing page was designed with a clear and concise structure to optimize user experience and encourage app downloads. Prominent calls-to-action guide visitors towards the download page, while contact and social media information is provided for additional engagement.</p>
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
				<p className='moenia-p-link1'>You can visit Moenia Landing page <a className='moenia-link1' href='moeniaapp.com'>here</a>.</p>
				</div>
				<Carousel1 data= {slides} />
			</div>
		</div>
	)
}

export default ProjectsPage;