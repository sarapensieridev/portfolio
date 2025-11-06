import { toast, ToastContainer } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import CloseButton from "../../components/CloseButton";
import styled, { keyframes } from "styled-components";
import { bgWhite, blue, pink, yellow } from "../../constants";

const moveFromLeft = keyframes`
	from { -webkit-transform: translateX(-100%); }
`;

const ContactsPageDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  background-color: ${bgWhite};
  border: 2px solid ${blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PT Sans", sans-serif;
  animation: ${moveFromLeft} 0.6s ease both;
  overflow: hidden; /* Added to prevent scrollbars during animation */

  @media only screen and (max-width: 768px) and (max-height: 750px),
    only screen and (max-width: 768px) and (min-height: 750px),
    only screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

const SocialSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) and (max-height: 750px) {
    width: 100%; /* Takes full width if YellowScreen is hidden */
  }
`;

const SocialDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  padding: 50px;
  margin-top: 30px;

@media only screen and (max-width: 1024px) and (min-height: 640px){
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-top: 20px;
    gap: 30px;
  }
`;

const SocialH1 = styled.h1`
  font-size: 46px;
  color: ${blue};

  @media only screen and (max-width: 768px) and (max-height: 750px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 768px) and (min-height: 750px) {
    font-size: 30px;
  }
`;

const SocialH2 = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) and (max-height: 750px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 768px) and (min-height: 750px) {
    font-size: 25px;
  }
`;

const SocialMailDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1024px) and (min-height: 640px){
    width: 100%;
    height: 30%;
  }
`;

const SocialPhoneDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  border-right: 3px solid ${yellow};
  border-left: 3px solid ${yellow};

    @media only screen and (max-width: 1024px) and (min-height: 640px){
    width: 100%;
    height: 30%;
    border-right: none;
    border-left: none;
    border-top: 3px solid ${yellow};
    border-bottom: 3px solid ${yellow};
    padding: 30px 0px;

  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;

      @media only screen and (max-width: 1024px) and (min-height: 640px) {
    padding: 10px 0px;
  }
`;

const EmailInputDisplay = styled.input`
  font-size: 20px;
  text-align: center;
  color: ${bgWhite};
  background-color: ${pink};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.1s ease, transform 0.1s ease;

  min-width: 250px;
  height: 50px;
  padding: 0 10px;

  &:hover {
    background-color: ${blue}; /* Subtle hover effect */
    color: ${bgWhite};
    text-decoration: none; /* Remove text decoration if inherited */
  }

  &:active {
    /* Effect when clicked */
    background-color: ${blue};
    transform: translateY(1px);
  }

  @media only screen and (max-width: 768px) and (max-height: 750px),
    only screen and (max-width: 768px) and (min-height: 750px) {
    font-size: 20px;
    min-width: 200px;
  }
`;

const NumberInputDisplay = styled.input`
  font-size: 24px;
  text-align: center;
  color: black;
  background-color: ${bgWhite};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.1s ease, transform 0.1s ease;

  min-width: 200px;
  height: 50px;
  padding: 0 10px;

  &:hover {
    transform: scale(1.1)
  }

  &:active {
    transform: translateY(1px);
  }

  @media only screen and (max-width: 768px) and (max-height: 750px),
    only screen and (max-width: 768px) and (min-height: 750px) {
    font-size: 20px;
    min-width: 200px;
  }
`;

const SocialLinkedinDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  
    @media only screen and (max-width: 1024px) and (min-height: 640px) {
    width: 100%;
    height: 30%;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LinkedinImg = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 15px;

&:hover {
  transform: scale(1.2)
  }

  @media only screen and (max-width: 768px) and (max-height: 750px) {
    width: 80px;
    height: 80px;
  }
`;

const GithubImg = styled.img`
  width: 70px;
  height: 70px;
  margin-left: 15px;

  &:hover {
  transform: scale(1.2)
  }

  @media only screen and (max-width: 768px) and (max-height: 750px) {
    width: 50px;
    height: 50px;
  }
`;

const ContactsPage = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);


  const CONTACTS_DATA = {
    email: "sarapensieri@gmail.com",
    phone1: "+34 684156776",
    phone2: "+39 3358447586",
  };

  useEffect(() => {
    const checkDevice = () => {
      const mobileCheck = window.innerWidth < 768 || "ontouchstart" in window;
      setIsMobileDevice(mobileCheck);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const handleEmailClick = useCallback(() => {
    const email = CONTACTS_DATA.email;
    navigator.clipboard
      .writeText(email)
      .then(() => toast.success(`Email copied: ${email}`))
      .catch(() => toast.error("Failed to copy email."));
  }, [CONTACTS_DATA.email]);

  const handlePhoneClick = useCallback(
    (phoneNumber) => {
      const cleanNumber = phoneNumber.replace(/\s+/g, "");

      if (isMobileDevice) {
        window.location.href = `tel:${cleanNumber}`;
      } else {
        navigator.clipboard
          .writeText(cleanNumber)
          .then(() => toast.success(`Copied phone number: ${phoneNumber}`))
          .catch((err) => {
            console.error("Copy failed:", err);
            toast.error("Copy failed.");
          });
      }
    },
    [isMobileDevice]
  );

  return (
    <ContactsPageDiv>
      <CloseButton />
      <ToastContainer />
      <SocialSection>
        <SocialDiv>
          <SocialH1>Get In Touch</SocialH1>
          <ContactsDiv>
            <SocialMailDiv>
              <SocialH2>Write me</SocialH2>
              <InputDiv>
                <EmailInputDisplay
                  value="sarapensieri@gmail.com"
                  readOnly
                  type="text"
                  onClick={() => handleEmailClick(CONTACTS_DATA.email)}
                />
              </InputDiv>
            </SocialMailDiv>
            <SocialPhoneDiv>
              <SocialH2>Call me</SocialH2>
              <InputDiv>
                <NumberInputDisplay
                  value="+34 684156776"
                  type="text"
                  readOnly
                  onClick={()=>handlePhoneClick(CONTACTS_DATA.phone1)}
                >
                </NumberInputDisplay>
                <NumberInputDisplay
                  value="+39 3358447586"
                  type="text"
                  readOnly
                  onClick={() => handlePhoneClick(CONTACTS_DATA.phone2)}
                >
                </NumberInputDisplay>
              </InputDiv>
            </SocialPhoneDiv>
            <SocialLinkedinDiv>
              <SocialH2>Follow me</SocialH2>
              <ImageDiv>
                <a href="https://www.linkedin.com/in/sara-pensieri-a7852355">
                  <LinkedinImg
                    src={linkedin}
                    loading="lazy"
                    alt="linkedin-logo"
                  ></LinkedinImg>
                </a>
                <a href="https://github.com/sarapensieridev">
                  <GithubImg
                    src={github}
                    loading="lazy"
                    alt="github-logo"
                  ></GithubImg>
                </a>
              </ImageDiv>
            </SocialLinkedinDiv>
          </ContactsDiv>
        </SocialDiv>
      </SocialSection>
    </ContactsPageDiv>
  );
};

export default ContactsPage;
