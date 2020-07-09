//use d3 to append images

// On change to the DOM, call getData()
d3.selectAll("#selDataset1").on("change", getDataset1);

function getDataset1(){
    var dropdownMenu = d3.select("#selDataset1");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    var imgs = svg.selectAll("team-logo1");
            imgs.enter()
            .append("svg:image")
}