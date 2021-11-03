$(function(){
    $('#submittedMessageBox').hide();

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
    $('.production-photo').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#production-photo').offset().top }, 1000);
        e.preventDefault();
    });
    $('.link-history').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#history').offset().top }, 1000);
        e.preventDefault();
    });
    $('.link-prod').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#production').offset().top }, 1000);
        e.preventDefault();
    });
    $('.link-drill').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#drill').offset().top }, 1000);
        e.preventDefault();
    });
    $('.link-mill').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#mill').offset().top }, 1000);
        e.preventDefault();
    });
    $('.link-contacts').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#contacts').offset().top }, 1000);
        e.preventDefault();
    });

    $('#form input.required').on('input focus blur', function () {
        if ($(this).val() === '') {
            $(this).removeClass('validate-input').addClass('error-input');
        }
        if ($(this).val() !== '') {
            $(this).removeClass('error-input').addClass('validate-input');
        }
    })
    $("#form").submit(function (e) {
        let $form = $(this)
        let result = true
        $("input.required").each(function (){
            if ($(this).val() === "") {
                $(this).focus().addClass('error-input');
                return result = false;
            }
        });
        if (result === false) {
            return false
        } else {
            let dataString =
                '&name='+ $('#inputName').val() +
                '&email=' + $('#inputEmail').val() +
                '&phone=' + $('#inputPhone').val() +
                '&areaMessage' + $('textarea#textareaMessage').val()

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                error: function(jqXHR, textStatus, err) {
                    $('#submittedMessageBox').html("<p style='color: red'>Произошла ошибка</p>").fadeIn()
                    setTimeout(function () {
                        $('#submittedMessageBox').fadeOut().text('')
                    }, 5000)
                },
                beforeSend: function() {
                    $('#submittedMessageBox').html("<p style='color: #000000'>Отправляем..</p>").fadeIn();
                },
                success: function(result) {
                    $('#form')[0].reset();
                    $('#submittedMessageBox').html("<p style='color: #000000'>Заказ отправлен, вскоре с вами свяжется наш сотрудник</p>").fadeIn()
                    setTimeout(function () {
                        $('#submittedMessageBox').fadeOut().text('');
                    }, 5000);
                }
            })
            e.preventDefault();
            return false;
        }
    })
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