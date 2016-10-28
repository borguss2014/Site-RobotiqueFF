$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
          //$('.navbar').addClass('navbar-fixed-top');
            $('.scrollup').fadeIn();
        } else {
          //$('.navbar').removeClass('navbar-fixed-top');
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});
