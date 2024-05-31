/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   30 May  2024
 * License: Public Domain
 */
function abcUserName() {
    var userName = window.prompt("Hi. Please enter your name:");
    console.log("userName =", userName);
    var nameArray = userName.split('');

    var nameNospace = userName.replace('');

    console.log("nameArray =", nameArray);

//DEBUG
    var nameArraySort = nameArray.sort(function(a, b) {
        return a.localeCompare(b, undefined, { sensitivity: 'base' });
    });
    console.log("nameArraySort =", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

// Output
document.writeln("Welcome. " + abcUserName(), "<br/>");
