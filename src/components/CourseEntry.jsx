import styled from "styled-components";
import { ResumeH3, ResumeParagraph } from "./ResumeTextStyle";

const Course = styled.div`
	padding: 5px 0px;
`

const CourseEntry = ({ title, institution, date }) => (
    <Course> 
        <ResumeH3>{title}</ResumeH3>
        <ResumeParagraph>{institution}, {date}</ResumeParagraph>
        
    </Course>
);

export default CourseEntry