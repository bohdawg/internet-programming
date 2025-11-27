$(function(){

    $("#apply").click(function(){

        $("#msg").html("<i>Новий</i> текст");

        $("#infoBox").css("background-color", "#ffe0b2");
        $("#infoBox").css({
            "border-radius": "10px",
            "border": "1px solid #ff9800"
        });

        let name = $("#username").val();
        console.log("Введене ім’я:", name);
        $("#username").val(name.toUpperCase());

        let oldState = $("#infoBox").attr("data-state");
        console.log("Попередній стан:", oldState);


        $("#infoBox").attr("data-state", "updated");

        $("#infoBox").attr({
            "title": "Це панель інформації",
            "data-role": "box"
        });

        $("#infoBox").attr("data-clicks", function(index, old) {
            if (!old) return 1;
            return Number(old) + 1;
        });

        $("#infoBox").removeAttr("title");
    });

});