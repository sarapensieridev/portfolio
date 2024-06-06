import React from 'react';
import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";

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
					<label for="name" id="form-name" className="name-form">Name</label>
					<input></input>
					<label for="email" id="form-email" className="email-form">Email</label>
					<input></input>
					<label for="message" id="form=message" className="message-form"></label>
					<textarea placeholder="Text here" required className="message-area"></textarea>
					<button className="form-button">Submit your request</button>
				</form>
			</div>
			<div className="social">
				<h2>Get in touch with me</h2>
				<h3>You can write me to: 
					  	<input
        				value="sarapensieri@gmail.com"
        				disabled
        				type="text"
        				ref={textRef}
      					/>
						<button onClick={copyToClipboard}>Copy</button>
				</h3>
				<h3>You can call me 
					<h4> +34 684156776 </h4>
					<h4> +39 3358447586 </h4>
				</h3> 
				<h3>You can follow me  
				<a href="www.linkedin.com/in/sara-pensieri-a7852355" target="_blank"><img src="/home/lucho/Desktop/Programming/react-project/portfolio-sara/src/images/60ee32414a2efc28ae4a2963_icon-linkedin.svg" loading="lazy" alt="linkedin-logo"></img></a>
				</h3>
			</div>
		</div>
	)
}

export default ContactsPage;