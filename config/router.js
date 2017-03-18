//This Module sets up the React Router
import * as React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
//We Include all the components we will need for the router
import { Main } from '../app/components/Main';
import { CreateProject } from '../app/components/parents/CreateProjects';
import { Projects } from '../app/components/parents/AllProjects';
import { UserProfile } from '../app/components/parents/UserProfile';
import { Form } from '../app/components/children/Form';

const router = (
<Router history={hashHistory}>
    <Route path='/' component={LandingPage}>
        <Route path='profile' component={UserProfile} />
        <Route path='projects' component={Projects} />
        <Route path='projects/new' component={Form} />
        <IndexRoute component={UserProfile} />
    </Route>
</Router>
);

export { router };
