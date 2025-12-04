"use strict"

$(document).ready(function () {

    function runAnimation() {
        $('#logo > *').finish().css({ opacity: 0 });
        $('.title').css('transform', 'scale(1.0)');

        $('.code').animate(
            {
                opacity: 1,
                letterSpacing: '5px',
                marginTop: '0px'
            },
            {
                duration: 1500,
                easing: 'easeOutElastic',

                queue: true,
                specialEasing: {
                    opacity: 'swing',
                    letterSpacing: 'easeOutBack'
                },
                step: function(now, fx) {
                    if (fx.prop === 'opacity') {
                        const progress = fx.pos;
                        $(this).css('transform', `rotate(${progress * 360}deg) translateY(${(1-progress)*100}px)`);
                    }
                },

                complete: function () {
                    $('.title').animate({
                        opacity: 1,
                    }, {
                        duration: 1200,
                        easing: 'easeOutBounce',
                        complete: function () {
                           $(this).css('transform', 'scale(1.5)');
                        }
                    });
                }
            }
        );
    }

    $('#start, #logo').on('click', runAnimation);
});