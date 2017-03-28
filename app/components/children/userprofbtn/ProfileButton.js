import * as React from 'react';
import { ProfileForm } from './ProfileForm';
import { notification } from 'antd';
import { Modal } from 'react-bootstrap';
import * as axios from 'axios'; // axios should be replaced with helpers
import { helpers } from '../../utils/helpers';
import Auth from '../../../modules/localAuth';

class ProfileButton extends React.Component {
        handleClick(event) {
            event.preventDefault();
            // this.setState({formVisible: !this.state.formVisible});
            this.setState({showModal: !this.state.showModal});
        }
        // Initial State       
        componentWillMount() {
            this.setState({
                showModal: false
            });
        }
        close() {
            this.setState({ showModal: false });
        }
        open() {
            this.setState({ showModal:true });
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
        updateProfile(postObj) {
            var id = this.state.id;
            console.log('this is userid', id);
            // this.startLoading();
            helpers.updateUserProfile(id, postObj).then((profile) => {
                console.log('Post Form Success!');
                //profile is the response object returned after mongoose
                console.log(profile.data);
                // this.setState({
                //     profileimg: profile.data.profileimg,
                //     bio: profile.data.bio,
                //     detail: profile.data.detail,
                //     title: profile.data.title
                // });
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
        getUserId(){

            const xhr = new XMLHttpRequest();
            xhr.open('get', '/api/userprofile');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            // set the authorization HTTP header
            xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
            xhr.responseType = 'json';
            xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                console.log(xhr.response);
                this.setState({
                id: xhr.response._id,
                profileimg: xhr.response.profileimg,
                bio: xhr.response.bio,
                detail: xhr.response.detail,
                title: xhr.response.title
            });
            console.log(this.state);
            }
            });
            xhr.send();

        }
        componentDidMount(){

            this.getUserId();

        }
        render() {
            return (
                <div>
                <center>
                    <button
                        onClick={() => this.open()}
                        className="btn edit-me" 
                        id="userProfileForm" 
                        type="submit"
                        name="contact"
                    >
                    Edit My Profile
                    </button>
                </center>
                
                    <Modal show={this.state.showModal} onHide={() => this.close()}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        {
                        <Modal.Body>
                        <ProfileForm 
                        loading={this.state.loading} 
                        submitAction={(postObj) => this.updateProfile(postObj)} 
                        id = {this.state.id}
                        profileimg = {this.state.profileimg}
                        bio = {this.state.bio}
                        detail =  {this.state.detail}
                        title = {this.state.title}
                        />
                        {/*: null */}
                        
                        </Modal.Body>
                        }
                        <Modal.Footer>
                            <button className="close-button" onClick={() => this.close()}>Close</button>
                        </Modal.Footer>
                    </Modal>
                
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