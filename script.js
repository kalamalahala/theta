let can = document.querySelector('#canvas');
let ctx = can.getContext('2d');
can.width = 420;
can.height = 350;

let unit = 100;
let theta = 0;
let thetaInput = document.querySelector('#thetaValue');
let xInput = document.querySelector('#xValue');
let yInput = document.querySelector('#yValue');
let thetaRatioValue = document.querySelector('#thetaRatioValue');
let arcLengthValue = document.querySelector('#arcLengthValue');
thetaInput.value = theta;
xInput.value = unit * Math.cos(theta);
yInput.value = unit * Math.sin(theta);
let x, y;

import { constants } from './constants.js';

let c = new constants();
console.log(c.gravity);

function basicXY() {
    ctx.clearRect(0, 0, can.width, can.height);

    // draw xy plane
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(210, 0);
    ctx.lineTo(210, can.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.moveTo(0, 175);
    ctx.lineTo(can.width, 175);
    ctx.stroke();

    // draw unit half circle
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.arc(210, 175, unit, Math.PI, 0);
    ctx.stroke();
}

function drawLineFromOrigin(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.moveTo(210, 175);
    ctx.lineTo(210 + x, 175 - y);
    ctx.stroke();
}

function drawLineFromOriginByDegrees(degree) {
    x = unit * Math.cos(degree * Math.PI / 180);
    y = unit * Math.sin(degree * Math.PI / 180);
    drawLineFromOrigin(x, y);
}

function calculateArcLength() {
    let angle = thetaInput.value;
    // calculate the distance along the arc of the unit circle to the X axis (1, 0)
    let arcLength = angle * Math.PI / 180;
    let ratioValue = arcLength / Math.PI;
    xInput.value = x.toFixed(2);
    yInput.value = y.toFixed(2);

    thetaRatioValue.innerHTML = ratioValue.toFixed(2);
    arcLengthValue.innerHTML = arcLength.toFixed(2);
}

// when theta changes, redraw line
thetaInput.addEventListener('input', function () {
    basicXY();
    theta = thetaInput.value;
    // theta indicates the angle between the x-axis and the line
    drawLineFromOriginByDegrees(theta);
    calculateArcLength();
});

(basicXY())