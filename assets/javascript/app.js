var right = 0;
var wrong = 0;
var timeLeft = 30;
var elem = document.getElementById('countdown');
var timerId = setInterval(countdown, 1000);

$(document).ready(function () {

    // setTimeout(function(){
    //     document.getElementById('sound1').play();
    //     document.getElementById('sound1').muted = false;
    // }, 3000);

    setTimeout(function () {
        $('#whole').hide();
    }, 8000);

});

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

$(".btn").on("click", function () {
    $("#q1").show();
    $("#countdown").show();
});

$(".q1").on("click", function () {
    if ($(this).hasClass("right")) {
        console.log("right");
        right++
        $("#q1q").hide();
        $("#q1r").show();
        timeLeft = 30;
        setTimeout(function () {
            $('#q1').hide();
            $('#q2').show();
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");

    }

});