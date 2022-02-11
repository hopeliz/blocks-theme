var photos = ["#pic01large" ];

var current = -1;

$(document).ready(function() {
  $("#pic01").click(function() {
    $("#overlay").css("display", "block");
    $(photos[0]).css("display", "block");
    current = 0;
  });
  
  $(".close").click(function() {
    $("#overlay").css("display", "none");
    $(photos[current]).css("display", "none");
    current = -1;
  });
  
  $("#overlay").click(function() {
    $("#overlay").css("display", "none");
    $(photos[current]).css("display", "none");
    current = -1;
  });
});
