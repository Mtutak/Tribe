import * as React from 'react';
import { Header } from '../children/Header';
import { UserPhoto } from '../children/UserPhoto';
import { UserJob } from '../children/UserJob';
import { UserConnectBtn } from '../children/UserConnectBtn';
import { UserDescription } from '../children/UserDescription';

class UserProfile extends React.Component {
    render() {
        return(
        <div>
            <Header />
            <UserPhoto />
            <UserConnectBtn />
            <br />
            <UserJob />
            <UserDescription />
        </div>
        );
    }
}

export default UserProfile;