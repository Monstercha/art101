/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:  01 June  2024
 * License: Public Domain
 */
$.ajax({
    url: "https://yesno.wtf/api",
    data: {
        answer: "yes",
        forced: false,
    },
    type: "GET",
    dataType: "json",
    success: function (data) {
        console.log(data);
        $("body").append("<p>Answer: " + data.answer + "</p>");
        $("body").append("<img src='" + data.image + "' alt='answer image' />");
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});
