import { Carousel } from "../pages/Carousel/Carousel";
import styled from "styled-components";

const ProjectPresDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 35px;
  text-transform: uppercase;
  color: #da4167;
  padding: 20px 0px;

  @media only screen and (max-width: 600px) {
    font-size: 26px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectParagraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  margin: 0px 80px;
  border-bottom: 4px solid #f4d35e;

  @media only screen and (max-width: 600px) {
    margin: 0px 10px;
    padding: 20px 10px;
  }
`;

const ProjectParagraph = styled.p`
  font-size: 20px;
  text-align: justify;

  @media only screen and (max-width: 600px) {
    font-size: 20px; /* Note: This is the same size, but it keeps the style explicit */
  }
`;

const VisitSite = styled.p`
  font-size: 20px;
  text-align: justify;
`;

const WebLink = styled.a`
  text-decoration: none;
  color: #da4167;
  cursor: pointer;
  font-weight: bold;
`;

const ProjectTab = ({ title, imagesData, paragraphs }) => {
  return (
    <ProjectPresDiv>
      <ProjectTitle>{title}</ProjectTitle>
      <CarouselContainer>
        <Carousel data={imagesData} />
      </CarouselContainer>
      <ProjectParagraphDiv>
        {paragraphs.map((content, index) => {
          if (typeof content === "object" && content.type === "link") {
            return (
              <VisitSite key={index}>
                {content.text}{" "}
                <WebLink
                  href={content.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.linkText}
                </WebLink>
                <br />
              </VisitSite>
            );
          }

          return <ProjectParagraph key={index}>{content}</ProjectParagraph>;
        })}
      </ProjectParagraphDiv>
    </ProjectPresDiv>
  );
};

export default ProjectTab;
