/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   2 May  2024
 * License: Public Domain
 */

function abcUserName() {
    var userName = window.prompt("Hi. Please enter your name:");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    
    var nameNospace = userName.replace('');

    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// Output
document.writeln("Welcome. " + abcUserName(), "<br/>");
