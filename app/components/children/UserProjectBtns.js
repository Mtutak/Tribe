import * as React from 'react';
// import { Header } from '../children/Header';

class UserProjectBtns extends React.Component {
    render() {
        return(
            <div>
                <br />
                 <button className="button-medium my-projects-btn" id="contact-submit" type="submit" name="contact">My Projects</button>
                 <br />
                 <button className="button-medium all-projects-btn" id="contact-submit" type="submit" name="contact">All Projects</button>
            </div>
          
        );
    }
}

export { UserProjectBtns };