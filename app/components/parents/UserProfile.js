import * as React from 'react';
import { Header } from '../children/Header';
import { UserPhoto } from '../children/UserPhoto';
import { UserJob } from '../children/UserJob';
import { UserConnectBtn } from '../children/UserConnectBtn';
import { UserDescription } from '../children/UserDescription';
import { UserProjectBtns } from '../children/UserProjectBtns';

class UserProfile extends React.Component {
    render() {
        return(
        <div>
    <div id="blackbg-banner" className="section-padding">
		<div className="container">
			<div className="row">
                <Header />
                <UserPhoto />
                <UserConnectBtn />
                <br />
                <UserJob />
                <UserDescription />
                <br />
                <UserProjectBtns />
			</div>
			</div>
		</div>
	</div>
	
        );
    }
}

export default UserProfile;