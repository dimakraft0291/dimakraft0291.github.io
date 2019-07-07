/*===========POPUP==============*/

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

/*================FLIPCLOCK===============*/

$(document).ready(function() {

    var clock = $(".clock").FlipClock({
        clockFace : "DailyCounter",
        autoStart : false,
        callbacks : {
            stop : function() {
                $(".message").html("Время прошло");
            }
        }
    });

    var dt = "July 10 2019 18:54:45";
    var first = new Date(dt);
    var last = Date.now();
    var remaining = first - last;
    remaining /=1000;

    clock.setTime(remaining);
    clock.setCountdown(true);
    clock.start();
});

/*================FLIPCLOCK1===============*/

$(document).ready(function() {

    var clock = $(".clock1").FlipClock({
        clockFace : "DailyCounter",
        autoStart : false,
        callbacks : {
            stop : function() {
                $(".message1").html("Время прошло");
            }
        }
    });

    var dt = "July 10 2019 18:54:45";
    var first = new Date(dt);
    var last = Date.now();
    var remaining = first - last;
    remaining /=1000;

    clock.setTime(remaining);
    clock.setCountdown(true);
    clock.start();
});