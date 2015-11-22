var Actions = require('../actions/Actions');

module.exports = {

  // Load mock data from localStorage into ProductStore via Action
  getScoreData: function() {
    var data = JSON.parse(localStorage.getItem('ScoreData'));
    Actions.ReceiveData(data);
  }

};