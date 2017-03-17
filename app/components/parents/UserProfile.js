import * as React from 'react';

class UserProfile extends React.Component {
    render() {
        return(
        <div>
            <Headers />
            <UserPhoto />
            <UserJob />
            <UserConnectBtn />
            <UserDescription />
            <UserProjectBtn />
            <CreateBtn />
        </div>
        );
    }
}

export { UserProfile };