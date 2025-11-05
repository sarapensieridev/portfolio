import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () =>  {

		return(
  			<div className="component" id="contacts-main">
          		<Link to="/contacts" id="link-contacts" className="link"><h1>CONTACT</h1></Link>
			</div>
		)
	}

export default Contacts