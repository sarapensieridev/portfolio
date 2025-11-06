import { VscCircleLargeFilled } from "react-icons/vsc";
import { ImStop2 } from "react-icons/im";
import styled, { keyframes, css } from "styled-components";
import CloseButton from "../../components/CloseButton";
import {
  academicData,
  educationData,
  experienceData,
  languagesData,
  skillsData,
} from "../../data/resumeData";
import CourseEntry from "../../components/CourseEntry";
import SkillRating from "../../components/SkillRating";
import ExperienceEntry from "../../components/ExperienceEntry";
import { ResumeH1 } from "../../components/ResumeTextStyle";
import { bgWhite, blue, pink, yellow } from "../../constants";


const moveFromLeft = keyframes`
	from { -webkit-transform: translateX(-100%); }
`;

const ResumePageDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: ${bgWhite};
  position: absolute;
  border: solid 2px ${blue};
  display: grid;
  grid-template-rows: 65% 35%;
  font-family: "PT Sans", sans-serif;
  -webkit-animation: ${moveFromLeft} 0.6s ease both;
  animation: ${moveFromLeft} 0.6s ease both;
  overflow-x: hidden;

  @media only screen and (min-width: 600px) and (min-height: 300px) {
    display: flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
const EducationAndSkills = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 55px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media only screen and (min-width: 600px) and (min-height: 300px) {
    flex: 1;
  }
`;

const EducationDiv = styled.div`
  padding: 15px;
  margin-left: 50px;
  border-right: solid 4px #083d77;

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
    border-right: none;
  }
`;

const CoursesDiv = styled.div`
  margin-bottom: 10px;
`;
const Skills = styled.div`
  padding: 15px;
  margin-left: 50px;

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 5px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-gap: 10px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
`;

const LanguagesAndExperience = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  /* RESUME PAGE RESPONSIVE - max-width: 600px (Mobile) */
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
    margin-top: -30px;
  }

  @media only screen and (min-width: 600px) and (min-height: 300px) {
    flex: 1;
  }
`;

const ExperienceDiv = styled.div`
  padding: 15px;
  margin-left: 50px;
  border-right: solid 4px #083d77;
  margin-bottom: 30px;

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    border-right: none;
  }
`;

const LanguagesDiv = styled.div`
  padding: 15px;
  margin-left: 50px;

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-gap: 5px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const IconMargins = css`
    margin-bottom: 0.0677em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    display: inline-block;
	vertical-align: middle;
`;

const StandardIconSize = css`
    width: 0.85em;
    height: 0.8em;
`;

const CompensatedIconSize = css`
    width: 0.65em;
    height: 0.6em;
`;

const StyledSkillFilled = styled(ImStop2)`
    ${IconMargins}
	${StandardIconSize}
    color: ${pink};
`;

const StyledSkillEmpty = styled(ImStop2)`
    ${IconMargins}
	${CompensatedIconSize}
    color: transparent;
    border: 1px solid ${pink};
    box-sizing: border-box; 
`;

const StyledLangFilled = styled(VscCircleLargeFilled)`
    ${IconMargins}
	${StandardIconSize}
    color: ${yellow};
`;

const StyledLangEmpty = styled(VscCircleLargeFilled)`
    ${IconMargins}
	${CompensatedIconSize}
    color: transparent;
    border: 1px solid ${yellow};
    border-radius: 50%;
    box-sizing: border-box; 
`;


const ResumePage = () => {
  return (
    <ResumePageDiv>
      <CloseButton />
      <EducationAndSkills>
        <EducationDiv>
          <ResumeH1>Education</ResumeH1>
          <CoursesDiv>
            {educationData.map((course, index) => {
				return(
              <CourseEntry
                key={index}
                title={course.title}
                institution={course.institution}
                date={course.date}
              />
				)
            })}
          </CoursesDiv>
          <CoursesDiv>
            {academicData.map((degree, index) => {
			return(
              <CourseEntry
                key={index}
                title={degree.title}
				institution={degree.institution}
                date={degree.date}
              />
			)
            })}
          </CoursesDiv>
        </EducationDiv>
        <Skills>
          <ResumeH1>Skills</ResumeH1>
          <SkillsGrid>
            {skillsData.map((skill, index) => {
			return(
              <SkillRating
                key={index}
                name={skill.name}
                rating={skill.rating}
                FilledIcon={StyledSkillFilled}
                EmptyIcon={StyledSkillEmpty}
              />
			)
            })}
          </SkillsGrid>
        </Skills>
      </EducationAndSkills>
      <LanguagesAndExperience>
        <ExperienceDiv>
          <ResumeH1>Experiences</ResumeH1>
          {experienceData.map((job, index) => {
			return(
            <ExperienceEntry key={index} title={job.title} date={job.date} />
			)
          })}
        </ExperienceDiv>
        <LanguagesDiv>
          <ResumeH1>Languages</ResumeH1>
          <LanguagesGrid>
            {languagesData.map((language, index) => {
			return(
              <SkillRating
                key={index}
                name={language.name}
                rating={language.rating}
                FilledIcon={StyledLangFilled}
                EmptyIcon={StyledLangEmpty}
              />
			)
            })}
          </LanguagesGrid>
        </LanguagesDiv>
      </LanguagesAndExperience>
    </ResumePageDiv>
  );
};

export default ResumePage;
