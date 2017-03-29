import * as React from 'react';
import { ProfileForm } from './ProfileForm';
// import { notification } from 'antd';
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
                        loading={this.props.loading} 
                        submitAction={(postObj) => this.props.submitAction(postObj)} 
                        id = {this.props.id}
                        profileimg = {this.props.profileimg}
                        bio = {this.props.bio}
                        detail =  {this.props.detail}
                        title = {this.props.title}
                        />
                        {/*: null */}
                        
                        </Modal.Body>
                        }
                        <Modal.Footer>
                            <button className="close-button" onClick={() => this.close()}>Close</button>
                        </Modal.Footer>
                    </Modal>
                
                </div>
            
            );
        }
}


export  { ProfileButton };