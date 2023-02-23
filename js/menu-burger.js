function removeActiveClasses() {
	$('.header__close-button, .header__menu-list').removeClass('active');
	$('.header__menu-body').removeClass('modal');
	$('body').removeClass('lock');
};

function addActiveClasses() {
	$('.header__close-button, .header__menu-list').addClass('active');
	$('.header__menu-body').addClass('modal');
	$('body').addClass('lock');
}

function showMenu() {
	$('.header__menu-burger').click(function (event) {
		addActiveClasses();
	});
};

function closeMenuByButton() {
	$('.header__close-button').click(function (event) {
		removeActiveClasses()
	});
};

function closeMenuWhenLessWidth() {
	if ($(window).width() >= 993) {
		removeActiveClasses();
	}
};

function closeMenuByEmptyArea() {
	$('.header__menu-body').click(function(event) {
		if(!$('.header__menu-list').is(event.target) && !$('.header__menu-list').children().is(event.target)) removeActiveClasses();
	});
}

$(document).ready(function () {
	showMenu();
	closeMenuByButton();
	closeMenuByEmptyArea();
});

$(window).resize(function () {
	closeMenuWhenLessWidth();
});