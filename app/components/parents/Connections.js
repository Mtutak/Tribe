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
        connectionsAvailable: [],
        connectionsPending: []
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

    getPendingConnections(){

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/connections/pending');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          connectionsPending: xhr.response.pendingConnections
        });
      }
    });
    xhr.send();

    }

    componentDidMount(){

      this.getUsersConnections();
      this.getPendingConnections();
      this.getAvailableConnections();

    }

    render() {
        return(
        	<div>
            <Header />
                <div className="container text-center">
                        <h3 className="title">Connections You've Made</h3>
                </div>
	        <Card className="container">
		           
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

                            <h2>{search.name}</h2>

                            </Link>

	    	              		 <h4>{search.email}</h4>

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

                <div className="container text-center">
                        <h3 className="title">Connections Awaiting Meetup</h3>
                </div>

          <Card className="container">
               
             {this.state.connectionsPending.map(function(search, i) {
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

                            <Link 
                            to={
                                { 
                                  pathname: '/connections/query', 
                                  query: { 
                                    friend: search._id 
                                  } 
                                }
                              } 
                            activeClassName='active' > 
                              <h5>LINK UP!</h5>
                            </Link>
                        <br />
                      </div>
                  );
                })}


          </Card>

          {this.props.children}

	        </div>
        );
    }
}

export default Connections;