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
            console.log($("#pulldown").data('status') == 'clicked');
        }
    });

});