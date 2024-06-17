import React from 'react';
import close from "./close.png"
import { useNavigate } from "react-router-dom";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { ImStop2 } from "react-icons/im";



const ResumePage = () => {

const navigate = useNavigate();
const closeWindow = () => {
	navigate(-1);
}


	return (
		<div className="resume-page">
			<button onClick={closeWindow} className="close-button"><img src={close} className="close" alt="close-tag"></img></button>
			<div className="education-and-skills">
			<div className="education-div">
				<h1 className="resume-h1">Education</h1>
				<div className="courses">
				<div className="argument-div">
					<div className="course">
					<h3 className="resume-h3">Introduction to SEO</h3>
					<p className="resume-p">Barcelona Activa, May 2024</p>
					</div>
					<div className="course">
					<h3 className="resume-h3">Wordpress: create a web from a local host</h3>
					<p className="resume-p">Barcelona Activa, May 2024</p>
					</div>
					<div className="course">
					<h3 className="resume-h3">Code repositories: GIT and Github</h3>
					<p className="resume-p">Barcelona Activa, May 2024</p>
					</div>
					<div className="course">
					<h3 className="resume-h3">Frontend Development Libraries</h3>
					<p className="resume-p">freeCodeCamp, May 2024</p>
					</div>
					<div className="course">
					<h3 className="resume-h3">JavaScript Algorithms and Data Structures Certification</h3>
					<p className="resume-p">freeCodeCamp, February 2024</p>
					</div>
					<div className="course">
					<h3 className="resume-h3">Responsive Web Design Certification</h3>
					<p className="resume-p">freeCodeCamp, November 2023</p>
					</div>
				</div>
				</div>
				<div className="argument-div-2">
					<h3 className="resume-h3">Master's Degree in Modern, comparative and postcolonial literatures</h3>
					<p className="resume-p">University of Bologna, 2016</p>
					<h3 className="resume-h3">Bachelor's Degree in Modern Foreign Languages and Literatures</h3>
					<p className="resume-p">University of Bologna, 2012</p>
				</div>
			</div>
			<div className="skills">
				<h1 className="resume-h1">Personal and professional skills</h1>
				<div className="skills-grid">
				<div className="skill">
				<h3 className="resume-h3">Teamwork</h3>
					<p className="resume-p">
					<ImStop2 className="symbol"/>
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">Organization skills</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>	
				</div>
				<div className="skill">
				<h3 className="resume-h3">Public Relations</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">Work under pressure</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2  className="symbol"/>
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">Public Speaking</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">React</h3>
				<p className="resume-p">					
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">Javascript</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">CSS</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />					
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">HTML</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				<div className="skill">
				<h3 className="resume-h3">Microsoft Office</h3>
				<p className="resume-p">
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
					<ImStop2 className="symbol" />
				</p>
				</div>
				</div>
			</div>
			</div>
			<div className="languages-and-experience">
				<div className="experience-div">
				<h1 className="resume-h1">Experiences</h1>
				<div className="argument">
					<h3 className="resume-h3">Early Childhood Educator</h3>
					<p className="resume-p">2019-2023</p>
				</div>
				<div className="argument">
					<h3 className="resume-h3">Language Teacher</h3>
					<p className="resume-p">2015-2019</p>
				</div>
				<div className="argument">
					<h3 className="resume-h3">Database Assistant</h3>
					<p className="resume-p">2012-2013</p>
				</div>
			</div>
			<div className="languages-div">
				<h1 className="resume-h1">Languages</h1>
				<div className="languages-grid">
				<div className="lang">
				<h3 className="resume-h3">Italian</h3>
				<p className="resume-p">   
					<VscCircleLargeFilled className="symbol-lang" />
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>  
				</p>
				</div>
				<div className="lang">
				<h3 className="resume-h3">Spanish</h3>
				<p className="resume-p">
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
				</p>
				</div>
				<div className="lang">
				<h3 className="resume-h3">English</h3>
				<p className="resume-p">
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
				</p>
				</div>
				<div className="lang">
				<h3 className="resume-h3">Portuguese</h3>
				<p className="resume-p">
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
				</p>
				</div>
				<div className="lang">
				<h3 className="resume-h3">Catalan</h3>
				<p className="resume-p">
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
					<VscCircleLargeFilled className="symbol-lang"/>
				</p>
				</div>
			</div>
			</div>
			</div>
		</div>
	)
}

export default ResumePage;