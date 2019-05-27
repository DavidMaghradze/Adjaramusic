$( document ).ready(function() {
    $('.header__hamburger').click(()=>{
        $('.header__hamburger').toggleClass('shown');
        $('.header__menu').slideToggle();
    })
});