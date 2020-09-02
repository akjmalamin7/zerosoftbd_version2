$(document).ready(function(){
    //mix it up
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

    // client feadback slider
    
});

$(document).ready(function(){
    $('.feadback-slider ').owlCarousel({
        items:2,
        loop:true,
        margin:10,
        nav:true,
        margin:20,
        autoplay:true,
        autoplayTimeout:5000,
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
})