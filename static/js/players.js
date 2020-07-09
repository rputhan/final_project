// function plotcharts(otuname) {
// //using D3 to get json file
var url = "http://127.0.0.1:5000/playerdata";
console.log("test");

let teamApoints;
let teamBpoints;

d3.json(url).then(function(data) {
    // Code from your callback goes here...
    // console.log(data);
    var players = [];

    // dialog.init(function(){
    //   setTimeout(function(){
    //       dialog.find('.bootbox-body').html('I was loaded after the dialog was shown!');
    //   }, 3000);
    // });

    console.log(data);
    for (var i = 0; i < data.length; i++) {
       
      var player_name  = data[i].Player
      // console.log(team_name)

      if (!players.includes(player_name)){
          // console.log("test")
        players.push(player_name);
      };
    }
    // console.log(teams)
    var input_value = d3.select("#selDataset1")
          players.forEach((player) => {
          //appending the Otu number to options value
           input_value
           .append("option")
           .text(player)
           .property("value", player);
          });
    var input_value = d3.select("#selDataset2")
        players.forEach((player) => {
        //appending the Otu number to options value
          input_value
          .append("option")
          .text(player)
          .property("value", player);
    });
          
  });

  function createteam(name,team_players){
      console.log(team_players)
      var row = team_players.append("p");
      row.html(`${name}`);

  };



function optionChanged(team_name) {
    //run through funtions when an id is selected
    name1 = team_name;
    var team_players1 = d3.select(`#sample-metadata1`)
    createteam(name1,team_players1);
  };

function optionChanged2(team_name2){
    name2 = team_name2;
    var team_players2 = d3.select(`#sample-metadata2`)
    createteam(name2,team_players2);
    
    
  };
  
 
