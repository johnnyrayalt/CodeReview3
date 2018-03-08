function pingPong(userInput) {
  for (var i = 1; i <= userInput; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("pingpong");
    } else if (i % 5 === 0) {
      console.log("pong");
    } else if (i % 3 === 0 ) {
      console.log("ping");
    } else {
      console.log(i);
    };
  };
};


$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
      event.preventDefault();

      var userInput = parseInt($("input#userInput").val());
      var result = pingPong(userInput);

      $(".listCount").text(result);
  });
});
