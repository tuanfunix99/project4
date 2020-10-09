$(document).ready(function () {
    
    // Xử lí hiệu ứng slide
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // Xử lí hiệu ứng menu
    $('.icon img').click(function(){
        $('.menu-vertical').toggleClass('move');
        $('body').toggleClass('hideY');
    });

    $('.menu-vertical .top img').click(function(){
        $('.menu-vertical').removeClass('move');
        $('body').removeClass('hideY');
    });


    // Xủ lí back to top
    $('.back').click(function(){
        console.log('click');
        $('html').animate({scrollTop: 0}, 600);
    });
});