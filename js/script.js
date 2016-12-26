$(document).ready(function() {

    setTimeout(function(){
        $("#intro").typed({
            strings: ["Hi, I'm Evan."],
            typeSpeed: 15,
            showCursor: false
        });
    }, 100);

    $(".fadein").css({opacity:0});

    setTimeout(function(){
        $(".fadein").hide().css({opacity:100}).fadeIn(1000);
    }, 1230);


    $(".projects-url").click(function(){
        document.querySelector('#projects').scrollIntoView({ 
          behavior: 'smooth' 
        });
    });

    $("#pulldown-icon").click(function(){
        console.log('here');
    });

});