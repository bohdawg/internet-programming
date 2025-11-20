$(document).ready(function() {
    $("#checkForm").submit(function(e) {
    e.preventDefault();
    
    const value = $("#textInput").val().trim();
    const $msg = $("#message");

    if (value === "correct") {
        $msg.text("Успішно!").css("color", "green").show();
    } else {
        $msg.text("Неправильно!").css("color", "red").show().fadeOut(1000);
    }
    });
});