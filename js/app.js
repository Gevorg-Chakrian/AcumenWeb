

$(document).ready(function () {
    //Owl
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    }).on('click',()=>{resetCarouselTimer('hero-slider')});

    $('#reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});

//Reset timer on carousel if it's interacted with
function resetCarouselTimer(carousel_id){
  console.log('resetting timer for: '+carousel_id);
  //A handy feature of jQuery is that it returns the object at the end of the function
  //So functions can be chained together
  $('#'+carousel_id).trigger('play.owl.autoplay').trigger('stop.owl.autoplay');
}
