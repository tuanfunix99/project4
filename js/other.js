$(document).ready(function () {
    

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