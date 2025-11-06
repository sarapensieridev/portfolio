import styled from "styled-components";
import { blue } from "../constants";

export const ResumeH1 = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  color: ${blue};

  @media only screen and (max-width: 600px) {
    margin-bottom: 5px;
    font-size: 22px;
    border-bottom: 4px solid ${blue};
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`; 

export const ResumeH3 = styled.h3`
  font-size: 18px;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ResumeParagraph = styled.p`
  font-size: 14px;
`;