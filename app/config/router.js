//This Module sets up the React Router
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//We Include all the components we will need for the router
import { Main } from '../components/Main';
import { LandingPage } from '../components/parents/LandingPage';
import { CreateProject } from '../components/parents/CreateProjects';
import { UserProfile } from '../components/parents/UserProfile';
import { PostForm } from '../components/children/Form';

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='profile' component={UserProfile} />
            <Route path='projects/new' component={PostForm} />
            <IndexRoute component={UserProfile} />
        </Route>
    </Router>
);

export { router };
