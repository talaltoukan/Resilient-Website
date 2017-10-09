// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".navbar-default").outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('navbar-default').addClass('nav-up');
        $('.logimg').css("opacity", 0)
    } else if(st + $(window).height() < $(document).height()) {
        $('.navbar').removeClass('nav-up').addClass('navbar-default');
        $('.logimg').css("opacity", 1)

    }
    
    lastScrollTop = st;
}


$( function() {
    /*
    - how to call the plugin:
    $( selector ).cbpNTAccordion( [options] );
    - destroy:
    $( selector ).cbpNTAccordion( 'destroy' );
    */

    $( '#cbp-ntaccordion' ).cbpNTAccordion();

} );