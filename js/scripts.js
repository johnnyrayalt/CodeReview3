function pingPong(userInput) {
  var userInput = parseInt($("input#userInput").val());
  if (userInput % 3 === 0) {
    return true;
  } else if (false && userInput % 5 === 0) {
    return true;
  } else if (userInput % 3 === 0 && userInput % 5 === 0) {
    return true;
  }
};


$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
      event.preventDefault();

      var userInput = parseInt($("input#userInput").val());
      var result = pingPong(userInput);

      $(".listCount").text(userInput);
  });
});
