var photos = ["#pic01large", "#pic02large", "#pic03large", "#pic04large", "#pic05large", "#pic06large", "#pic07large", "#pic08large", "#pic09large", "#pic10large",
              "#pic11large", "#pic12large", "#pic13large", "#pic14large", "#pic15large", "#pic16large", "#pic17large", "#pic18large", "#pic19large", "#pic20large",
              "#pic21large", "#pic22large", "#pic23large", "#pic24large", "#pic25large" ];

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
  
  $("#pic13").click(function() {
    $("#overlay").css("display", "block");
    $(photos[12]).css("display", "block");
    current = 12;
  });
  
  $("#pic14").click(function() {
    $("#overlay").css("display", "block");
    $(photos[13]).css("display", "block");
    current = 13;
  });
  
  $("#pic15").click(function() {
    $("#overlay").css("display", "block");
    $(photos[14]).css("display", "block");
    current = 14;
  });
  
  $("#pic16").click(function() {
    $("#overlay").css("display", "block");
    $(photos[15]).css("display", "block");
    current = 15;
  });
  
  $("#pic17").click(function() {
    $("#overlay").css("display", "block");
    $(photos[16]).css("display", "block");
    current = 16;
  });
  
  $("#pic18").click(function() {
    $("#overlay").css("display", "block");
    $(photos[17]).css("display", "block");
    current = 17;
  });
  
  $("#pic19").click(function() {
    $("#overlay").css("display", "block");
    $(photos[18]).css("display", "block");
    current = 18;
  });
  
  $("#pic20").click(function() {
    $("#overlay").css("display", "block");
    $(photos[19]).css("display", "block");
    current = 19;
  });
  
  $("#pic21").click(function() {
    $("#overlay").css("display", "block");
    $(photos[20]).css("display", "block");
    current = 20;
  });
  
  $("#pic22").click(function() {
    $("#overlay").css("display", "block");
    $(photos[21]).css("display", "block");
    current = 21;
  });
  
  $("#pic23").click(function() {
    $("#overlay").css("display", "block");
    $(photos[22]).css("display", "block");
    current = 22;
  });
  
  $("#pic24").click(function() {
    $("#overlay").css("display", "block");
    $(photos[23]).css("display", "block");
    current = 23;
  });
  
  $("#pic25").click(function() {
    $("#overlay").css("display", "block");
    $(photos[24]).css("display", "block");
    current = 24;
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
