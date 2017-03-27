import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Header } from '../children/Header';
import ApiService from '../utils/helpers';
import Auth from '../../modules/localAuth';
import { Link } from 'react-router';

class Connections extends React.Component {
    
    initializeState() {

      this.setState({
        connectionsMade: [],
        connectionsAvailable: []
      });
    }

    componentWillMount() {
      this.initializeState();
    }

    getUsersConnections(){

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/connections/made');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          connectionsMade: xhr.response.connectionsMade
        });
      }
    });
    xhr.send();

    }

    getAvailableConnections(){

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/connections/available');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          connectionsAvailable: xhr.response.connectionsAvailable
        });
      }
    });
    xhr.send();

    }

    componentDidMount(){

      this.getUsersConnections();
      this.getAvailableConnections();

    }

    render() {
        return(
        	<div>
            <Header />
            <div id="blackbg-banner" className="section-padding">
                <div className="container text-center">
                        <h3 className="title">Connections You've Made</h3>
                </div>
	        <Card className="container card-container">
		           
		         {this.state.connectionsMade.map(function(search, i) {
	                return (
	                  <div key={search.id}>

	    	              		 
	    	              		 <Link 
                            to={
                                { 
                                  pathname: '/friendsProfile/query', 
                                  query: { 
                                    friend: search._id 
                                  } 
                                }
                              } 
                            activeClassName='active' >

                            <h2 className="connections-name">{search.name}</h2>

                            </Link>

	    	              		 <h4 className="connections-email">{search.email}</h4>

	                      <br />
	                    </div>
	                );
	              })}


	        </Card>

                <div className="container text-center">
                        <h3 className="title">Connections Around You</h3>
                </div>

          <Card className="container">
               
             {this.state.connectionsAvailable.map(function(search, i) {
                  return (
                    <div key={search.id}>

                           
                           <Link 
                            to={
                                { 
                                  pathname: '/friendsProfile/query', 
                                  query: { 
                                    friend: search._id 
                                  } 
                                }
                              } 
                            activeClassName='active' >

                            <h2>{search.name}</h2>

                            </Link>

                           <h4>{search.email}</h4>

                        <br />
                      </div>
                  );
                })}


          </Card>
	        </div>
        </div>
        );
    }
}

export default Connections;