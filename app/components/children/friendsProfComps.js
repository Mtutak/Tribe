// import * as React from 'react';
// import { Header } from './Header';
// import Auth from '../../modules/localAuth';
// import { Link } from 'react-router';
// // import { ProfileButton } from './userprofbtn/ProfileButton';

// class FriendsProfileComponents extends React.Component {
//     initializeState() {

//       this.setState({
//               friendsFirstName: '',
//               friendsLastName:'',
//               friendsEmail: '',
//               profileimg: '',
//               bio: '',
//               detail: '',
//               title: '',
//               location: ''

//       });
//     }

//     componentWillMount() {
//       this.initializeState();
//     }

//     addToPendingConnections(event) {
//         const who = this.props.location.query.friend;

//         const xhr = new XMLHttpRequest();
//         xhr.open('post', '/api/friendRequest');
//         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         // set the authorization HTTP header
//         xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
//         xhr.responseType = 'json';
//         xhr.send('id='+who); 
//     }

//     getFriendsInfo(){
//         const who = this.props.location.query.friend;

//         const xhr = new XMLHttpRequest();
//         xhr.open('post', '/api/friendsInfo');
//         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         // set the authorization HTTP header
//         xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
//         xhr.responseType = 'json';
//         xhr.addEventListener('load', () => {
//           if (xhr.status === 200) {
//             const nameArray = xhr.response.name.split(' ');

//             this.setState({
//               friendsFirstName: nameArray[0],
//               friendsLastName: nameArray[1],
//               friendsEmail: xhr.response.email,
//               profileimg: xhr.response.profileimg,
//               bio: xhr.response.bio,
//               detail: xhr.response.detail,
//               title: xhr.response.title,
//               location: xhr.response.location
//             });

//           }
//         });
//         xhr.send('id='+who);  
//     }



//     componentDidMount(){
//         this.getFriendsInfo();

//     }

//     render() {
//         return(

//         <div>
//             <Header />
//             <div id="user-bg" className="section-padding">
//                 <div className="container">

//                     <div id="about" className="section-padding">
//                        <div className="container">
//                           <div className="row">
//                               <div className="col-6 col-md-4">
//                                  <h1 className="firstname">{this.state.friendsFirstName}</h1>
//                               </div>
//                               <div className="col-6 col-md-4">
//                                 <div className="image-cropper">
//                                     <center><img src={this.state.profileimg} className="img-responsive img-style img-main rounded" /></center>
//                                 </div>
//                               </div>
//                               <div className="col-6 col-md-4">
//                                   <h1 className="lastname">{this.state.friendsLastName}</h1>
//                               </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="page-title text-center">
//                                 <h1 className="line-adjustment job-style">{this.state.title}</h1>
//                     </div>

//                     <div>
//                         <center><h3 className="line-adjustment description-style-line">{this.state.bio}</h3></center>
//                     </div>

//                     <hr />

//                     <div>
//                      <center><Link onClick={(event) => this.addToPendingConnections(event)} to='/meet' className="btn connect-me">Connect <i className="fa fa-handshake-o"></i></Link></center>
//                     </div>

//                     <div>
//                         <center><Link to="#" className="btn projects-me">My Projects<i className="fa fa-star-o"></i></Link></center>
//                         <center><h3 className="line-adjustment description-style">{this.state.location}</h3></center>
//                     </div>

//                 </div>
//             </div>
//         </div>

              
//         );
//     }
// }

// export default FriendsProfileComponents;