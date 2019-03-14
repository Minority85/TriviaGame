var right = 0;
var wrong = 0;
var none = 0;
var timeLeft = 60;
var elem = document.getElementById('countdown');
var timerId = setInterval(countdown, 1000);
var q1 = false;

$(document).ready(function () {

    setTimeout(function () {
        $('#whole').hide();
    }, 8000);
    stop();
});

function start() {

    timerId = setInterval(countdown, 1000);

}

function stop() {

    clearInterval(timerId);

}

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        timeout();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}

$(".btn").on("click", function () {
    $("#q1").show();
    $("#countdown").show();
    q1 = true;
    timeLeft = 60;
    start()
});

$(".q1").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q1q").hide();
        $("#q1r").show();
        setTimeout(function () {
            $("#q1q").show();
            $("#q1r").hide();
            $('#q1').hide();
            $('#q2').show();
            timeLeft = 60;
            start();
            q1 = false;
            q2 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q1q").hide();
        $('#q1w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q1q").show();
            $('#q1w').hide();
            $('#q1').hide();
            $('#q2').show();
            q1 = false;
            q2 = true;
        }, 8000);
    }

});

$(".q2").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q2q").hide();
        $("#q2r").show();
        setTimeout(function () {
            $("#q2q").show();
            $("#q2r").hide();
            $('#q2').hide();
            $('#q3').show();
            timeLeft = 60;
            start();
            q2 = false;
            q3 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q2q").hide();
        $('#q2w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q2q").show();
            $('#q2w').hide();
            $('#q2').hide();
            $('#q3').show();
            q2 = false;
            q3 = true;
        }, 8000);
    }
});

$(".q3").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q3q").hide();
        $("#q3r").show();
        setTimeout(function () {
            $("#q3q").show();
            $("#q3r").hide();
            $('#q3').hide();
            $('#q4').show();
            timeLeft = 60;
            start();
            q3 = false;
            q4 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q3q").hide();
        $('#q3w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q3q").show();
            $('#q3w').hide();
            $('#q3').hide();
            $('#q4').show();
            q3 = false;
            q4 = true;
        }, 8000);
    }
});

$(".q4").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q4q").hide();
        $("#q4r").show();
        setTimeout(function () {
            $("#q4q").show();
            $("#q4r").hide();
            $('#q4').hide();
            $('#q5').show();
            timeLeft = 60;
            start();
            q4 = false;
            q5 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q4q").hide();
        $('#q4w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q4q").show();
            $('#q4w').hide();
            $('#q4').hide();
            $('#q5').show();
            q4 = false;
            q5 = true;
        }, 8000);
    }
});

$(".q5").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q5q").hide();
        $("#q5r").show();
        setTimeout(function () {
            $("#q5q").show();
            $("#q5r").hide();
            $('#q5').hide();
            $('#q6').show();
            timeLeft = 60;
            start();
            q5 = false;
            q6 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q5q").hide();
        $('#q5w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q5q").show();
            $('#q5w').hide();
            $('#q5').hide();
            $('#q6').show();
            q5 = false;
            q6 = true;
        }, 8000);
    }
});

$(".q6").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q6q").hide();
        $("#q6r").show();
        setTimeout(function () {
            $("#q6q").show();
            $("#q6r").hide();
            $('#q6').hide();
            $('#q7').show();
            timeLeft = 60;
            start();
            q6 = false;
            q7 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q6q").hide();
        $('#q6w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q6q").show();
            $('#q6w').hide();
            $('#q6').hide();
            $('#q7').show();
            q6 = false;
            q7 = true;
        }, 8000);
    }
});

$(".q7").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q7q").hide();
        $("#q7r").show();
        setTimeout(function () {
            $("#q7q").show();
            $("#q7r").hide();
            $('#q7').hide();
            $('#q8').show();
            timeLeft = 60;
            start();
            q7 = false;
            q8 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q7q").hide();
        $('#q7w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q7q").show();
            $('#q7w').hide();
            $('#q7').hide();
            $('#q8').show();
            q7 = false;
            q8 = true;
        }, 8000);
    }
});

$(".q8").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q8q").hide();
        $("#q8r").show();
        setTimeout(function () {
            $("#q8q").show();
            $("#q8r").hide();
            $('#q8').hide();
            $('#q9').show();
            timeLeft = 60;
            start();
            q8 = false;
            q9 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q8q").hide();
        $('#q8w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q8q").show();
            $('#q8w').hide();
            $('#q8').hide();
            $('#q9').show();
            q8 = false;
            q9 = true;
        }, 8000);
    }
});

$(".q9").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q9q").hide();
        $("#q9r").show();
        setTimeout(function () {
            $("#q9q").show();
            $("#q9r").hide();
            $('#q9').hide();
            $('#q10').show();
            timeLeft = 60;
            start();
            q9 = false;
            q10 = true;
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        $("#q9q").hide();
        $('#q9w').show();
        setTimeout(function () {
            timeLeft = 60;
            start();
            $("#q9q").show();
            $('#q9w').hide();
            $('#q9').hide();
            $('#q10').show();
            q9 = false;
            q10 = true;
        }, 8000);
    }
});

$(".q10").on("click", function () {

    if ($(this).hasClass("right")) {
        console.log("right");
        stop();
        right++
        $("#q10q").hide();
        $("#q10r").show();
        setTimeout(function () {
            $("#q10q").show();
            $("#q10r").hide();
            $('#q10').hide();
            $('#total').show();
            timeLeft = 60;
            q10 = false;
            total();
        }, 8000);
    }
    else if ($(this).hasClass("wrong")) {
        console.log("wrong");
        stop();
        wrong++;
        $("#q10q").hide();
        $('#q10w').show();
        setTimeout(function () {
            timeLeft = 60;
            $("#q10q").show();
            $('#q10w').hide();
            $('#q10').hide();
            $('#total').show();
            q10 = false;
            total();
        }, 8000);
    }
});

function timeout() {
    if (q1) {
        $("#q1q").hide();
        $('#q1w').show();
        $("#q1t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q1').hide();
            $('#q2').show();
            q1 = false;
            q2 = true;
        }, 8000);
    }
    else if (q2) {
        $("#q2q").hide();
        $('#q2w').show();
        $("#q2t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q2').hide();
            $('#q3').show();
            q2 = false;
            q3 = true;
        }, 8000);
    }
    else if (q3) {
        $("#q3q").hide();
        $('#q3w').show();
        $("#q3t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q3').hide();
            $('#q4').show();
            q3 = false;
            q4 = true;
        }, 8000);
    }
    else if (q4) {
        $("#q4q").hide();
        $('#q4w').show();
        $("#q4t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q4').hide();
            $('#q5').show();
            q4 = false;
            q5 = true;
        }, 8000);
    }
    else if (q5) {
        $("#q5q").hide();
        $('#q5w').show();
        $("#q5t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q5').hide();
            $('#q6').show();
            q5 = false;
            q6 = true;
        }, 8000);
    }
    else if (q6) {
        $("#q6q").hide();
        $('#q6w').show();
        $("#q6t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q6').hide();
            $('#q7').show();
            q6 = false;
            q7 = true;
        }, 8000);
    }
    else if (q7) {
        $("#q7q").hide();
        $('#q7w').show();
        $("#q7t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q7').hide();
            $('#q8').show();
            q7 = false;
            q8 = true;
        }, 8000);
    }
    else if (q8) {
        $("#q8q").hide();
        $('#q8w').show();
        $("#q8t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q8').hide();
            $('#q9').show();
            q8 = false;
            q9 = true;
        }, 8000);
    }
    else if (q9) {
        $("#q9q").hide();
        $('#q9w').show();
        $("#q9t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            start();
            $('#q9').hide();
            $('#q10').show();
            q9 = false;
            q10 = true;
        }, 8000);
    }
    else if (q10) {
        $("#q10q").hide();
        $('#q10w').show();
        $("#q10t").text("OUT OF TIME");
        none++;
        setTimeout(function () {
            timeLeft = 60;
            $('#q10').hide();
            $('#total').show();
            q10 = false;
            total();
        }, 8000);
    }
}

function total() {
    $("#right").text("Correct Answers: " + right);
    $("#wrong").text("Wrong Answers: " + wrong);
    $("#none").text("Unanswered Questions: " + none);

    setTimeout(function () {
        timeLeft = 60;
        right = 0;
        wrong = 0;
        none = 0;
        $('#total').hide();
        $('#q1').show();
        q1 = true;
        start();
    }, 10000);
}