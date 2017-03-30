import * as React from 'react';
import { Header } from '../children/Header';
import { Form } from '../children/Form';
// import { notification } from 'antd';
import * as axios from 'axios'; // axios should be replaced with helpers
import { helpers } from '../utils/helpers';
import Auth from '../../modules/localAuth';
import { Router } from 'react-router';

class CreateProject extends React.Component {

  // Create Post User Feedback

  startLoading() {
    this.setState({
      loading: true
    });
  }

  endLoading() {
    this.setState({
      loading: false
    });
  }

  redirectToPosts() {
    // console.log(÷);
    this.props.router.push('/projects');
    
  }

  // sendSuccessNotification() {
  //   notification['success']({
  //     message: 'Yayyy!!',
  //     description: 'Your post has been created.',
  //   });
  // }

  // sendErrorNotification() {
  //   notification['error']({
  //     message: 'Uh Oh',
  //     description: 'Something went wrong, please try again.',
  //   });
  // }

  // Data Request Methods

  postform(postObj) {
    // console.log('Hit create Project component');
    this.startLoading();
    // axios.post("/projects/new", { postObj });

    helpers.postProject(postObj).then(() => {
        // console.log('Post Form Success!');
        // this.sendSuccessNotification();
        this.endLoading();
        this.redirectToPosts();
        // Loading icon
        // Redirect to explore page - > project 
        //Need notification 
        // this.redirectToPosts();
      })
      .catch((error) => {
        // console.log('Error With Post Form Project')
        // console.log(error);
        // this.sendErrorNotification();
        this.endLoading();
        console.log(error);
      });
  }

  // Setting Initial State

  initializeState() {
    this.setState({
      loading: false,
      currentid: ''
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  
  componentDidMount(){

   	const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/projects/user');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // console.log(xhr.response.currentid);
        this.setState({
          currentid: xhr.response._id
        });
        // console.log(this.state.currentid);
      }
    });
    xhr.send();

    }

  render() {
    return (
      <div id="blackbg-banner">
        <Header />
        <h2 className="newposts-heading">Find Your <span className="pink-tribe">Tribe</span></h2>
        <Form
          loading={this.state.loading}
          submitAction={(postObj) => this.postform(postObj)}
        />
      </div>
    )
  }
}

// PostForm contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.
// PostForm.contextTypes = {
//   router: React.PropTypes.any
// };

export default CreateProject;
