import React from 'react'
import { Router, Link } from 'react-router'

var Navbar = React.createClass({

	render: function() {
		return (
			<div className="Navbar">
				<div className="appbar section">
					<h2>Quiz App</h2>
				</div>
				<div className="drawer">
					<div className="row">
						<Link to="/table" activeClassName="active">Table</Link>
						<Link to="/chart" activeClassName="active">Charts</Link>
						<Link to="/about" activeClassName="active">About</Link>
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