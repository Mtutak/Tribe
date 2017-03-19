import * as React from 'react';
//using a feature of react router to manage active state of link to replace a tag href
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
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
                            <a href="/" className="navbar-brand">TRIBE</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-right" id="mynavbar">
                            <ul className="nav navbar-nav">
                                <li><Link to='/projects' activeClassName='active' >Explore</Link></li>
                                <li><Link to='/connections' activeClassName='active' >People</Link></li>
                                <li><Link to='/profile' activeClassName='active' >Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    );
  }
}

export { Header };