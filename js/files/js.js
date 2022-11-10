// кнопка выбора языка
let lang_icon = document.querySelector('.lang__btn');
let lang_menu = document.querySelector('.lang');
lang_icon.addEventListener("click", function (e) {
	e.preventDefault();
	lang_menu.classList.toggle('_active');
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.lang')) {
		lang_menu.classList.remove('_active');
	}
});

$(window).scroll(function() {
	
	var $body = $('body');
	
	$("#slide1").each(function(){
		var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
		
		if((bottom_of_screen > window.innerHeight)){
			$body.addClass('_active')
		}
		else {
			$body.removeClass('_active')
		}
	});
});