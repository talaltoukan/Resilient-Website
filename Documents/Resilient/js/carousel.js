$(document).ready(function(){
	$(".single-item").slick({
	    infinite: true,
	    useCSS: true,
	    autoplay: true,
	    arrows: true,
	    dots: true,
	    draggable: false,
        initialSlide: 0,
	    easing: 'easeInOutBounce'

	});
});

$('.stat').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        	if(this.id == "statperc"){
            	$(this).text(Math.ceil(now) + "+%");
        	}
        	else if(this.id == "clstat"){
        		$(this).text(Math.ceil(now) + "+");
        	}
        	else {
        		$(this).text(Math.ceil(now));
        	}
        }
    });
});