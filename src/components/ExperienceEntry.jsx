import styled from "styled-components";
import { ResumeH3, ResumeParagraph } from "./ResumeTextStyle";

const ArgumentDiv = styled.div`
margin-bottom: 10px;
`

const ExperienceEntry = ({ title, date }) => (
    <ArgumentDiv> 
        <ResumeH3>{title}</ResumeH3>
        <ResumeParagraph>{date}</ResumeParagraph>
    </ArgumentDiv>
)

export default ExperienceEntry