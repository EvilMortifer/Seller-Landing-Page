$(document).ready(function(){
    $("#city-slider").owlCarousel({
      loop: true,
      navigation: true,
      navigationText:["",""],
      autoplay:true,
      autoplayTimeout: 2500,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        }, 
        769:{
          items: 2
        }
      }
    });

    $("#news-slider").owlCarousel({
      loop: true,
      navigation: true,
      navigationText:["",""],
      autoplay:true,
      autoplayTimeout: 2500,
      responsive: {
        0:{
          items: 1
        },
        480:{
          items: 1
        }, 
        769:{
          items: 4
        }
      }
  });

  $("#brand-slider").owlCarousel({
      loop: true,
      dots: false,
      mouseDrag: true,
      navigation: true,
      navigationText:["",""],
      autoPlay:true,
      autoplayTimeout: 2500,
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
      loop: true,
      dots: false,
      mouseDrag: true,
      navigation: true,
      navigationText:["",""],
      autoPlay:true,
      autoplayTimeout: 2500,
      responsiveClass: true,
      responsive: {
      0:{
        items: 1
      },
      480:{
        items: 1
      },
      769:{
        items: 4
      }
      }
  });
});
