import * as React from 'react';
// import { Header } from '../children/Header';

class UserPhoto extends React.Component {
    render() {
        return(
<div id="about" className="section-padding">
   <div className="container">
      <div className="row">
          <div className="col-6 col-md-4">
             <h1 className="firstname">FIRST</h1>
          </div>
          <div className="col-6 col-md-4">
              <img src="img/profile-placeholder.png" className="img-responsive" />
          </div>
          <div className="col-6 col-md-4">
              <h1 className="lastname">LAST</h1>
          </div>
        </div>
    </div>
</div>
          
        );
    }
}

export { UserPhoto };