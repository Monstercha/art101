/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   27 April 2024
 * License: Public Domain
 */

// Define Variables
myTransport = ["car", "bicycle", "bus"];

//create an object for my main ride 

myMainRide={
make: "Toyota",
model: "Camry",
color: "White",
year: 2023,
age :function() {
    return 2024 - this.year;
}
}

// output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");