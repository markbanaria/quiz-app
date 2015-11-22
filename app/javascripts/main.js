//react dependencies
import React from 'react'
import { render } from 'react-dom'

//Route dependencies
import { Router, Route } from 'react-router';

//Route map
var routes = require('./routes/Routes.jsx');


var ScoreData = require('./data/ScoreData');
var ScoreAPI = require('./utils/ScoreAPI');
// Load Mock Line Data into localStorage
ScoreData.init();
// Load Mock API Call
ScoreAPI.getScoreData();

import createBrowserHistory from 'history/lib/createBrowserHistory'
let history = createBrowserHistory()
render(<Router history={history}>{routes}</Router>, document.getElementById('content'))

//foundation dependencies
require('jquery');
require('fastclick');

//styling
require('../stylesheets/style.scss');