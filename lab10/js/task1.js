"use strict"

$(document).ready(function() { 
    const $text = $('#hide_text');
    $text.hide();

    $('.button').click(function() {
        $text.show(200);
    });

    $('body').prepend($('<p></p>'));
    $('body').append($('<p></p>'));
    $("p:first").text("DOM first!");
    jQuery("p:last").text("DOM last!");

    $text.addClass('makeRed');

    $text.on('click', () => {
        $text.addClass('divClicked');
    });
    $text.on('dblclick', () => {
        $text.removeClass('divClicked');
    });

    const $oneClickBtn = $('#oneClickBtn');
    const $dblClickBtn = $('#dblClickBtn');

    $oneClickBtn.on('click', () => {
        alert("Одинарний клік");
    });

    $dblClickBtn.on('dblclick', () => {
        alert("Подвійний клік");
    });

     const $showImgBtn = $('<p id="showImageBtn">Показати зображення</p>');
    $('body').append($showImgBtn);

    const $img = $('<img src="image.jpg" alt="Підпис зображення" id="dynamicImg" style="display:none; width:300px; cursor:pointer;">');
    $('body').append($img);

    $showImgBtn.on('click', () => {
        $img.show(200);
    });

    $img.on('click', () => {
        $img.hide(200);
    });

    $img.on('mouseover', function() {
        $(this).attr('title', 'Це підпис до зображення');
    });

    $img.on('mouseout', function() {
        $(this).removeAttr('title');
    });
});