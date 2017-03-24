import * as React from 'react';
// import { Header } from '../children/Header';

class UserPhoto extends React.Component {
    render() {
        return(
<div id="content" className="col-lg-10 col-sm-11">
    <div className="row-profile">
        <div className="col-sm-3">
            <div className="row">
                <div className="col-md-12 col-md-offset-6">
                    <img className="profile-image" src="img/agent2.jpg" />
                </div>
             </div>
        </div>
    </div>
</div>
/*<div id="about" className="section-padding">
   <div className="container">
      <div className="row">
         <div className="page-title text-center">
            <h1>My Profile</h1>
            <hr className="pg-titl-bdr-btm">
            </hr>
         <center><img src="img/agent2.jpg" className="profile-image" /></center>
         <center><p className="name-style">Name Here</p></center>
         <hr className="pg-titl-bdr-btm" />
      </div>
   </div>
</div>
</div>*/
          
        );
    }
}

export { UserPhoto };