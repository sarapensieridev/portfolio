import ProjectTab from "../../components/ProjectTab.jsx";
import projectsData from "../../data/projectsData.js";
import styled, { keyframes } from "styled-components";
import CloseButton from "../../components/CloseButton.jsx";
import { bgWhite, blue } from "../../constants.js";

const moveFromLeft = keyframes`
	from { -webkit-transform: translateX(-100%); }
`;

const ProjectPageDiv = styled.div`
  z-index: 9999;
  background-color: ${bgWhite};
  position: absolute;
  width: 100%;
  font-family: "PT Sans", sans-serif;
  border: solid 2px ${blue};
  -webkit-animation: ${moveFromLeft} 0.6s ease both;
  animation: ${moveFromLeft} 0.6s ease both;

  @media only screen and (max-width: 600px) {
    top: 0;
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 1280px) and (min-height: 750px) and (max-height: 1400px),
    @media only screen and (max-width: 1280px) and (max-height: 750px) {
    top: 0;
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }
`;

const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  @media only screen and (max-width: 600px) {
    margin-top: 30px;
  }
`;

const ProjectsPage = () => {
  return (
    <ProjectPageDiv>
      <CloseButton />
      <ProjectsDiv>
        {projectsData.map((project) => (
          <ProjectTab
            key={project.id}
            title={project.title}
            imagesData={project.imagesData}
            paragraphs={project.paragraphs}
          />
        ))}
      </ProjectsDiv>
    </ProjectPageDiv>
  );
};

export default ProjectsPage;
