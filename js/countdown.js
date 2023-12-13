const theTimer = document.getElementById('timer');
const rwl = document.getElementById("rwl");
const bwr = document.getElementById("bwr");
const rwr = document.getElementById("rwr");
const bwl = document.getElementById("bwl");
const redLed = document.getElementById("redLed");
const greenLed = document.getElementById("greenLed");
const bomb = document.getElementById('bomb');
const explosion = document.getElementById('explosion');
const message = document.getElementById('message');
const sound = document.getElementById('sound');

window.onload = function addEvents() {
    var maximo = 4;
    var i, arr = [];
    for (i = 0; i < maximo; i++) {
        arr[i] = i + 1;
    }
    var p, n, tmp;
    for (p = arr.length; p;) {
        n = Math.random() * p-- | 0;
        tmp = arr[n];
        arr[n] = arr[p];
        arr[p] = tmp;
    }

    rwl.setAttribute("onclick", "cutWire(" + arr[0] + ",'rwl')");
    bwl.setAttribute("onclick", "cutWire(" + arr[1] + ",'bwl')");
    rwr.setAttribute("onclick", "cutWire(" + arr[2] + ",'rwr')");
    bwr.setAttribute("onclick", "cutWire(" + arr[3] + ",'bwr')");
}

var time = 300;
var speed = 1000;
var minute;
var second;
var stopped;
var stopTime;

function countdown() {
    if (stopped == undefined) {
        if ((time - 1) >= -1) {
            minute = parseInt(time / 60);
            second = time % 60;
            if (minute < 10) {
                minute = "0" + minute;
            }
            if (second < 10) {
                second = "0" + second;
            }
            if (second % 2 == 0) {
                redLed.src = "assets/led-red-on.png"
                greenLed.src = "assets/led-green-off.png"
            } else {
                redLed.src = "assets/led-red-off.png"
                greenLed.src = "assets/led-green-on.png"
            }
            timer.innerHTML = minute + ":" + second;
            if (minute == 0 && second == 0) {
                bomb.setAttribute('class', 'hide');
                redLed.setAttribute('class', 'hide');
                greenLed.setAttribute('class', 'hide');
                explosion.setAttribute('class', 'showExplosion');
            }
            setTimeout('countdown()', speed);
            time--;

        }
    } if (stopped == 1) {
        stopTime = minute + ":" + second;
        timer.innerHTML = stopTime;
    }
}

countdown();

function cutWire(on, div) {
    switch (div) {
        case 'rwl':
            rwlCut = "assets/red-wire-left-cut.png";
            rwl.src = rwlCut;
            rwl.setAttribute('onclick', "cutRWL(0)");
            break;
        case 'bwl':
            bwlCut = "assets/black-wire-left-cut.png";
            bwl.src = bwlCut
            bwl.setAttribute('onclick', "cutBWL(0)");
            break;
        case 'rwr':
            rwrCut = "assets/red-wire-right-cut.png";
            rwr.src = rwrCut
            rwr.setAttribute('onclick', "cutRWR(0)");
            break;
        case 'bwr':
            bwrCut = "assets/black-wire-right-cut.png";
            bwr.src = bwrCut
            bwr.setAttribute('onclick', "cutBWR(0)");
            break;
    }
    switch (on) {
        case 1:
            bomb.setAttribute('class', 'hide');
            redLed.setAttribute('class', 'hide');
            greenLed.setAttribute('class', 'hide');
            message.setAttribute('class', 'hide');
            sound.play();
            explosion.setAttribute('class', 'showExplosion');
            break;
        case 2:
            time = 300;
            message.innerHTML = 'você ganhou mais tempo...';
            break;
        case 3:
            speed = 500;
            message.innerHTML = 'O timer acelerou, é melhor correr!';
            break;
        case 4:
            stopped = 1;
            message.innerHTML = 'Você salvou o dia!';
            redLed.src = "assets/led-red-off.png";
            greenLed.src = "assets/led-green-on.png";
            break;
    }
}