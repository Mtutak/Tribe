import * as React from 'react';
import { ProfileForm } from './ProfileForm';
import { notification } from 'antd';
import { Modal } from 'react-bootstrap';
import * as axios from 'axios'; // axios should be replaced with helpers
import helpers from '../../utils/helpers';
import Auth from '../../../modules/localAuth';
class ProfileButton extends React.Component {
        handleClick(event) {
            event.preventDefault();
            // this.setState({formVisible: !this.state.formVisible});
            this.setState({showModal: !this.state.showModal});
        }
       // Initial State
       initializeState() {
           return { showModal: false };
       }
       constructor(props) {
            super(props);
            this.state = {
                showModal: false
            };
        }
       close() {
           this.setState({ showModal: false });
       }
       open() {
           this.setState({ showModal:true });
       }
        // initializeState() {
        //     this.setState({ formVisible: false});
        // }
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
           <center><button 
                /*onClick={(event) => this.handleClick(event)} */
                onClick={() => this.setState({ showModal: true})}
                className="btn edit-me" 
                id="userProfileForm" 
                type="submit"
                name="contact"
            >
            Edit My Profile
            </button></center>
           {
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit your Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   ? <ProfileForm loading={this.state.loading} submitAction={(postObj) => this.postform(postObj)} />
                   : null 
                </Modal.Body>
            </Modal>
           }
        </div>
           /*{
            /*this.state.formVisible*/
            /*this.state.showModal
                ? <ProfileForm loading={this.state.loading} submitAction={(postObj) => this.postform(postObj)}/>
                : null
            }
        </div>*/
        );
    }
}
export  { ProfileButton };