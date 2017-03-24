import * as React from 'react';
import { Link } from 'react-router';

class UserProjectBtns extends React.Component {
    render() {
        return(
            <div>
                <br />
                 <button className="button-medium my-projects-btn" id="contact-submit" type="submit" name="contact">My Projects</button>
                 <br />
                 <Link to="/projects"><button className="button-medium all-projects-btn" id="contact-submit" type="submit" name="contact">All Projects</button></Link>
            </div>
          
        );
    }
}

export { UserProjectBtns };