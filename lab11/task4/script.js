"use strict"

$(function () {

    $("#btnClass").click(function () {
        $(".item")
            .filter(".special")
            .addClass("modified")
            .append(" — modify");
    });

    $("#btnThird").click(function () {
        $("#list li")
            .filter(function (index) {
                return (index + 1) % 3 === 0;
            })
            .addClass("modified")
            .append(" — modify");
    });

});