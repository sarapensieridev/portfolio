import { useNavigate } from "react-router-dom";
import close from "../../images/close.png";
import ProjectTab from "../../components/ProjectTab.jsx";
import projectsData from "../../data/projectsData.js";


const ProjectsPage = () => {

	const navigate = useNavigate();
	const closeWindow = () => {
		navigate(-1);
	}
	return (
		<div className="projects-page">
			<button onClick={closeWindow} className="close-button"><img src={close} className="close" alt="close-tag"></img></button>
			<div className='projects'>
				{projectsData.map((project) => (
					<ProjectTab
						key={project.id}
						title={project.title}
						imagesData={project.imagesData}
						paragraphs={project.paragraphs}
					/>
				))}
		
			</div>
		</div>
	)
}

export default ProjectsPage;    