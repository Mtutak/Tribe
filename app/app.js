// Including the Main React Dependencies
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Router variable
import { router } from './config/router';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//mounting point for index.html 
const where = document.getElementById('app');


ReactDOM.render(router, where);
