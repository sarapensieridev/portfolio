import React from 'react';
import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";
import linkedin from "./linkedin.png"
import github from "./github.png"


const ContactsPage = () => {

	  const textRef = useRef();

	const copyToClipboard = () => {
    let copyText = textRef.current.value;
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  	};

	return (
		<div  className="contacts-page">
			<div className="formulario">
				<h2>Contact Me</h2>
				<form id="form" className="contact-form">
					<label for="name" id="form-name" className="form-label">Name</label>
					<input className="form-input"></input>
					<label for="email" id="form-email" className="form-label">Email</label>
					<input className="form-input"></input>
					<label for="message" id="form=message" className="form-label">Message</label>
					<textarea placeholder="Text here" required className="message-area"></textarea>
					<button className="form-button">Submit</button>
				</form>
			</div>
			<div className="social">
			   <div className="social-div">
				<h2 className="social-1">Get In Touch</h2>
				<div className="social-mail">
					<h3 className="social-2">Write me</h3> 
					  	<div className="mail">
					  	<input
					  	className="social-input"
        				value="sarapensieri@gmail.com"
        				disabled
        				type="text"
        				ref={textRef}
      					/>
						<button className="social-button" onClick={copyToClipboard}>Copy</button>
						</div>
				</div>
				<div className="social-phone">
					<h3 className="social-2">Call me</h3> 
					<div className="numbers">
						<p className="social-3"> +34 684156776 </p>
						<p className="social-3"> +39 3358447586 </p>
					</div>
				</div> 
				<div className="social-linkedin">
					<h3 className="social-2">Follow me</h3>  
					<div className="img-div">
						<a href="www.linkedin.com/in/sara-pensieri-a7852355" target="_blank"><img src={linkedin} loading="lazy" alt="linkedin-logo" className="linkedin-img"></img></a>
						<a href="https://github.com/SaraPens123" target="_blank"><img src={github} loading="lazy" alt="github-logo" className="github-img"></img></a>
					</div>
				</div>
			   </div>
			</div>
		</div>
	)
}

export default ContactsPage;