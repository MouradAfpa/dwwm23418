
// exo1
var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++)
   totalPeople += busStops[i][0] - busStops[i][1];
    return totalPeople;
   }
     
console.log("#1 - Le nombre de personnes dans le bus est :",number([[10,0],[3,5],[5,8]])); 
console.log("#1 - Le nombre de personnes dans le bus est :",number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])); 
console.log("#1 - Le nombre de personnes dans le bus est :",number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])); 
