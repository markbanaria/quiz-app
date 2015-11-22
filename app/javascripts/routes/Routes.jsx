//react
import React from 'react'
//Route dependencies
import { Router, Route, Link, IndexRoute } from 'react-router'

//views
var Index = require('../Index.jsx');
var Table = require('../views/Table.jsx');
var Chart = require('../views/Chart.jsx');
var About = require('../views/About.jsx');

var routes = (
	<Route path="/" component={Index}>
		<Route path="table" component={Table}/>
		<Route path="chart" component={Chart}/>
		<Route path="about" component={About}/>
		<IndexRoute component={Table}/>
	</Route>
);

module.exports = routes;