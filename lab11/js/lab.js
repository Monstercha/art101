/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   18 May  2024
 * License: Public Domain
 */

function sortString(inputString) {
  return inputString.split('').sort().join('');
}
$("#submit").click(function(){
const userName = $("#user-name").val();
userNameSorted = sortString(userName);
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});