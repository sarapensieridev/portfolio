import styled from "styled-components";
import { ResumeH3, ResumeParagraph } from "./ResumeTextStyle";

const SkillDiv = styled.div`
  padding: 5px 0px;

  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 20px;
    padding: 5px 0px;
  }
`;

const SkillRating = ({
  name,
  rating,
  maxRating = 5,
  FilledIcon,
  EmptyIcon,
}) => {
  const icons = [];

  for (let i = 1; i <= maxRating; i++) {
    const IconToRender = i <= rating ? FilledIcon : EmptyIcon;

    icons.push(
      <IconToRender key={`${name}-${i}`} />
    );
  }

  return (
    <SkillDiv>
      {" "}
      <ResumeH3>{name}</ResumeH3>
      <ResumeParagraph>{icons}</ResumeParagraph>
    </SkillDiv>
  );
};

export default SkillRating;
