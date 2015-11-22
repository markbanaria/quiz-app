var React = require('react');

var Table = React.createClass({

	render: function() {
		return (
			<div className="Table">
				<div className="section">
					<div className="row">
						<div className="columns large-4 small-4">
							Player
						</div>
						<div className="columns large-8 small-8">
							<div className="row">
								<div className="table-cell">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Table;