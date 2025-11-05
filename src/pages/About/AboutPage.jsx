import sara3 from "../../images/sara3.jpg";
import styled, { keyframes } from 'styled-components';
import CloseButton from "../../components/CloseButton";

const moveFromLeft = keyframes`
    from { 
        transform: translateX(-100%); 
    }
`;

const AboutPageDiv = styled.div`
    z-index: 9999;
    background-color: #ebebd3;
    width: 100%;
    height: 100%;
    position: absolute;
    display: grid;
    font-family: "PT Sans", sans-serif;
    border: solid 4px #083d77;
    animation: ${moveFromLeft} 0.6s ease both; /* Applying the entrance animation */
    overflow-x: hidden;

    /* Responsive: Tablets (max-width: 768px) */
    @media only screen and (max-width: 768px) {
        top: 0;
        width: 100%;
        height: 100%;
    }
    /* Responsive: 1280px / 750-1400px height */
    @media only screen and (max-width: 1280px) and (min-height: 750px) and (max-height: 1400px) {
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 40px;
    margin-left: 200px;

    /* Responsive: Mobile (max-width: 600px) */
    @media only screen and (max-width: 600px) {
        margin-left: 15px;
        margin-right: 15px;
    }
     /* Responsive: Tablets (max-width: 768px) */
    @media only screen and (max-width: 768px) {
        margin-left: 30px;
        margin-right: 20px;
    }
    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        margin-left: 0px;
        align-items: center;
    }
`;

const Presentation = styled.div`
    display: grid;
    grid-template-columns: 35% 65%;
    grid-gap: 30px;
    margin: 30px 200px;

    /* Responsive: Mobile (max-width: 600px) */
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        margin-right: 15px;
    }
    /* Responsive: Tablets (max-width: 768px) */
    @media only screen and (max-width: 768px) {
        margin-left: 30px;
        margin-right: 50px;
        margin-bottom: 30px;
    }
    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        display: flex;
        flex-direction: column;
        margin-left: 80px;
        margin-right: 80px;
    }
`;

const SaraImage = styled.div`
    border-right: solid 4px #f4d35e;
    padding-right: 20px;

    /* Responsive: Mobile (max-width: 600px) */
    @media only screen and (max-width: 600px) {
        border-right: none;
        padding-right: 0px;
        border-bottom: 4px solid #f4d35e;
        padding-bottom: 10px;
    }
    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        border-right: none;
        align-self: center;
    }
`;

const SaraImageTag = styled.img`
    max-width: 100%;
    width: 420px;
    height: auto;
    border-radius: 4px;
`;

const PresentationPWrapper = styled.div`
    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        border-top: 4px solid #f4d35e;
        padding-top: 20px;
    }
`;

const AboutH2 = styled.h2`
    font-size: 85px;
    font-family: "Permanent Marker", sans-serif;
    color: #083d77;

    /* Responsive: Mobile (max-width: 600px) */
    @media only screen and (max-width: 600px) {
        font-size: 50px;
    }
`;

const AboutH3 = styled.h3`
    font-size: 60px;
    color: #da4167;
    line-height: 55px;
    margin-bottom: 15px;

    /* Responsive: Mobile (max-width: 600px) */
    @media only screen and (max-width: 600px) {
        font-size: 40px;
        line-height: 35px;
        padding: 10px;
    }
    /* Responsive: Tablets (max-width: 768px) */
    @media only screen and (max-width: 768px) {
        font-size: 50px;
        line-height: 40px;
    }
    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        font-size: 55px;
        align-items: center;
    }
`;

const AboutParagraph = styled.p`
    padding: 10px;
    font-size: 18px;

    /* Responsive: Mid-range (769px - 1060px) */
    @media only screen and (min-width: 769px) and (max-width: 1060px) {
        font-size: 22px;
    }
`;


const AboutPage = () => {


  return (
    <AboutPageDiv>
      <CloseButton />
        <Title>
          <AboutH2>I'm Sara</AboutH2>
        </Title>
        <Presentation>
          <SaraImage>
            <SaraImageTag
              src={sara3}
              alt="Sara with pink background"
              className="sara"
            ></SaraImageTag>
          </SaraImage>
          <PresentationPWrapper>
            <AboutH3>I'm a Front-end Developer</AboutH3>
            <AboutParagraph>
              After 10 years in education, I decided to change my career to the
              tech industry to pursue a new professional challenge and to grow.
              My experience as an educator taught me patience, empathy, and
              organizational skills, and gave me extensive practice in effective
              communication and collaborative problem-solving.
            </AboutParagraph>
            <AboutParagraph>
              My professional background also instilled in me the curiosity and
              persistence necessary for continuous learning, and this drives me
              to challenge myself in a completely new environment where I
              discovered I really enjoy coding.
            </AboutParagraph>
            <AboutParagraph>
              Since September 2023 I've been learning software development and
              nowadays I am proficient HTML, CSS, Javascript languages and the
              React framework. I took some courses about Wordpress, SEO and GIT.
              I have also started working with the Angular framework and with
              TypeScript and I’m now working on a mobile app using React Native.
              To grow into a full-stack developer, I have begun studying backend
              development, in particular Node.js and Express.js.
            </AboutParagraph>
			<AboutParagraph>
              I really enjoy what I'm learning and what I'm doing, so I can't
              wait for the next challenge it will come.
            </AboutParagraph>
          </PresentationPWrapper>
        </Presentation>
    </AboutPageDiv>
  );
};

export default AboutPage;
