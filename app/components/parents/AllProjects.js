import * as React from 'react';
import { Header } from '../children/Header';
import { Card, CardText } from 'material-ui/Card';
import  { helpers } from '../utils/helpers';
import Auth from '../../modules/localAuth';
import { Link } from 'react-router';

class AllProjects extends React.Component {
    initializeState() {

      this.setState({
        allProjects: [],
      });
    }

    componentWillMount() {
      this.initializeState();
    }

    getAllProjects(){

        helpers.getAllProjects().then((res) => {
          console.log(res.data);
          this.setState({
          allProjects: res.data
        });
      })
      .catch((error) => {
        console.log('Error with Getting All Projects')
        console.log(error);
      });

    }

    componentDidMount(){

      this.getAllProjects();

    }

    render() {
        return(
        <div>
            <Header />
            <div id="blackbg-banner" className="section-padding">
                <div className="container text-center">
                        <h3 className="title all-projects-heading">All Projects</h3>
                </div>
            
	        <Card className="container card-container">
		           <div className="row">
                 <div className="col-lg-12">
                   <div className="row">
		         {this.state.allProjects.map(function(search, i) {
	                return (
                    <div className="col-lg-4" id="post-box" >
	                  <div key={search.creator}>
                      <Link to={
                        {
                          pathname: '/friendsProfile/query',
                          query: {
                            friend: search.creator
                          }
                        }
                      }
                      activeClassName='active' >
                            <h2 className="project-title">{search.title}</h2>
                        </Link>
                            <i><h2 className="project-location">{search.location}</h2></i>
                            <h2 className="project-summary">WANTED: {search.summary}</h2>
                            <h2 className="project-details">{search.detail}</h2>
	                      <br />
	                    </div>
                    </div>
                  
                  
	                );
	              })}
                </div>
                </div>
                </div>
	        </Card>
        </div>
        </div>
        );
    }
}

export default AllProjects;