import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () =>  {

		return(
  			<div className="main" id="contacts-main">
          		<Link to="/contacts" id="link-contacts" className="link"><h1>CONTACTS</h1></Link>
			</div>
		)
	}

export default Contacts