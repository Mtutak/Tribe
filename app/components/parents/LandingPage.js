import * as React from 'react';


class LandingPage extends React.Component {
    render() {
        return(
    <header className="main-header" id="header">
        <div className="bg-color">
            {/*<!--nav-->*/}
            <nav className="nav navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="col-md-12">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" aria-controls="navbar">
                            <span className="fa fa-bars"></span>
                        </button>
                            <a href="index.html" className="navbar-brand">Bethany</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-right" id="mynavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#header">Home</a></li>
                                <li><a href="#feature">Connections</a></li>
                                <li><a href="#portfolio">Explore</a></li>
                                <li><a href="#contact">Login/Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            {/*<!--/ nav-->*/}
            <div className="container text-center">
                <div className="wrapper wow fadeInUp delay-05s" >
                    <h3 className="title">Tribe</h3>
                    <h4 className="sub-title">Face-to-Face Connections for Artists</h4>
                    <button type="submit" className="btn btn-submit">Login/Signup</button>
                </div>
            </div>
        </div>
    </header> 
        );
    }
}

export { LandingPage };