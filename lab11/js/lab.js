/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   15 May  2024
 * License: Public Domain
 */

$("mybuttom").click(
function(){

  console.log("click");
  let color = $("#myinput").val();

  console.log("color:" + color)

  $("BODY").append("<div>" + color + "</div>");

  CSS("color",color);






}
);