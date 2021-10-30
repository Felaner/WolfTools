$(function(){
    $('.main-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#main').offset().top }, 1000);
        e.preventDefault();
    });
    $('.about-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });
    $('.production-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#production').offset().top }, 1000);
        e.preventDefault();
    });
    $('.history-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#history').offset().top }, 1000);
        e.preventDefault();
    });
    $('.contacts-link').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
        e.preventDefault();
    });
});

const speed = document.getElementById('speed'),
    diameter = document.getElementById('diameter'),
    tooth = document.getElementById('tooth'),
    numberOfTeeth = document.getElementById('numberOfTeeth'),
    turnover = document.querySelector('.turnover'),
    innings = document.querySelector('.innings'),
    btnResult = document.querySelector('.btn-result');

btnResult.addEventListener('click', function () {
    if (speed.value !== '' && diameter.value !== '' && tooth.value !== '' && numberOfTeeth.value !== '') {
        let S = (speed.value * 1000) / (3.14 * diameter.value),
            Vf = tooth.value * numberOfTeeth.value * S
        turnover.innerText = "Количество оборотов = " + Math.round(S) + " (об/мин)";
        innings.innerText = "Подача = " + Math.round(Vf) + " (мм/мин)";
    } else {
        turnover.innerText = "Заполните все поля";
    }
});