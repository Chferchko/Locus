const header = $(".header");
const scrollChange = 1;
$(window).scroll(function() {
    let scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header-scrolled');
    } else {
        header.removeClass("header-scrolled");
    }
});