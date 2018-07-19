$(document).ready(function() {
	$("#pulldown").hide();
	$("#pulldown").data('status', 'not_clicked');

	$("#pulldown-icon").click(function(){
	    if( $("#pulldown").data('status') == 'clicked' ) {
	        $("#pulldown").data('status','not_clicked');
	        $('#pulldown').slideUp(200);
	    } else {
	        $("#pulldown").data('status','clicked');
	        $('#pulldown').slideDown(200);
	    }
	});

	$("nav li").click(function() {
	    $("#pulldown").hide();
	    $("#pulldown").data('status', 'not_clicked');
	});
});