/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:  06 June  2024
 * License: Public Domain
 */
var URL = "https://xkcd.com/info.0.json";
var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";
function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({
      url: ourURL,
      type: "GET",
      dataType: "json",
      success: function(data) {
        var imageUrl = data.img;
        var title = make_safe(data.title);
        var alt = make_safe(data.alt);
        var comicNum = data.num;
        var html = `<div id="imageblock">
            <h2>${title}</h2>
            <img src="${imageUrl}" title="${alt}"><br>
            <button id="prev">Previous</button><button id="next">Next</button>
          </div>`;
        $("#output").html(html);

        $("#prev").click(function(){
          getComic(comicNum - 1);
        });

        $("#next").click(function(){
          getComic(comicNum + 1);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
      }
  });
}

getComic();
