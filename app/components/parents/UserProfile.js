import * as React from 'react';
import { Header } from '../children/Header';
import { UserPhoto } from '../children/UserPhoto';
import { UserJob } from '../children/UserJob';
import { UserConnectBtn } from '../children/UserConnectBtn';
import { UserDescription } from '../children/UserDescription';
import { UserProjectBtns } from '../children/UserProjectBtns';
import { ProfileButton } from '../children/userprofbtn/ProfileButton';

class UserProfile extends React.Component {
    render() {
        return(
        <div>
            <Header />
            <UserPhoto />
            <UserConnectBtn />
            <ProfileButton />
            <br />
            <UserJob />
            <UserDescription />
            <br />
            <UserProjectBtns />
        </div>
        );
    }
}

export default UserProfile;