$(function () {

    $("#run").click(function () {

        let newElement = $("<div class='newElem'>Новий елемент перед targetBox</div>");
        newElement.insertBefore("#targetBox");

        $("#targetBox").empty();

        $("#targetBox").height(function (index, oldHeight) {
            return oldHeight + 40;
        });

        let width = $("#targetBox").outerWidth();
        console.log("Зовнішня ширина targetBox (outerWidth):", width);
        alert("outerWidth targetBox = " + width + " px");
    });

});