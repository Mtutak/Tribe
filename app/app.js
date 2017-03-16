// Including the Main React Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Main } from './components/Main';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Posts } from './components/Posts';
import { CreatePost } from './components/CreatePost';

const where = document.getElementById('app');

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='profile' component={UserProfile} />
            {/*<Route path='posts/new' component={CreatePost} />*/}
            <IndexRoute component={Posts} />
        </Route>
    </Router>
);

ReactDOM.render(<UserProfile profileData={DATA} />, document.getElementById('')
