import * as React from 'react';
import { Header } from './Header';
import { UserPhoto } from './UserPhoto';
import { UserJob } from './UserJob';
import { UserConnectBtn } from './UserConnectBtn';
import { UserDescription } from './UserDescription';
import { UserProjectBtns } from './UserProjectBtns';
import Auth from '../../modules/localAuth';
import { Link } from 'react-router';

class FriendsProfileComponents extends React.Component {
    initializeState() {

      this.setState({
              friendsName: '',
              friendsEmail: ''
      });
    }

    componentWillMount() {
      this.initializeState();
    }

    getFriendsInfo(){
        const who = this.props.location.query.friend;

        const xhr = new XMLHttpRequest();
        xhr.open('post', '/api/friendsInfo');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            console.log(xhr.response);
            this.setState({
              friendsName: xhr.response.name,
              friendsEmail: xhr.response.email
            });
          }
        });
        xhr.send('id='+who);  

        // this.setState({
        //     who:this.props.location.query.friend
        // });
    }



    componentDidMount(){
        this.getFriendsInfo();

    }

    render() {
        return(
        <div>
            <Header />

            <div id="about" className="section-padding">
               <div className="container">
                  <div className="row">
                     <div className="page-title text-center">
                        <h1>My Profile</h1>
                        <hr className="pg-titl-bdr-btm">
                        </hr>
                     <center><img src="img/agent2.jpg" className="img-responsive" /></center>
                     <center><p className="name-style">{this.state.friendsName}</p></center>
                     <hr className="pg-titl-bdr-btm" />
                  </div>
               </div>
            </div>
            </div>


            <div>
                 <button className="button-medium" id="contact-submit" type="submit" name="contact">Connect</button>
            </div>
            <br />


            <div className="page-title text-center">
                        <h1 className="line-adjustment">Job Title</h1>
            </div> 
                       

            <div>
                <center><h3 className="line-adjustment description-style">This is what I do and what kind of people I am looking to connect with.</h3></center>
            </div>
            <br />

            <div>
                <br />
                 <button className="button-medium my-projects-btn" id="contact-submit" type="submit" name="contact">My Projects</button>
                 <br />
                 <Link to="/projects"><button className="button-medium all-projects-btn" id="contact-submit" type="submit" name="contact">All Projects</button></Link>
            </div>
        </div>
        );
    }
}

export default FriendsProfileComponents;