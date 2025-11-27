"use strict"

$(function () {
    const numbers = [1, 2, 3, 4, 5, 6];
    const colors = ["red", "green", "blue"];
    const someObject = {};
    const obj2 = { a: 1 };

    const $output = $("#output");

    $("#btnGrep").click(function () {
        let even = $.grep(numbers, function (value) {
            return value % 2 === 0;
        });

        $output.text(
            "Масив: " + JSON.stringify(numbers) + "\n" +
            "Парні елементи (grep): " + JSON.stringify(even)
        );
    });

    $("#btnInArray").click(function () {
        let index = $.inArray("green", colors);

        $output.text(
            "Масив кольорів: " + JSON.stringify(colors) + "\n" +
            "Пошук 'green' → індекс: " + index
        );
    });

    $("#btnIsArray").click(function () {
        let res1 = $.isArray(numbers);
        let res2 = $.isArray(someObject);

        $output.text(
            "numbers є масивом? → " + res1 + "\n" +
            "someObject є масивом? → " + res2
        );
    });

    $("#btnIsEmptyObject").click(function () {
        let empty1 = $.isEmptyObject(someObject);
        let empty2 = $.isEmptyObject(obj2);

        $output.text(
            "someObject = {}\n" +
            "Порожній? → " + empty1 + "\n\n" +

            "obj2 = { a:1 }\n" +
            "Порожній? → " + empty2
        );
    });

});