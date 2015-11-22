var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

// Define actions object
var LineActions = {

  // Receive inital product data
  AddScore: function(id, building, score) {
    AppDispatcher.handleAction({
      actionType: Constants.PLAYER_SCORE_ADD,
      id: id,
      building: building,
      score: score
    })
  },

  AddPlayer: function(name) {
    AppDispatcher.handleAction({
      actionType: Constants.PLAYER_ADD,
      name: name
    })
  },

  RemovePlayer: function(id) {
    AppDispatcher.handleAction({
      actionType: Constants.PLAYER_REMOVE,
      id: id
    })
  },

  ReceiveData: function(data) {
    AppDispatcher.handleAction({
      actionType: Constants.RECEIVE_DATA,
      name: data
    })
  },

};

module.exports = LineActions;