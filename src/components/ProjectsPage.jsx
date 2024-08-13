import React from 'react';
import {useNavigate} from "react-router-dom";
import close from "./close.png";
import { CarouselMoenia } from './CarouselMoenia';
import carouselData from '../data/carouselData.json';
import { CarouselSynapsis } from './CarouselSynapsis'

const {slides} = carouselData;
const {slidessynapsis} = carouselData;

const ProjectsPage = () => {

	const navigate = useNavigate();
		const closeWindow = () => {
		navigate(-1);
		}
	return (
		<div className="projects-page">
			<button onClick={closeWindow} className="close-button"><img src={close} className="close" alt="close-tag"></img></button>
			<div className='projects'>
				<div className='project-pres'>
					<h2 className='project-title'>Moenia landing page</h2>
					<div className='carousel-container'>
						<CarouselMoenia data= {slides} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>I developed a React-based landing page to introduce Moenia, an app dedicated to exploring Europe's archaeological treasures. The page was designed to captivate users, inform them about Moenia's features, and drive app downloads.</p>
						<p className='project-p'>By adhering to Moenia's established design language, I created a visually appealing and intuitive user interface. The landing page highlights key functionalities through interactive elements, making the app's value proposition clear and engaging. A multi-language navbar ensures accessibility for a global audience.</p>
						<p className='project-p'>The landing page was designed with a clear and concise structure to optimize user experience and encourage app downloads. Prominent calls-to-action guide visitors towards the download page, while contact and social media information is provided for additional engagement.</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>Synapsis ecommerce</h2>
					<div className='carousel-container'>
						<CarouselSynapsis data= {slidessynapsis} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>Synapsis is an ecommerce platform showcasing glass and macrame pieces. When designing the platform, I prioritized a clean, elegant, and user-friendly interface. This not only enhances the customer experience but also ensures the platform reflects the sophistication of the products themselves.</p>
						<p className='project-p'>By opting for a WordPress-based design, I empowered the client with the autonomy to independently update and monitor product stock levels and sales performance. This translates to greater flexibility and control for the client, allowing them to manage their business efficiently without relying on external technical support.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage;    