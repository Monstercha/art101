/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   10 May  2024
 * License: Public Domain
 */


$("#challenge").append("<button id='button-challenge'>Challenge</button>");
$("#problems").append("<button id='button-problems'>Problems</button>");
$("#reflection").append("<button id='button-reflection'>Reflection</button>");
$("#results").append("<button id='button-results'>Results</button>");


$(document).ready(function() {
    $('#button-challenge').click(function() {
        $('#challenge').toggleClass('red');
    });
});

$(document).ready(function() {
    $('button-problems').click(function() {
        $('#problems').toggleClass('green');
    });
});

$(document).ready(function() {
    $('#button-reflection').click(function() {
        $('#reflection').toggleClass('green');
    });
});

$(document).ready(function() {
    $('#button-problems').click(function() {
        $('#problems').toggleClass('blue');
    });
});

$(document).ready(function() {
    $('#button-results').click(function() {
        $('#results').toggleClass('yellow');
    });
});

$(document).ready(function() {
         $(".special-section").append("<button class='togglebottom'>bottom</button>")
            $(".special-section").click(function() {
             $(this).parent().parent().find(".minor-section").find("Button").click();
         }); 
    });