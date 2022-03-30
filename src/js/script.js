$(document).ready(function(){
    $('.partners__all').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        variableWidth: true,
    });
  });

//pageup
$(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });  
});

//hamburger

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menuUppear'),
    menulink = document.querySelectorAll('.menu__link-a'),
    close = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });


menulink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}); 