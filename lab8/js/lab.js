/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   6 May  2024
 * License: Public Domain
 */

// Function to add six to a number
function addSix(x) {
    var results = x + 6;
    return results;
}

// Testing function
console.log("4 + 6 =", addSix(4)); 
console.log("16 + 6 =", addSix(16)); 

array = [1, 2, 3, 4, 5, 6, 7];
console.log("My array", array); 

var result = array.map(addSix);
console.log("Result",result); 

var result  = array.map(function (x) {
    return x * 2;
})
console.log("Doubled array result", result); 

 // Your map results data
 var mapResults = "Your map results here";

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);
