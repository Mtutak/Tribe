import * as React from 'react';
import { Link } from 'react-router';
var axios = require('axios');


class LoginButton extends React.Component {
  onClick(event){
  event.preventDefault();	
  	console.log("this button is working");
  	// axios.get('/login/facebook');
  }

  render() {
    return (

	    	<a
	    	href='/login/facebook' 
	    	onClick={(event) => {this.onClick(event);}}
	    	activeClassName='active'>
	    		Login
	    	</a>

    );
  }
}

export { LoginButton };