var photos = ["#pic01large", "#pic02large", "#pic03large", "#pic04large", "#pic05large", "#pic06large", "#pic07large", "#pic08large", "#pic09large", "#pic10large", "#pic11large", "#pic12large"  ];

var current = -1;

$(document).ready(function() {
  $("#pic01").click(function() {
    $("#overlay").css("display", "block");
    $(photos[0]).css("display", "block");
    current = 0;
  });
  
  $("#pic02").click(function() {
    $("#overlay").css("display", "block");
    $(photos[1]).css("display", "block");
    current = 1;
  });
  
  $("#pic03").click(function() {
    $("#overlay").css("display", "block");
    $(photos[2]).css("display", "block");
    current = 2;
  });
  
  $("#pic04").click(function() {
    $("#overlay").css("display", "block");
    $(photos[3]).css("display", "block");
    current = 3;
  });
  
  $("#pic05").click(function() {
    $("#overlay").css("display", "block");
    $(photos[4]).css("display", "block");
    current = 4;
  });
  
  $("#pic06").click(function() {
    $("#overlay").css("display", "block");
    $(photos[5]).css("display", "block");
    current = 5;
  });
  
  $("#pic07").click(function() {
    $("#overlay").css("display", "block");
    $(photos[6]).css("display", "block");
    current = 6;
  });
  
  $("#pic08").click(function() {
    $("#overlay").css("display", "block");
    $(photos[7]).css("display", "block");
    current = 7;
  });
  
  $("#pic09").click(function() {
    $("#overlay").css("display", "block");
    $(photos[8]).css("display", "block");
    current = 8;
  });
  
  $("#pic10").click(function() {
    $("#overlay").css("display", "block");
    $(photos[9]).css("display", "block");
    current = 9;
  });
  
  $("#pic11").click(function() {
    $("#overlay").css("display", "block");
    $(photos[10]).css("display", "block");
    current = 10;
  });
  
  $("#pic12").click(function() {
    $("#overlay").css("display", "block");
    $(photos[11]).css("display", "block");
    current = 11;
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
