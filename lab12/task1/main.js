"use strict"

$(document).ready(function () {

    //fadeTo()
    $('button[data-action^="fadeTo"]').click(function () {
        const action = $(this).data('action');
        if (action === 'fadeTo-0.3') $('#b1').fadeTo(1000, 0.3);
        if (action === 'fadeTo-0.8') $('#b1').fadeTo('slow', 0.8);
        if (action === 'fadeTo-1-cb') $('#b1').fadeTo(2000, 1, () => alert('fadeTo завершено!'));
    });

    //fadeToggle()
    $('button[data-action^="fadeToggle"]').click(function () {
        const action = $(this).action || $(this).data('action');
        if (action === 'fadeToggle-1500') $('#b2').fadeToggle(1500);
        if (action === 'fadeToggle-fast') $('#b2').fadeToggle('fast');
    });

    //finish()
    $('#startLong').click(function () {
        $('#b3')
            .fadeTo(2000, 0.2)
            .fadeTo(2000, 0.9)
            .slideUp(2000)
            .slideDown(2000)
            .animate({fontSize:'30px'}, 2000)
            .animate({fontSize:'18px'}, 2000);
    });
    $('#stopNow').click(function () {
        $('#b3').finish();
    });

    //slideToggle()
    $('button[data-action="slideToggle"]').click(function () {
        $('#b4').slideToggle(1000);
    });
});