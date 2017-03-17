import * as React from 'react';
import { Header } from '../children/Header';
import { UserPhoto } from '../children/UserPhoto';
import { UserJob } from '../children/UserJob';
import { UserDescription } from '../children/UserDescription';

class UserProfile extends React.Component {
    render() {
        return(
        <div>
            <Header />
            <UserPhoto />
            <UserJob />
            <UserDescription />
        </div>
        );
    }
}

export { UserProfile };