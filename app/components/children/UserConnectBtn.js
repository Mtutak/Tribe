import * as React from 'react';
import { Link } from 'react-router';
// import { Header } from '../children/Header';

class UserConnectBtn extends React.Component {
    render() {
        return(
            <div>
             <center><Link to="#" className="btn connect-me">Connect <i className="fa fa-handshake-o"></i></Link></center>
            </div>
          
        );
    }
}

export { UserConnectBtn };