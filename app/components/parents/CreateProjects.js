import * as React from 'react';
import { Header } from '../children/Header';
import { Form } from '../children/Form';
import { notification } from 'antd';
// import * as axios from 'axios'; not needed replaced with helpers
import helpers from '../utils/helpers';

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
    this.context.router.push('posts');
  }

  sendSuccessNotification() {
    notification['success']({
      message: 'Yayyy!!',
      description: 'Your post has been created.',
    });
  }

  sendErrorNotification() {
    notification['error']({
      message: 'Uh Oh',
      description: 'Something went wrong, please try again.',
    });
  }

  // Data Request Methods

  postform(postObj) {
    this.startLoading();
    helpers.postProject(postObj)
      .then(() => {
        console.log('Post Form Success!');
        this.sendSuccessNotification();
        this.endLoading();
        this.redirectToPosts();
      })
      .catch((error) => {
        console.log('Error With Post Form Project')
        this.sendErrorNotification();
        this.endLoading();
      });
  }

  // Setting Initial State

  initializeState() {
    this.setState({
      loading: false
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }

  render() {
    return (
      <div>
        <Header />
        <h2>New Posts</h2>
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
