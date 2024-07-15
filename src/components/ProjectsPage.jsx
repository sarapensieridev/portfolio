import React from 'react';
import {useNavigate} from "react-router-dom";
import close from "./close.png";
import { Carousel } from './Carousel';
import carouselData from '../data/carouselData.json';

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
				<Carousel data= {slides} />
			</div>
		</div>
	)
}

export default ProjectsPage;