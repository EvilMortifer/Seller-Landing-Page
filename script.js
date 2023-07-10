$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive:{
 0:{
     items:1
 },
 600:{
     items:1
 },
 1000:{
     items:4
 }
}
  });

  $(".slider2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive:{
     0:{
        items: 2
     },
     600:{
        items: 2
     },
     1000:{
        items: 6
     }
    }
  });
  $(".slider3").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive:{
     0:{
        items: 2
     },
     600:{
        items: 2
     },
     1000:{
        items: 5
     }
    }
  });
