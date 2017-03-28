import * as React from 'react';
import { ProfileForm } from './ProfileForm';
import { notification } from 'antd';
import * as axios from 'axios'; // axios should be replaced with helpers
import helpers from '../../utils/helpers';
import Auth from '../../../modules/localAuth';

class ProfileButton extends React.Component {
        handleClick(event) {
            event.preventDefault();
            this.setState({formVisible: !this.state.formVisible});
        }
       // Initial State

        initializeState() {
            this.setState({ formVisible: false});
        }

        // Lifecycle Methods

        componentWillMount() {
            this.initializeState();
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
            axios.post("/projects/new", { postObj });

            // helpers.postProject(postObj).then(() => {
            //     console.log('Post Form Success!');
            //     this.sendSuccessNotification();
            //     this.endLoading();
            //     this.redirectToPosts();
            //   })
            //   .catch((error) => {
            //     console.log('Error With Post Form Project')
            //     this.sendErrorNotification();
            //     this.endLoading();
            //   }).bind(this);
        }
    render() {
        return (
        <div>
            <button 
                onClick={(event) => this.handleClick(event)} 
                className="button-medium" 
                id="userProfileForm" 
                type="submit" 
                name="contact"
                data-toggle="modal"
                data-target="#exampleModal"
            >
            Edit My Profile
            </button>
            {
            this.state.formVisible
                ? <ProfileForm loading={this.state.loading} submitAction={(postObj) => this.postform(postObj)}/>
                : null
            }
        </div>
        )
    }
}



export  { ProfileButton };