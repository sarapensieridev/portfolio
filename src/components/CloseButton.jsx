import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import close from "../images/close.png";

const moveToLeft = keyframes`
    to { 
        transform: translateX(-100%); 
    }
`;
const StyledCloseButton = styled.button`
  -webkit-animation: ${moveToLeft} 0.6s ease both; /* Including -webkit prefix for older browser compatibility */
  animation: ${moveToLeft} 0.6s ease both;
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 10000;
  background: transparent;
  border: none;
  padding: 0; /* Remove default button padding */
  cursor: pointer;
  & img {
    width: 30px; /* Adjust size of your close icon */
    height: 30px;
  }
`;
const CloseButton = () => {
  const navigate = useNavigate();
  const closeWindow = () => {
    navigate(-1);
  };

  return (
    <StyledCloseButton onClick={closeWindow}>
      <img src={close} className="close" alt="close-tag"></img>
    </StyledCloseButton>
  );
};

export default CloseButton;
