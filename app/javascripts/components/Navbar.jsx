var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({

	render: function() {
		return (
			<div className="Navbar">
				<div className="appbar section">
					<h2>7 Wonders Score</h2>
				</div>
				<div className="drawer">
					<div className="row">
						<Link to="table">Table</Link>
						<Link to="chart">Charts</Link>
						<Link to="about">About</Link>
					</div>
				</div>
				<div className="sub section">
					<div className="row">
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Navbar;