import * as React from 'react';

class UserPhoto extends React.Component {
    render() {
        return(
        <div className="container">
            <div className="col-md-4 col-sm-6 padding-right-zero">
                <div className="portfolio-box design">
                <img src="http://assets.change.org/photos/9/gy/hu/tgGyHUjAtPUDoIa-400x400-noPad.jpg?1459657762" alt="" className="img-responsive" />
                {/*Need to grab this photo from the DB when the user logs in*/}
                </div>
            </div>
        </div>
        );
    }
}

export { UserPhoto };