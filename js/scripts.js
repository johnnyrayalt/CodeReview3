var storeArray = [];

function pingPong(userInput) {
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      storeArray.push("pingpong");
    } else if (i % 5 === 0) {
      storeArray.push("pong");
    } else if (i % 3 === 0 ) {
      storeArray.push("ping");
    } else {
      storeArray.push(i);
    };
  };
  return storeArray;
};


$(document).ready(function() {
  $("form#pingPongForm").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());
    var result = pingPong(userInput);

    for (var i=0; i < result.length; i++) {
      $("#output ul").append("<li>" + result[i] + "</li>");
    };
  });
});
