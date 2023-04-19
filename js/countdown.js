function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
        // Pisca Led Verde
        if (timer % 2 == 0) {
            gLed = "assets/led-green-on.png"
            document.getElementById("greenLed").src = gLed
        } else {
            gLed = "assets/led-green-off.png"
            document.getElementById("greenLed").src = gLed
        }
        // Pisca Led Vermelho
        if (timer % 2 == 1) {
            rLed = "assets/led-red-on.png"
            document.getElementById("redLed").src = rLed
        } else {
            rLed = "assets/led-red-off.png"
            document.getElementById("redLed").src = rLed
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

var rwl = document.getElementById("rwl")
rwl.addEventListener('click', cutRWL)
function cutRWL() {
    rwlCut = "assets/red-wire-left-cut.png"
    document.getElementById("rwl").src = rwlCut
}
var bwl = document.getElementById("bwl")
bwl.addEventListener('click', cutBWL)
function cutBWL() {
    bwlCut = "assets/black-wire-left-cut.png"
    document.getElementById("bwl").src = bwlCut
}
var rwr = document.getElementById("rwr")
rwr.addEventListener('click', cutRWR)
function cutRWR() {
    rwrCut = "assets/red-wire-right-cut.png"
    document.getElementById("rwr").src = rwrCut
}
var bwr = document.getElementById("bwr")
bwr.addEventListener('click', cutBWR)
function cutBWR() {
    bwrCut = "assets/black-wire-right-cut.png"
    document.getElementById("bwr").src = bwrCut
}