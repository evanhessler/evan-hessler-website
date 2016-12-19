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