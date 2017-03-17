import * as React from 'react';

class UserPhoto extends React.Component {
    render() {
        return(
        <div>
            <div className="col-md-4 col-sm-6 padding-right-zero">
                <div className="portfolio-box design">
                <img src="img/port03.jpg" alt="" className="img-responsive" />
                {/*Need to grab this photo from the DB when the user logs in*/}
                </div>
            </div>
        </div>
        );
    }
}

export { UserPhoto };