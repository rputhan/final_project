// function plotcharts(otuname) {
// //using D3 to get json file
var url = "http://127.0.0.1:5000/seasondata";
console.log("test");

let teamApoints;
let teamBpoints;

d3.json(url).then(function(data) {
    // Code from your callback goes here...
    // console.log(data);
    var teams = [];

    // dialog.init(function(){
    //   setTimeout(function(){
    //       dialog.find('.bootbox-body').html('I was loaded after the dialog was shown!');
    //   }, 3000);
    // });

    console.log(data);
    for (var i = 0; i < data.length; i++) {
       
      var team_name  = data[i].Team
      // console.log(team_name)

      if (!teams.includes(team_name)){
          // console.log("test")
        teams.push(team_name);
      };
    }
    // console.log(teams)
    var input_value = d3.select("#selDataset1")
          teams.forEach((team) => {
          //appending the Otu number to options value
           input_value
           .append("option")
           .text(team)
           .property("value", team);
          });
    var input_value = d3.select("#selDataset2")
        teams.forEach((team) => {
        //appending the Otu number to options value
          input_value
          .append("option")
          .text(team)
          .property("value", team);
    });
          
  });

function nbastat(team1,team2) {
  //select the demographic id
  var team_stat1 = d3.select(`#sample-metadata1`)
  var team_image1 = d3.select(`.team-logo1`)
  
  //using D3 to read sample json
  d3.json(url).then(function(data) {
  //looping throught results
  var total_points_scored1 = 0 
  var total_points_conceded1 = 0
  var total_wins1 = 0
  var total_loss1 = 0
  var total_turnovers1 = 0
  var total_assists1 = 0
  var total_steals1 = 0
  var total_blocks1 = 0
  var total_rebounds1 = 0 
  var image1 = ""
  //pass teams to team selector function 
  TeamSelector(team1,team2)

  team_stat1.html("");
  for (var i = 0; i < data.length; i++) {
    if (data[i].Team == team1) {
      
      total_points_scored1 += parseInt(data[i].TeamPoints);
      total_points_conceded1 += parseInt(data[i].OpponentPoints)
      total_turnovers1 += parseInt(data[i].Turnovers)
      total_assists1 += parseInt(data[i].Assists)
      total_steals1 += parseInt(data[i].Steals)
      total_blocks1 += parseInt(data[i].Blocks)
      total_rebounds1 += parseInt(data[i].TotalRebounds)
      image1 = data[i].Logo

      if (data[i].WINorLOSS == "W"){
        total_wins1 += 1
      }
      if (data[i].WINorLOSS == "L"){
        total_loss1 += 1
      }
    }   
  }; 
    team_image1.html("")
    var img1 = team_image1.append("img")
        .attr("src", image1)
        .attr("width", "298")
        .attr("height", "298")
        // .attr("class","img-responsive fit-image")
    team_image1.append("br")
    team_image1.append("br")

    var row = team_stat1.append("p");

    //appending details from object into html
    row.html(`<strong> Total Points Scored:${total_points_scored1}<br>
    Total Points Conceded:${total_points_conceded1}<br>
    Total Wins:${total_wins1}<br>
    Total loses:${total_loss1}<br>
    Total Turnovers:${total_turnovers1}<br>
    Total Rebounds:${total_rebounds1}<br>
    Total Steals:${total_steals1}<br>
    Total Assits:${total_assists1}<br>
    Total Blocks:${total_blocks1}</strong>`)

    teamApoints = total_points_scored1;
    //select the demographic id
    var team_stat2 = d3.select(`#sample-metadata2`)
    var team_image2 = d3.select(`.team-logo2`)
    

    //looping throught results
    var total_points_scored2 = 0 
    var total_points_conceded2 = 0
    var total_wins2 = 0
    var total_loss2 = 0
    var total_turnovers2 = 0
    var total_assists2 = 0
    var total_steals2 = 0
    var total_blocks2 = 0
    var total_rebounds2 = 0 
    var image2 = ""

  team_stat2.html("");
  for (var i = 0; i < data.length; i++) {
    if (data[i].Team == team2) {
      
      total_points_scored2 += parseInt(data[i].TeamPoints);
      total_points_conceded2 += parseInt(data[i].OpponentPoints)
      total_turnovers2 += parseInt(data[i].Turnovers)
      total_assists2 += parseInt(data[i].Assists)
      total_steals2 += parseInt(data[i].Steals)
      total_blocks2 += parseInt(data[i].Blocks)
      total_rebounds2 += parseInt(data[i].TotalRebounds)
      image2 = data[i].Logo



      if (data[i].WINorLOSS == "W"){
        total_wins2 += 1
      }
      if (data[i].WINorLOSS == "L"){
        total_loss2 += 1
      }
    }
  }; 

  team_image2.html("")
  var img2 = team_image2.append("img")
        .attr("src", image2)
        .attr("width", "298")
        .attr("height", "298")
        // .attr("class","img-responsive fit-image")
    team_image2.append("br")
    team_image2.append("br")

  var row = team_stat2.append("p");
        //appending details from object into html
        row.html(`<strong> Total Points Scored:${total_points_scored2}<br>
        Total Points Conceded:${total_points_conceded2}<br>
        Total Wins:${total_wins2}<br>
        Total loses:${total_loss2}<br>
        Total Turnovers:${total_turnovers2}<br>
        Total Rebounds:${total_rebounds2}<br>
        Total Steals:${total_steals2}<br>
        Total Assits:${total_assists2}<br>
        Total Blocks:${total_blocks2}</strong>`)

        teamBpoints = total_points_scored2;
  });
  plots();
};
var name1;
var name2;

function init () {
  name1 = "ATL";
  name2 = "ATL";
  nbastat(name1,name2)
};


init()

function optionChanged2 (team_name2){
  name2 = team_name2;
  nbastat(name1, name2);
  
}
function optionChanged(team_name) {
  //run through funtions when an id is selected
  name1 = team_name;
  nbastat(name1,name2);
  
}
  
function plots(){
  var myplot = d3.select(`#bar`)
    myplot.html("")
  var trace1 = {
              x: [name1, name2],
              y: [teamApoints,teamBpoints],
              name: "Greek",
              type: "bar",
              orientation: "v"
            };
          
            // data
            var chartData = [trace1];
          
            // Apply the group bar mode to the layout
            var layout = {
              title: "Total Points Scored",
            };
            
            // Render the plot to the div tag with id "plot"
            Plotly.newPlot("bar", chartData, layout);
};


function TeamSelector(team1, team2){


  d3.json(url).then((incomingData) => {
    // console.log(incomingData);
    
    function findTeam1(game) {
      return game.Team == team1;
    }
    function findTeam2(game) {
      return game.Team == team2;
    }
      
      ///filtering teams correctly, now in real life 'ATL' would be whatever team is chosen in the dropdown


    var filteredTeams1 = incomingData.filter(findTeam1);
    var filteredTeams2 = incomingData.filter(findTeam2);

    // console.log(filteredTeams);

    var pointsFor1 = filteredTeams1.map(games =>  parseFloat(games.TeamPoints));
    var pointsFor2 = filteredTeams2.map(games =>  parseFloat(games.TeamPoints));

    // console.log(pointsFor);

    var pointsAgainst1 = filteredTeams1.map(games => parseFloat(games.OpponentPoints));
    var pointsAgainst2 = filteredTeams2.map(games => parseFloat(games.OpponentPoints));

    // console.log(pointsAgainst);

  //Find Mean Points For and mean Points against
    
  //ADD FUNCTION 
    function addScores(a, b) {
      return a + b;
  }

    // Add up all the scores total. Note that the second parameter tells reduce
    // to start the total at zero.
    var pointsForTotal1 = pointsFor1.reduce(addScores, 0);
    var pointsForTotal2 = pointsFor2.reduce(addScores, 0);
    var pointsAgainstTotal1 = pointsAgainst1.reduce(addScores, 0);
    var pointsAgainstTotal2 = pointsAgainst2.reduce(addScores, 0);

    // Calculate the average and display.
    var averagePointsFor1 = pointsForTotal1 / pointsFor1.length;
    var averagePointsFor2 = pointsForTotal2 / pointsFor2.length;
    var averagePointsAgainst1 = pointsAgainstTotal1 / pointsAgainst1.length;
    var averagePointsAgainst2 = pointsAgainstTotal2 / pointsAgainst2.length;

    // console.log("Average Points For Team 1:", averagePointsFor1);
    // console.log("Average Points For Team 2:", averagePointsFor2);
    // console.log("Average Points Against Team 1:", averagePointsAgainst1);
    // console.log("Average Points Against Team 2:", averagePointsAgainst2);

    //Find Standard Deviation of Points For and Standard Deviation of Points Against

    var squareDiffsPf1 = pointsFor1.map(function(value){
      var diffPf1 = value - averagePointsFor1;
      var sqrPf1 = diffPf1 * diffPf1;
      return sqrPf1;
    });

    var squareDiffsPf2 = pointsFor2.map(function(value){
      var diffPf2 = value - averagePointsFor2;
      var sqrPf2 = diffPf2 * diffPf2;
      return sqrPf2;
    });
//average function
    function average(data){
      var sum = data.reduce(function(sum, value){
        return sum + value;
      }, 0);
    
      var avg = sum / data.length;
      return avg;
    }

    var avgSquareDiffPf1 = average(squareDiffsPf1);
    var avgSquareDiffPf2 = average(squareDiffsPf2);

    var stdDevPointsFor1 = Math.sqrt(avgSquareDiffPf1);
    var stdDevPointsFor2 = Math.sqrt(avgSquareDiffPf2);
    // console.log("Standard Deviation PF Team 1: ", stdDevPointsFor1);
    // console.log("Standard Deviation PF Team 2: ", stdDevPointsFor2);

    var squareDiffsPa1 = pointsAgainst1.map(function(value){
      var diffPa1 = value - averagePointsAgainst1;
      var sqrPa1 = diffPa1 * diffPa1;
      return sqrPa1;
    });

    var squareDiffsPa2 = pointsAgainst2.map(function(value){
      var diffPa2 = value - averagePointsAgainst2;
      var sqrPa2 = diffPa2 * diffPa2;
      return sqrPa2;
    });

    var avgSquareDiffPa1 = average(squareDiffsPa1);
    var avgSquareDiffPa2 = average(squareDiffsPa2);

    var stdDevPointsAgainst1 = Math.sqrt(avgSquareDiffPa1);
    var stdDevPointsAgainst2 = Math.sqrt(avgSquareDiffPa2);
    // console.log("Standard Deviation PA Team 1: ", stdDevPointsAgainst1);
    // console.log("Standard Deviation PA Team 2: ", stdDevPointsAgainst2);

    var Team1Win = 0;
    var Team2Win = 0;
    var ot = 0;
    var Team1ScorePF = gaussian(averagePointsFor1, stdDevPointsFor1);
    var Team1ScorePA = gaussian(averagePointsAgainst2, stdDevPointsAgainst2);
    var Team2ScorePF = gaussian(averagePointsFor2, stdDevPointsFor2);
    var Team2ScorePA = gaussian(averagePointsAgainst1, stdDevPointsAgainst1);
    // var Team1Score = (Team1ScorePF() + Team1ScorePA())/2;
    // var Team2Score = (Team2ScorePF() + Team2ScorePA())/2;
                     
    for(i=0; i<10000; i++) {
      
      var Team1Score = Math.round(((Team1ScorePF() + Team1ScorePA())/2));
      var Team2Score = Math.round(((Team2ScorePF() + Team2ScorePA())/2));

      if (Team1Score > Team2Score) {
        Team1Win +=1;
    } else if (Team2Score > Team1Score){
        Team2Win +=1;
    } else {
        ot +=1;}
  }

    Team1WinPct = Math.round(Team1Win / (Team1Win + Team2Win + ot)*100);
    Team2WinPct = Math.round(Team2Win / (Team1Win + Team2Win + ot)*100);
    otPct = Math.round(ot / (Team1Win + Team2Win + ot)*100);


    var simulation = d3.select(`#simulationdata`)
    simulation.html("")
    var row = simulation.append("p");
    //appending details from object into html
    row.html(`<strong>${team1} wins ${Team1WinPct}%<br>
    ${team2} wins ${Team2WinPct}%<br>
    Going to OT ${otPct}%, pickem</strong>`)

    console.log(`${team1} wins ${Team1WinPct}%`);
    console.log(`${team2} wins ${Team2WinPct}%`);
    console.log(`Going to OT ${otPct}%, pickem'`);
  });
  // returns a gaussian random function with the given mean and stdev.
  function gaussian(mean, stdev) {
    var y2;
    var use_last = false;
    return function() {
        var y1;
        if(use_last) {
          y1 = y2;
          use_last = false;
        }
        else {
            var x1, x2, w;
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w  = x1 * x1 + x2 * x2;               
            } while( w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w))/w);
            y1 = x1 * w;
            y2 = x2 * w;
            use_last = true;
      }

      var retval = mean + stdev * y1;
      if(retval > 0) 
          return retval;
      return -retval;
        }
    }

};
