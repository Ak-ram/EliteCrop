// Nice Scrolling
$("body").niceScroll({
    cursorcolor:"#ed1d24",
    cursorwidth:"8px",
    scrollspeed: 130,
    mousescrollstep: 60,
    cursorborderradius: 3,
    cursorborder: "0px solid #fff",
    zindex: 2
      });

// Slider Height
$(function() {
    'use strict';
    var winH = $(window).height(),
        heading__part = $(".heading__part").innerHeight();
$('.carousel__part, .carousel-item, .overlay').height(winH - heading__part);
    
});

// Loading page
window.onload=()=>{
    let loader = document.querySelector('.loading_page');
    setTimeout(() => {
        loader.classList.remove('d-flex')
    loader.classList.add('d-none')
    }, 1000);
}