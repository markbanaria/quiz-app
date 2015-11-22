var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Navbar = require('./components/Navbar.jsx');

var Index = React.createClass({

	render: function() {
		return (
			<div className="Index">				
				<Navbar activeView={Router.RouteHandler} />
				<RouteHandler />
			</div>
		);
	}

});

module.exports = Index;