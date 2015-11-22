import React from 'react'
import { Router } from 'react-router'

var Navbar = require('./components/Navbar.jsx');

var Index = React.createClass({

	render: function() {
		return (
			<div className="Index">				
				<Navbar />
				{this.props.children}
			</div>
		);
	}

});

module.exports = Index;