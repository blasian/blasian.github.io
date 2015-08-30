$("#cvButton").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#services").offset().top)
    }, 2000);
});

$("#topButton").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#top").offset().top)
    }, 2000);
});

$("#contactButton").click(function(e) {
	e.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#contact").offset().top)
    }, 2000);
});