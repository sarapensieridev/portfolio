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

const moveFromLeft = keyframes`
	from { -webkit-transform: translateX(-100%); }
`;

const ResumePageDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #ebebd3;
  position: absolute;
  border: solid 4px #083d77;
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
  grid-template-columns: 40% 60%;
  margin-top: 55px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 170px;
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

const ResumeH1 = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  color: #083d77;

  @media only screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 24px;
    border-bottom: 4px solid #083d77;
  }

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const ArgumentDiv = styled.div`
  margin-bottom: 25px;
`;
const Skills = styled.div`
  padding: 15px;
  margin-left: 30px;

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
  grid-template-rows: 40% 40% 40%;
  grid-gap: 15px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 33% 33% 33% 33% 33%;
    grid-gap: 5px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 30% 30% 30%;
    grid-gap: 5px;
  }
`;

const LanguagesAndExperience = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

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
  margin-left: 30px;

  @media only screen and (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 30%;
  grid-gap: 10px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: center;
`;

const IconBase = css`
    /* Common dimensions/margins from your original CSS */
    width: 0.85em;
    height: 0.8em;
    margin-bottom: 0.0677em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    display: inline-block; /* Helps with layout */
`;

const StyledSkillFilled = styled(ImStop2)`
    ${IconBase}
    color: #da4167;
`;

const StyledSkillEmpty = styled(ImStop2)`
    ${IconBase}
    color: transparent;
    border: 1px solid #da4167;
    box-sizing: border-box; /* Ensures border doesn't increase size */
`;

const StyledLangFilled = styled(VscCircleLargeFilled)`
    ${IconBase}
    color: #f4d35e;
`;

const StyledLangEmpty = styled(VscCircleLargeFilled)`
    ${IconBase}
    color: transparent;
    border: 1px solid #f4d35e;
    border-radius: 50%;
    box-sizing: border-box; /* Ensures border doesn't increase size */
`;


const ResumePage = () => {
  return (
    <ResumePageDiv>
      <CloseButton />
      <EducationAndSkills>
        <EducationDiv>
          <ResumeH1>Education</ResumeH1>
          <ArgumentDiv>
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
          </ArgumentDiv>
          <ArgumentDiv>
            {academicData.map((degree, index) => {
			return(
              <CourseEntry
                key={index}
                title={degree.title}
                date={degree.date}
              />
			)
            })}
          </ArgumentDiv>
        </EducationDiv>
        <Skills>
          <ResumeH1>Personal and professional skills</ResumeH1>
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
