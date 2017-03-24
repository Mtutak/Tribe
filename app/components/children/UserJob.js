import * as React from 'react';

class UserJob extends React.Component {
    render() {
        return(
        <div className="col-xs-5 col-sm-12">
            <h3>General Information</h3>
            <ul className="profile-details">
                <li>
                    <div>
                        <i className="fa fa-briefcase"></i>
                    "job"
                    </div>
                    "Graphic Designer"
                </li>
                <li>
                    <div>
                        <i className="fa fa-building-o"></i>
                    "company"
                    </div>
                    "Shoelaces Inc."
                </li>
            </ul>
        </div>


        /*<div className="page-title text-center">
					<h1 className="line-adjustment">Job Title</h1>
		</div>*/
        );
    }
}

export { UserJob };