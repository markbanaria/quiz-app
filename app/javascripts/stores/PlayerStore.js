var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var _ = require('underscore');

// Define initial data points
var _players = [];

// Method to load product data from mock API
function loadScoreData(data) {
  data[0].players.forEach(function(item) {
    _players.push(item);    
  });
}

function addScore(id, buidling, score) {
  _players.some(function(item){
    if(item.id == id) {
      _players[indexOf(item)].score[building] = score;
    }
  })
}

function addPlayer(name) {
  _players.push(
    {
      "id": _players.length,
      "name": name,
      "score": {
        "military": 0,
        "gold": 0,
        "wonder": 0,
        "civic": 0,
        "commercial": 0,
        "guild": 0,
        "science": 0,
        "leader": 0
    }
  )
  _players.map(function(item) {
    item.id = indexOf(item);
  })
}

function removePlayer(id) {
  _players.map(function(item) {
    if(item.id==id) {
      _players.splice(indexOf(item), 1);
    }
  })
}

// Extend LineStore with EventEmitter to add eventing capabilities
var CustomerStore = _.extend({}, EventEmitter.prototype, {

  // Return Line data
  getCustomers: function() {
    return _players;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to RECEIVE_DATA action
    case Constants.RECEIVE_DATA:
      loadScoreData(action.data);
      break;

    // Respond to PLAYER_SCORE_ADD action
    case Constants.PLAYER_SCORE_ADD:
      addScore(action.id, action.building, action.score);
      break;

    // Respond to PLAYER_ADD action
    case Constants.PLAYER_ADD:
      addPlayer(action.name);
      break;        

    // Respond to PLAYER_REMOVE action
    case Constants.PLAYER_REMOVE:
      addPlayer(action.id);
      break; 

    default:
      return true;
  }

  // If action was responded to, emit change event
  CustomerStore.emitChange();

  return true;

});

module.exports = CustomerStore;