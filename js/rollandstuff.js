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
    
    $("#header-container").hover(function() {
        $("#text-header").animate({top: "0", opacity: "1"}, 200, "swing");
            }, function(){
        $("#text-header").animate({top: "-50", opacity: "0"}, 200, "swing");
    });
    
    $("#h-small").hover(function() {
        $("#text-header").html("THE ARTIST");
    });
    
    $("#o-small").hover(function() {
        $("#text-header").html("THE ARTWORK");
    });
    
    $("#p-small").hover(function() {
        $("#text-header").html("PUBLIC EVENTS");
    });
    
    $("#e-small").hover(function() {
        $("#text-header").html("EXPERIENCE");
    });
});