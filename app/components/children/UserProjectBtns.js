import * as React from 'react';
import { Link } from 'react-router';

class UserProjectBtns extends React.Component {
    render() {
        return(
            <div>
                <center><Link to="#" className="btn projects-me">My Projects <i className="fa fa-star-o"></i></Link></center>
            </div>
          
        );
    }
}

export { UserProjectBtns };