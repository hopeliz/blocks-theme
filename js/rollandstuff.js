$(document).ready(function() {
    $("#h-large").hover(function() {
        $("#h-text").animate({top: "0", opacity: "1"}, 200, "swing");
            }, function(){
        $("#h-text").animate({top: "-50", opacity: "0"}, 200, "swing");
    });
    
    $("#o-large").hover(function() {
        $("#o-text").animate({top: "0", opacity: "1"}, 200, "swing");
            }, function(){
        $("#o-text").animate({top: "-50", opacity: "0"}, 200, "swing");
    });
    
    $("#p-large").hover(function() {
        $("#p-text").animate({top: "0", opacity: "1"}, 200, "swing");
            }, function(){
        $("#p-text").animate({top: "-50", opacity: "0"}, 200, "swing");
    });
    
    $("#e-large").hover(function() {
        $("#e-text").animate({top: "0", opacity: "1"}, 200, "swing");
            }, function(){
        $("#e-text").animate({top: "-50", opacity: "0"}, 200, "swing");
    });
});