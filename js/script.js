$(document).ready(function() {

    $(".fadein").css({opacity:0});
    $("#pulldown").hide();
    $("#pulldown").data('status', 'not_clicked');

    setTimeout(function(){
        $("#intro").typed({
            strings: ["Hi, I'm Evan."],
            typeSpeed: 15,
            showCursor: false
        });
    }, 100);

    setTimeout(function(){
        $(".fadein").hide().css({opacity:100}).fadeIn(1000);
    }, 1230);

    $(".fade-on-scroll").hide();
    $("#contact-info").hide();

    $("#pulldown-icon").click(function(){
        if( $("#pulldown").data('status') == 'clicked' ) {
            $("#pulldown").data('status','not_clicked');
            $('#pulldown').slideUp(200);
        } else {
            $("#pulldown").data('status','clicked');
            $('#pulldown').slideDown(200);
        }
    });

    var textScramble = true;

    $('#aktary').waypoint(function() {
        if (textScramble) {
            new TextScramble(document.querySelector('#aktary')).setText('AktaryTech');
            new TextScramble(document.querySelector('#nfl')).setText('National Football League');
            new TextScramble(document.querySelector('#hesslex')).setText('Hesslex Design Agency');
            new TextScramble(document.querySelector('#freelance')).setText('Freelance');
            new TextScramble(document.querySelector('#lmu')).setText('Loyola Marymount University');
            new TextScramble(document.querySelector('#webDevBoot')).setText('Web Development Bootcamp');
            /*new TextScramble(document.querySelector('#progLang')).setText('Programming Languages');
            new TextScramble(document.querySelector('#webDev')).setText('Web Development');
            new TextScramble(document.querySelector('#design')).setText('Design');*/
            textScramble = false;
        }
    }, {offset:'100%'});

    var fadeOnScroll = true;

    $('.projects').waypoint(function() {
        if (fadeOnScroll) {
            $(".fade-on-scroll").fadeIn(1000);
            fadeOnScroll = false;
        }
    }, {offset:'100%'});

    $("#contact-check button").click(function() {
        if ($("#contact-check input").val() == 12) {
            $("#contact-check").fadeOut(500);
            setTimeout(function(){
                $("#contact-info").fadeIn(500);
            }, 500);
        } else {
            $("#contact-check p").text("That is incorrect. What is seven plus five?");
        }
    });


    $("#footer p").text("© Evan Hessler "  + new Date().getFullYear().toString());

    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top - 30
        }, 500);
        return false;
    });

    $("#aktary-click").click(function(){
        $("#aktary-box").show();
    }); 
});