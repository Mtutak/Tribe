import * as React from 'react';

class UserJob extends React.Component {
    render() {
        return(
           <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="section-title">
                        <h2 className="head-title">Job Description</h2>
                        {/*Need to grab this job description from either the input form at login or from passport...*/}
                        <hr className="botm-line" />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export { UserJob };