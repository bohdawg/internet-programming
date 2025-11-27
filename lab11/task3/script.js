"use strict"

$(function() {
    function clearHighlight() {
        $(".highlight").removeClass("highlight");
    }

    $("#btnEach").click(function() {
        clearHighlight();
        $(".box").each(function(index) {
            $(this).toggleClass("highlight");
            console.log("Елемент #" + index + ": " + $(this).text());
        });
    });

    $("#btnNext").click(function() {
        clearHighlight();
        $(".special").next().addClass("highlight");
    });

    $("#btnPrevAll").click(function() {
        clearHighlight();
        $(".special").prevAll().addClass("highlight");
    });

    $("#btnContents").click(function() {
        clearHighlight();
        let contents = $("#container").contents();
        console.log("Вміст .contents():", contents);
        contents.each(function() {
            if (this.nodeType === 3) {
                console.log("Текст:", this.nodeValue.trim());
            }
        });
        alert("Інформацію виведено в консоль!");
    });

    $("#btnNextUntil").click(function() {
        clearHighlight();
        $(".box:first").nextUntil(".special").addClass("highlight");
    });

});