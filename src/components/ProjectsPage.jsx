import React from 'react';
import {useNavigate} from "react-router-dom";
import close from "./close.png";
import { Carousel } from './Carousel';
import carouselData from '../data/carouselData.json';
import { Carousel1 } from './Carousel1'


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
			<div className='moenia-pres'>
				<h2 className='moenia-title'>Moenia landing page</h2>
				<Carousel data= {slides} />
				<div className='moenia-paragraph'>
				<p className='moenia-p'>I developed a React-based landing page to introduce Moenia, an app dedicated to exploring Europe's archaeological treasures. The page was designed to captivate users, inform them about Moenia's features, and drive app downloads.</p>
				<p className='moenia-p'>By adhering to Moenia's established design language, I created a visually appealing and intuitive user interface. The landing page highlights key functionalities through interactive elements, making the app's value proposition clear and engaging. A multi-language navbar ensures accessibility for a global audience.</p>
				<p className='moenia-p'>The landing page was designed with a clear and concise structure to optimize user experience and encourage app downloads. Prominent calls-to-action guide visitors towards the download page, while contact and social media information is provided for additional engagement.</p>
				</div>
			</div>
			<div className='moenia-pres1'>
				<h2 className='moenia-title1'>Synapsis ecommerce</h2>
				<Carousel1 data= {slidessynapsis} />
				<div className='moenia-paragraph1'>
				<p className='moenia-p1'>Synapsis is an ecommerce platform showcasing glass and macrame pieces.</p>
				<p className='moenia-p1'>When designing the platform, I prioritized a clean, elegant, and user-friendly interface. This not only enhances the customer experience but also ensures the platform reflects the sophistication of the products themselves.</p>
				<p className='moenia-p1'>By opting for a WordPress-based design, I empowered the client with the autonomy to independently update and monitor product stock levels and sales performance. This translates to greater flexibility and control for the client, allowing them to manage their business efficiently without relying on external technical support.
				</p>
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage;