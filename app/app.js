/*// Including the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
import Router from 'react-router';

// Including the main parent component, holds the main layout and navigation...
var LandingPage = require("./components/parents/LandingPage");

// Will render the main component, in this case, Main.js
var where = document.getElementById("app");
ReactDOM.render(
    <div>   
        <LandingPage />
    </div>
, where);*/



// Including the Main React Dependencies
import './css/animate.css';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LandingPage } from './components/parents/LandingPage';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { Posts } from './components/Posts';
// import { CreatePost } from './components/CreatePost';

const where = document.getElementById('app');

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={LandingPage}>
            {/*<Route path='' component={LandingPage} />
            <Route path='posts/new' component={CreatePost} />*/}
            <IndexRoute component={LandingPage} />
        </Route>
    </Router>
);

ReactDOM.render(router, where);
