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
            new TextScramble(document.querySelector('#freelance')).setText('Freelancer');
            new TextScramble(document.querySelector('#lmu')).setText('Loyola Marymount University');
            new TextScramble(document.querySelector('#webDevBoot')).setText('Web Development Bootcamp');
            new TextScramble(document.querySelector('#progLang')).setText('Programming Languages');
            new TextScramble(document.querySelector('#webDev')).setText('Web Development');
            new TextScramble(document.querySelector('#design')).setText('Design');

            setTimeout(function(){
                $(".resume-fade-in").fadeIn(500);
            }, 1550);

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
            $("#contact-check input").val('');
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
        if ($(".aktary-box").is(":visible")) {
            $(".aktary-box").fadeOut(100);
            $("#aktary-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#aktary-click .decorative-line").addClass("no-margin");
            $("#aktary-click .decorative-line").removeClass("low-margin");
        } else {
            $("#aktary-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".aktary-box").fadeIn(100);
            $("#aktary-click .decorative-line").removeClass("no-margin");
            $("#aktary-click .decorative-line").addClass("low-margin");
        }
    });

    $("#nfl-click").click(function(){
        if ($(".nfl-box").is(":visible")) {
            $(".nfl-box").fadeOut(100);
            $("#nfl-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#nfl-click .decorative-line").addClass("no-margin");
            $("#nfl-click .decorative-line").removeClass("low-margin");
        } else {
            $("#nfl-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".nfl-box").fadeIn(100);
            $("#nfl-click .decorative-line").removeClass("no-margin");
            $("#nfl-click .decorative-line").addClass("low-margin");
        }
    });

    $("#hesslex-click").click(function(){
        if ($(".hesslex-box").is(":visible")) {
            $(".hesslex-box").fadeOut(100);
            $("#hesslex-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#hesslex-click .decorative-line").addClass("no-margin");
            $("#hesslex-click .decorative-line").removeClass("low-margin");
        } else {
            $("#hesslex-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".hesslex-box").fadeIn(100);
            $("#hesslex-click .decorative-line").removeClass("no-margin");
            $("#hesslex-click .decorative-line").addClass("low-margin");
        }
    });

    $("#freelance-click").click(function(){
        if ($(".freelance-box").is(":visible")) {
            $(".freelance-box").fadeOut(100);
            $("#freelance-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#freelance-click .decorative-line").addClass("no-margin");
            $("#freelance-click .decorative-line").removeClass("low-margin");
        } else {
            $("#freelance-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".freelance-box").fadeIn(100);
            $("#freelance-click .decorative-line").removeClass("no-margin");
            $("#freelance-click .decorative-line").addClass("low-margin");
        }
    });

    $("#lmu-click").click(function(){
        if ($(".lmu-box").is(":visible")) {
            $(".lmu-box").fadeOut(100);
            $("#lmu-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#lmu-click .decorative-line").addClass("no-margin");
            $("#lmu-click .decorative-line").removeClass("low-margin");
        } else {
            $("#lmu-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".lmu-box").fadeIn(100);
            $("#lmu-click .decorative-line").removeClass("no-margin");
            $("#lmu-click .decorative-line").addClass("low-margin");
        }
    });

    $("#webDevBoot-click").click(function(){
        if ($(".webDevBoot-box").is(":visible")) {
            $(".webDevBoot-box").fadeOut(100);
            $("#webDevBoot-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#webDevBoot-click .decorative-line").addClass("no-margin");
            $("#webDevBoot-click .decorative-line").removeClass("low-margin");
        } else {
            $("#webDevBoot-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".webDevBoot-box").fadeIn(100);
            $("#webDevBoot-click .decorative-line").removeClass("no-margin");
            $("#webDevBoot-click .decorative-line").addClass("low-margin");
        }
    });

    $("#progLang-click").click(function(){
        if ($(".progLang-box").is(":visible")) {
            $(".progLang-box").fadeOut(100);
            $("#progLang-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#progLang-click .decorative-line").addClass("no-margin");
            $("#progLang-click .decorative-line").removeClass("low-margin");
        } else {
            $("#progLang-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".progLang-box").fadeIn(100);
            $("#progLang-click .decorative-line").removeClass("no-margin");
            $("#progLang-click .decorative-line").addClass("low-margin");
        }
    });

    $("#webDev-click").click(function(){
        if ($(".webDev-box").is(":visible")) {
            $(".webDev-box").fadeOut(100);
            $("#webDev-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#webDev-click .decorative-line").addClass("no-margin");
            $("#webDev-click .decorative-line").removeClass("low-margin");
        } else {
            $("#webDev-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".webDev-box").fadeIn(100);
            $("#webDev-click .decorative-line").removeClass("no-margin");
            $("#webDev-click .decorative-line").addClass("low-margin");
        }
    });

    $("#design-click").click(function(){
        if ($(".design-box").is(":visible")) {
            $(".design-box").fadeOut(100);
            $("#design-click .resume-arrow").css({'transform': 'rotate(360deg)'});
            $("#design-click .decorative-line").addClass("no-margin");
            $("#design-click .decorative-line").removeClass("low-margin");
        } else {
            $("#design-click .resume-arrow").css({'transform': 'rotate(90deg)'});
            $(".design-box").fadeIn(100);
            $("#design-click .decorative-line").removeClass("no-margin");
            $("#design-click .decorative-line").addClass("low-margin");
        }
    });

    $("#nfl-click .decorative-line").click(function(){
        console.log("herel23jlk2");
    })
});