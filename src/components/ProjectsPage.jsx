import React from 'react';
import { useNavigate } from "react-router-dom";
import close from "./close.png";
import {Carousel} from './Carousel.jsx';
import carouselData from '../data/carouselData.json';

const { slides } = carouselData;
const { slidessynapsis } = carouselData;
const { slidesplantastic } = carouselData;
const { slidesenglishseedadmin } = carouselData;
const { nubeviajera } = carouselData;
const { unwind } = carouselData;
const { linguasync } = carouselData;

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
					<h2 className='project-title'>Moenia Landing Page</h2>
					<div className='carousel-container'>
						<Carousel data={slides} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>A landing page was developed to introduce Moenia, an app dedicated to exploring Europe's archaeological treasures. The page was designed in <b style={{ color: "#da4167" }}>React</b> to captivate users, inform them about Moenia's features, and drive app downloads.</p>
						<p className='project-p'>By adhering to Moenia's established design language, a visually appealing and intuitive user interface was created. The landing page highlights key functionalities through interactive elements, making the app's value proposition clear and engaging. A multi-language navbar ensures accessibility for a global audience.</p>
						<p className='project-p'>The landing page was designed with a clear and concise structure to optimize user experience and encourage app downloads. Prominent calls-to-action guide visitors towards the download page, while contact and social media information is provided for additional engagement.</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>Synapsis Wordpress Ecommerce</h2>
					<div className='carousel-container'>
						<Carousel data={slidessynapsis} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>Synapsis is an ecommerce platform showcasing glass and macrame pieces. When designing the platform, I prioritized a clean, elegant, and user-friendly interface. This not only enhances the customer experience but also ensures the platform reflects the sophistication of the products themselves.</p>
						<p className='project-p'>By opting for a WordPress-based design, I empowered the client with the autonomy to independently update and monitor product stock levels and sales performance. This translates to greater flexibility and control for the client, allowing them to manage their business efficiently without relying on external technical support.
						</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>Plantastic Ecommerce</h2>
					<div className='carousel-container'>
						<Carousel data={slidesplantastic} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>Plantastic is an e-commerce app built from scratch, designed to allow users to browse and purchase various types of plants. The app utilizes <b style={{ color: "#da4167" }}>React</b> for the frontend, <b style={{ color: "#da4167" }}>Node.js</b> for the backend, <b style={{ color: "#da4167" }}>MongoDB</b> as the database and styling with <b style={{ color: "#da4167" }}>Styled Components</b>.</p>
						<p className='project-p'>Key features include secure user authentication via <b style={{ color: "#da4167" }}>JWT</b>, global state management with <b style={{ color: "#da4167" }}>Redux</b>, and payment integration with <b style={{ color: "#da4167" }}>Stripe</b>. The frontend is built using React, following the component-based architecture. Redux is used to manage the state across the app, including the user's cart, authentication status, and the payment process. The backend is built with Node.js, providing a RESTful API to handle requests from the frontend. This is a beginner-friendly full-stack shopping app that covers essential eCommerce concepts like product management, cart functionality, and order processing.</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>English Seed Admin Page</h2>
					<div className='carousel-container'>
						<Carousel data={slidesenglishseedadmin} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>This project showcases the development of a robust and user-friendly admin dashboard utilizing <b style={{ color: "#da4167" }}>React</b> and <b style={{ color: "#da4167" }}>SCSS</b> and it was designed specifically for an eLearning platform, English Seed. By leveraging the power of React's component-based architecture, the dashboard seamlessly integrates interactive elements, data visualizations, and a user-friendly interface and the implementation of SCSS ensures maintainable and scalable styling.</p>
						<p className='project-p'>This frontend project incorporates React Query for data handling and testing. Testing with <b style={{ color: "#da4167" }}>React Query</b> was conducted on key data-driven pages, including Users, Orders, and Products management sections. This project not only addresses a crucial need in education but also serves as a valuable template for developing other data-driven admin dashboards, demonstrating adaptability and scalability beyond this specific use case.</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>NubeViajera App</h2>
					<div className='carousel-container'>
						<Carousel data={nubeviajera} />
					</div>
					<div className='project-paragraph'>
						<p className='visit-site'>Feel free to visit the web: <a href='https://nubeviajera.onrender.com/' target='_blank' rel='noopener noreferrer' className='web-link'>Nube Viajera</a></p>
						<br />
						<p className='project-p'>Unpredictable weather can quickly derail travel plans. Nube Viajera solves this problem by providing real-time weather alerts and smart recommendations within Spain. Built with <b style={{ color: "#da4167" }}>React</b>, the app uses geolocation and communicates with a trusted, free, and official weather API via a dedicated <b style={{ color: "#da4167" }}>Node.js</b> backend to keep users informed about current and upcoming conditions.</p>
						<p className='project-p'>If an alert is in effect, Nube Viajera suggests alternative locations nearby. Otherwise, it recommends interesting places to explore. Simple icons, using the same three colors used in official meteorological warnings to indicate alert severity, provide clear visual cues about the nature of the weather warnings. The app features a responsive design and a toggleable dark/light mode for optimal usability. <b style={{ color: "#da4167" }}>Styled Components</b> were used for styling.</p>
					</div>
				</div>
				<div className='project-pres'>
					<h2 className='project-title'>Unwind Stays Angular App</h2>
					<div className='carousel-container'>
						<Carousel data={unwind} />
					</div>
					<div className='project-paragraph'>
						<p className='project-p'>Unwind Stays is a web application designed to facilitate the discovery and rental of holiday homes in natural European settings. Built with the latest version of <b style={{ color: "#da4167" }}>Angular</b>, it offers a seamless user experience.  </p>
						<p className='project-p'>The application leverages the latest version of Angular, employing standalone components for a modular and maintainable codebase. This architecture ensures a responsive and efficient user experience. Styling is achieved through standard CSS, focusing on clarity and usability. Unwind Stays provides intuitive search and a filtering option that allows users to quickly pinpoint their ideal location. Furthermore, Unwind Stays is designed to work seamlessly on all devices, ensuring a responsive experience.</p>
					</div>
					<div className='project-pres'>
						<h2 className='project-title'>LinguaSync Full Stack Project</h2>
						<div className='carousel-container'>
							<Carousel data={linguasync} />
						</div>
						<div className='project-paragraph'>
							<p className='project-p'>LinguaSync is a language learning platform that empowers users to connect with a network of language teachers. Users can browse a wide selection of teachers, filtering by language and viewing detailed profiles. Once registered, users can book appointments, manage their schedules, and securely pay for sessions through our integrated <b style={{ color: "#da4167" }}>Stripe</b> payment system.</p>
							<p className='project-p'>The frontend was constructed with <b style={{ color: "#da4167" }}>React.js</b>. <b style={{ color: "#da4167" }}>React Router</b> facilitates seamless navigation, and a modular architecture promotes code reusability. <b style={{ color: "#da4167" }}>Tailwind CSS</b> was selected to enable rapid development and consistent styling. The backend is built using <b style={{ color: "#da4167" }}>Node.js</b> and the <b style={{ color: "#da4167" }}>Express.js</b> framework. RESTful APIs enable efficient data exchange between the frontend and backend, adhering to API design best practices. <b style={{ color: "#da4167" }}>Axios</b> is employed for asynchronous API fetching in the React.js frontend. Data persistence is managed using <b style={{ color: "#da4167" }}>MongoDB</b>. The endpoints were tested using <b style={{ color: "#da4167" }}>Postman</b>. Authentication is handled via a secure, token-based system, supporting multi-level access control for users, teachers, and administrators. <b style={{ color: "#da4167" }}>Stripe</b> integration leverages its API for secure and reliable online payment processing.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectsPage;    