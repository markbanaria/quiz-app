//react
var React = require('react');

//Route dependencies
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//views
var Index = require('../Index.jsx');
var Table = require('../views/Table.jsx');
var Chart = require('../views/Chart.jsx');
var About = require('../views/About.jsx');

var routes = (
	<Route path="/" handler={Index}>
		<Route name="table" path="table" handler={Table}/>
		<Route name="chart" path="chart" handler={Chart}/>
		<Route name="about" path="about" handler={About}/>
		<DefaultRoute handler={Table}/>
	</Route>
);

module.exports = routes;