/*$(function(){
    $(".button-m").click(function() {	
    	$('#exampleModal').arcticmodal();
	});
});
*/

/*$(document).ready(function() {
    $('#overlay').css({opacity: 0.8}); // Делаем затемняющий фон кроссбраузерным
    positionCenter($('.popup'));// Позиционируем всплывающее окно по центру
	
    $('.button-m').click(function() { // При клике по ссылке, показываем всплывающее окно
        $('.popup, #overlay').fadeIn(300);
        /*$('.popup').css({'top': $(window).scrollTop() +118})
    });
	
    $('#close_popup').click(function() { // Скрываем всплывающее окно при клике по кнопке закрыть
		$('.popup, #overlay').fadeOut(300);
    });
	
    function positionCenter(elem) { // Функция, которая позиционирует всплывающее окно по центру
        elem.css({
            marginTop: '-' + elem.height() / 0 + 'px',
			marginLeft: '-' + elem.width() / 0 + 'px'
        });
   }
});*/

    $(document).ready(function() {

    $('#overlay').css({

    opacity: 0.8

    }); // Делаем затемняющий фон кроссбраузерным

    positionCenter($('.popup')); // Позиционируем всплывающее окно по центру

    $('.button-push').click(function(e) { // При клике по ссылке, показываем всплывающее окно

    $('.popup, #overlay').fadeIn(300);

    e.preventDefault();

    /*$('.popup').css({'top': $(window).scrollTop() +118})*/

    });

    $('#close_popup').click(function(e) { // Скрываем всплывающее окно при клике по кнопке закрыть

    $('.popup, #overlay').fadeOut(300);

    e.preventDefault();

    });

    function positionCenter(elem) { // Функция, которая позиционирует всплывающее окно по центру

    elem.css({

    marginTop: '-' + elem.height() / 0 + 'px',

    marginLeft: '-' + elem.width() / 0 + 'px'

    });

    }

    });