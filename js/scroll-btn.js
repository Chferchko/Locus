const button = $('#btn');
const scrollChange = 1;


function toggleScrollButtonVisibility() {
    let scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        button.addClass('visible');
    } else {
        button.removeClass("visible");
    }    
}

function scrollToBeginning(duration = 300) {
    $('html, body').animate({scrollTop:0}, duration);
};

$(window).scroll(function () {
    toggleScrollButtonVisibility()
});

$(button).click(function () {
    scrollToBeginning(1000);
});

/* 
const visibleClass = 'visible';
const heightToTogglePx = 300;
const buttonId = '#btn';

function getButton() {
    return $(buttonId);
};

let button = getButton();

function getCurrentScrollHeight() {
    return $(window).scrollTop();
}

function showElement(element) {
    $(element).addClass(visibleClass);
};

function hideElement(element) {
    $(element).removeClass(visibleClass);
};

function isVisibilityBreakpoint(height) {
    return getCurrentScrollHeight() >= height;
};

function toggleVisibilityButtonDependsOnHeight(button, height) {
    isVisibilityBreakpoint(height) ? showElement(button) : hideElement(button);
};

function onScrollEventHandler(event) {
    toggleVisibilityButtonDependsOnHeight(button, heightToTogglePx);
};

$(window).scroll(onScrollEventHandler);
 */
