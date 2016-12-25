$(document).ready(function() {
    if (document.documentElement.clientWidth <= 1000) {    
        $('#logo').attr('src', 'images/logo-short.svg');
    } else{
    	$('#logo').attr('src', 'images/logo.svg');
    }
});

$(window).resize(function() {
    if (document.documentElement.clientWidth <= 1000) {    
        $('#logo').attr('src', 'images/logo-short.svg');
    } else{
    	$('#logo').attr('src', 'images/logo.svg');
    }
}).resize()


$(".projects-url").click(function(){
    document.querySelector('#projects').scrollIntoView({ 
      behavior: 'smooth' 
    });

});

$(function(){
    $("#intro").typed({
        strings: ["Hi, I'm Evan."],
        typeSpeed: 15,
        showCursor: false
    });

    $(".fadein").css({opacity:0})


    setTimeout(function(){
        $(".fadein").hide().css({opacity:100}).fadeIn(1000);
    }, 1230);
});