//This Module sets up the React Router
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//We Include all the components we will need for the router
import { Main } from '../components/Main';
import { LandingPage } from '../components/parents/LandingPage';
import { CreateProject } from '../components/parents/CreateProjects';
import { UserProfile } from '../components/parents/UserProfile';
import { AllProjects } from '../components/parents/AllProjects';
import { Connections } from '../components/parents/Connections';



const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>

            <Route path='/profile' component={UserProfile} />
            <Route path='/projects' component={AllProjects} />
            <Route path='/projects/new' component={CreateProject} />
            <Route path='/connections' component={Connections} />
            <IndexRoute component={LandingPage} />

        </Route>
    </Router>
);

export { router };
