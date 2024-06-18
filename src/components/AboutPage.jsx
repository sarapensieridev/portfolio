import React from 'react';
import { useNavigate } from "react-router-dom";
import close from "./close.png"
import sara3 from "./sara3.jpg"



const AboutPage = () => {

const navigate = useNavigate();
const closeWindow = () => {
	navigate(-1);
}

	return (
		<div className="about-page">
			<button onClick={closeWindow} className="close-button"><img src={close} className="close" alt="close-tag"></img></button>
			<div className="sara-presentation">
				<div className="title">
					<h2 className="about-h2">I'm Sara</h2>
				</div>
				<div className="presentation">
					<div className="sara-image">
						<img src={sara3} alt="sara-photo" className="sara"></img>
					</div>
					<div className="presentation-p">
						<h3 className="about-h3">I'm a Web and Front-end Developer.</h3>
						<p className="about-p">Over the past 10 years, I have worked in education, as a teacher and a childhood educator and thanks to that experience I learned to be a organised, patient and empathic person. Also I understood the importance of collaboration to pursue common objectives as well I learned to communicate efficiently with people and to deal with different types of situations and problems.
					 	I also learned how to work in stressful situations as well to lead with pressure.</p>
				 		<p className="about-p">Throughout these years, I experienced a lot as a person and actually, I changed a lot and I understood that I needed a change in my professional career towards a job that would allow me to open my mind to other professional fields and to have a remote position.</p>
				 		<p className="about-p">So I decided to switch my career toward the tech world and I think that my professional background can help in this area, because as an educator I always experienced the need to continue learning and to prove myself with new challenges so I learned to be curious and to persist to reach my objectives.</p>
				 		<p className="about-p">Since September 2023 I have been learning software development and nowadays I am able to work with HTML, CSS, Javascript languages and the React framework. I also take some courses about Wordpress, SEO and GIT.</p>
				 		<p className="about-p">Obviously my journey it's just begun, but I really enjoy what I'm learning and what I'm doing, so I can't wait to be a professional.</p>
					</div>
				</div>
			</div>	
		</div>
	)
}

export default AboutPage;