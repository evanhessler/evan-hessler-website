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

    $("#pulldown-icon").click(function(){
        if( $("#pulldown").data('status') == 'clicked' ) {
            console.log('here2');
            $("#pulldown").data('status','not_clicked');
            $('#pulldown').slideUp(200);
        } else {
            $("#pulldown").data('status','clicked');
            $('#pulldown').slideDown(200);
        }
    });

    $('#aktary').waypoint(function() {
        new TextScramble(document.querySelector('#aktary')).setText('AktaryTech');
        new TextScramble(document.querySelector('#nfl')).setText('National Football League');
        new TextScramble(document.querySelector('#hesslex')).setText('Hesslex Design Agency');
        new TextScramble(document.querySelector('#freelance')).setText('Freelance');
        new TextScramble(document.querySelector('#lmu')).setText('Loyola Marymount University');
        new TextScramble(document.querySelector('#webDevBoot')).setText('Web Development Bootcamp');
        new TextScramble(document.querySelector('#progLang')).setText('Programming Languages');
        new TextScramble(document.querySelector('#webDev')).setText('Web Development');
        new TextScramble(document.querySelector('#design')).setText('Design');
    }, {offset:'100%'});

});