import * as React from 'react';
import { Link } from 'react-router';
// import { Header } from '../parents/Header';

 class LandingPage extends React.Component {
    render() {
        return(
    <body>
	{/*<!--HEADER START-->*/}
	<div className="main-navigation navbar-fixed-top">
		<nav className="navbar navbar-default">
			<div className="container">
			<div className="navbar-header">
			  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			    <span className="icon-bar"></span>
			  </button>
			  <a className="navbar-brand" href="index.html">Tribe</a>
			</div>
			<div className="collapse navbar-collapse" id="myNavbar">
			  <ul className="nav navbar-nav navbar-right">
			    <li className="active"><Link to="/">Home</Link></li>
                <li><Link to='/profile' activeClassName='active' >Profile</Link></li>
			    <li><Link to="#">Explore</Link></li>
                <li><Link to='#'>Sign Up</Link></li>
			    <li><Link to="#">Logout</Link></li>
			    {/*<li><a href="#contact">Contact Us</a></li>*/}
			  </ul>
			</div>
		  </div>
		</nav>
	</div>
	{/*<!--HEADER END-->*/}

	{/*<!--BANNER START-->*/}
	<div id="banner" className="section-padding">
		<div className="container">
			<div className="row">
				<div className="jumbotron">
				  <h1 className="small">Welcome To <span className="bold">Tribe</span></h1>
				  <p className="big">A community for artists to connect and work together</p>
				  <a href="#" className="btn btn-banner">Sign Up/Login<i className="fa fa-send"></i></a>
				</div>
			</div>
		</div>
	</div>
	{/*<!--BANNER END-->*/}

	{/*<!--CTA1 START-->*/}
	<div className="cta-1">
		<div className="container">
			<div className="row text-center white">
				<h1 className="cta-title">Join TRIBE Today!</h1>
				<p className="cta-sub-title">Find your community.</p>
			</div>
		</div>
	</div>
	{/*<!--CTA1 END-->*/}
    </body>
    );
  }
}
export { LandingPage };