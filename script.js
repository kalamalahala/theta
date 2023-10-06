let can = document.querySelector('#canvas');
let ctx = can.getContext('2d');
can.width = 420;
can.height = 350;

let unit = 100;
let theta = 0;
let thetaInput = document.querySelector('#thetaValue');
let xInput = document.querySelector('#xValue');
let yInput = document.querySelector('#yValue');
thetaInput.value = theta;
xInput.value = unit * Math.cos(theta);
yInput.value = unit * Math.sin(theta);
let x, y;

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

// when theta changes, redraw line
thetaInput.addEventListener('input', function () {
    basicXY();
    theta = thetaInput.value;
    // theta indicates the angle between the x-axis and the line
    x = unit * Math.cos(theta);
    y = unit * Math.sin(theta);
    drawLineFromOrigin(x, y);
    xInput.value = x;
    yInput.value = y;
});

(basicXY())