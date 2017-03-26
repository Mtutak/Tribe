import * as React from 'react';
import { Header } from '../children/Header';
import Auth from '../../modules/localAuth';
import { Link } from 'react-router';
import { ProfileButton } from '../children/userprofbtn/ProfileButton';

class UserProfile extends React.Component {
    initializeState() {

      this.setState({
              myFirstName: '',
              myLastName:'',
              myEmail: ''
      });
    }

    componentWillMount() {
      this.initializeState();
    }

    getMyInfo(){
        const who = this.props.location.query.friend;

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/myInfo');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            const nameArray = xhr.response.name.split(' ');

            this.setState({
              myFirstName: nameArray[0],
              myLastName: nameArray[1],
              myEmail: xhr.response.email
            });

          }
        });
        xhr.send();  

        // this.setState({
        //     who:this.props.location.query.friend
        // });
    }



    componentDidMount(){
        this.getMyInfo();

    }

    render() {
        return(
        <div>
            <Header />
            <div id="blackbg-banner" className="section-padding">
                <div className="container">

                    <div id="about" className="section-padding">
                       <div className="container">
                          <div className="row">
                              <div className="col-6 col-md-4">
                                 <h1 className="firstname">{this.state.myFirstName}</h1>
                              </div>
                              <div className="col-6 col-md-4">
                                 <center><img src="/img/profile-placeholder.png" className="img-responsive img-style" /></center>
                              </div>
                              <div className="col-6 col-md-4">
                                  <h1 className="lastname">{this.state.myLastName}</h1>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="page-title text-center">
                                <h1 className="line-adjustment job-style">Job Title</h1>
                    </div>

                    <div>
                        <center><h3 className="line-adjustment description-style">This is what I do and what kind of people I am looking to connect with.</h3></center>
                    </div>

                    <hr />

                    <div>
                        <center><Link to="#" className="btn projects-me">My Projects <i className="fa fa-star-o"></i></Link></center>
                    </div>

                    <ProfileButton />

                </div>
            </div>
        </div>
        );
    }
}

export default UserProfile;