var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  PLAYER_SCORE_ADD: null,      // Add points
  PLAYER_ADD: null,  			// Add player
  PLAYER_REMOVE: null,       	// Remove player
  RECEIVE_DATA: null    		// Loads mock data
});