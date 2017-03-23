import * as React from 'react';
// import { Header } from '../children/Header';

class UserConnectBtn extends React.Component {
    render() {
        return(
            <div>
                 <button className="button-medium" id="contact-submit" type="submit" name="contact">Connect</button>
            </div>
          
        );
    }
}

export { UserConnectBtn };