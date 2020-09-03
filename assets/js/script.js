
jQuery(document).ready(function(){
    //Owl carousel
    jQuery('.feadback-slider ').owlCarousel({
        items:2,
        loop:true,
        margin:10,
        nav:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:10000,
        dots:false,
        slideTransition:'linear',
        slideBy:1,
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            }
        }
    });

    //partner logo
    $(".partner-logo").owlCarousel({
        items:6,
        margin:30,
        loop:true,
        slideBy:1,
        nav:false,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })

    //mixitup
    var mixer = mixitup('.latest-product');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    //Counter up
    jQuery('.countUp').counterUp({
        delay: 10,
        time: 1000
    });
    
  
   
    
});

//sticky header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});