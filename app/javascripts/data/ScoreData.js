var buildings =  ["military", "gold", "wonder", "civic", "commercial", "guild", "science", "leader"];
var initialPlayers = [1,2,3,4,5,6,7,8]
var players = [];

initialPlayers.map(function(item) {
  players.push(
    {
      "id": item,
      "name": "",
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
    }
  );
});

console.log(players)

module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('ScoreData', JSON.stringify([{
      "buildings": buildings,
      "players": players
    }]));
  }
};