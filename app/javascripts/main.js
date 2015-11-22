//react dependencies
var React = require('react');
var Index = require('./Index.jsx');

//Route dependencies
var Router = require('react-router');

//Route map
var routes = require('./routes/Routes.jsx');


var ScoreData = require('./data/ScoreData');
var ScoreAPI = require('./utils/ScoreAPI');
// Load Mock Line Data into localStorage
ScoreData.init();
// Load Mock API Call
ScoreAPI.getScoreData();

Router.run(routes, Router.HashLocation, function(Root) {
  React.render(<Root />, document.getElementById('content'));
});

//foundation dependencies
require('jquery');
require('fastclick');

//styling
require('../stylesheets/style.scss');