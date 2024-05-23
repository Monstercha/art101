/*
 * Author: Eros Yuan <yyuan70@ucsc.edu>
 * Created:   18 May  2024
 * License: Public Domain
 */

function sortString(inputString) {
  return inputString.split('').sort().join('');
}

// Click listener for the button
$("#submit").click(function() {
  // Get values from input fields
  const userName = $("#user-name").val();
  const additionalInput1 = $("#usernameone").val();
  const additionalInput2 = $("#usernametwo").val();

  // Sort the input strings
  const userNameSorted = sortString(userName);
  const input1Sorted = sortString(additionalInput1);
  const input2Sorted = sortString(additionalInput2);

  // Append new sorted names to the output div
  // This ensures we do not replace existing content, but rather add to it
  $("#output").append('<div class="text"><p>' + userNameSorted + '</p ></div>');
  $("#output").append('<div class="text"><p>' + input1Sorted + '</p ></div>');
  $("#output").append('<div class="text"><p>' + input2Sorted + '</p ></div>');
});