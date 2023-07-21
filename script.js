$(document).ready(function(){
    $("#news-slider").owlCarousel({
        items: 3,
        navigation: true,
        navigationText:["",""],
        autoPlay:true,
    });

    $("#brand-slider").owlCarousel({
        items: 6,
        dots: false,
        mouseDrag: true,
        navigation: true,
        navigationText:["",""],
        autoPlay:true,
        responsiveClass: true,
        responsive: {
        0:{
          items: 2
        },
        480:{
          items: 2
        },
        769:{
          items: 6
        }
        }
    });
    $("#news-slider-2").owlCarousel({
        items: 4,
        dots: false,
        mouseDrag: true,
        navigation: true,
        navigationText:["",""],
        autoPlay:true,
        responsiveClass: true,
        responsive: {
        0:{
          items: 2
        },
        480:{
          items: 2
        },
        769:{
          items: 6
        }
        }
    });
});
