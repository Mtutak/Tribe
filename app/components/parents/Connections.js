import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Header } from '../children/Header';
import ApiService from '../utils/helpers';
import Auth from '../../modules/localAuth';

class Connections extends React.Component {
    
    initializeState() {
      // ApiService.getUsersConnections().then(function(response) {
      //           console.log(response);
      //           // if(JSON.stringify(response.data) !== '[]'){

      //           //   // console.log("resultsComponent was updated");
      //           //   console.log(response.data);
      //           //   this.props.saveThis(response.data);
      //           // }
      //         }.bind(this));


      this.setState({
        connections: []
      });
    }

    componentWillMount() {
      this.initializeState();
    }

    componentDidMount(){

   	const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/connections');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          connections: xhr.response.connections
        });
        console.log(this.state.connections);
      }
    });
    xhr.send();

    }

    render() {
        return(
        	<div>
            <Header />
                <div className="container text-center">
                        <h3 className="title">Connections You've Made</h3>
                </div>
	        <Card className="container">
		           
		         {this.state.connections.map(function(search, i) {
	                return (
	                  <div key={search.id}>

	    	              		 
	    	              		 <h2>{search.name}</h2>
	    	              		 <h4>{search.email}</h4>

	                      <br />
	                    </div>
	                );
	              })}


	        </Card>
	        </div>
        );
    }
}

export default Connections;