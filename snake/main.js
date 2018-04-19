// Variables
var version = 1.0;
var snakeX;
var snakeY;
var velX = 0;
var velY = 0;

var fruitX;
var fruitY;

var trail = [];
var tail = 4;
var gridSize = 20;
var tileCount = 20;
var score = 0;
var highscore;
var interval = setInterval(game, 1000/10);

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	document.addEventListener('keydown', keyPush);
	initialize();

	if (highscore !== "NaN") {
		highscore = localStorage.getItem("hsSnake");
	} else {
		highscore = 0;
	}
}

function initialize() {
	window.addEventListener('resize', resizeCanvas, false);
	snakeX = random(0, canvas.width / tileCount);
	snakeY = random(0, canvas.height / tileCount);
	resizeCanvas();
}

function resizeCanvas() {
	canvas.width = round20(window.innerWidth - 100);
	canvas.height = round20(window.innerHeight - 100);
	background();
	fruitX = random(0, canvas.width / tileCount);
	fruitY = random(0, canvas.height / tileCount);
}



function game() {
	document.getElementById('score').innerHTML = "SCORE: " + score;
	document.getElementById('highscore').innerHTML = "BEST: " + parseInt(localStorage.getItem("hsSnake"));

	snakeX += velX;
	snakeY += velY;

	if (snakeX > (canvas.width / tileCount - 1)) {
		clearInterval(interval);
		console.log("GMAE OVER");
	} else if (snakeX < (-0.01)) {
		clearInterval(interval);
		console.log("GMAE OVER");
	} else if (snakeY > (canvas.height / tileCount - 1)) {
		clearInterval(interval);
		console.log("GMAE OVER");
	} else if (snakeY < (-0.01)) {
		clearInterval(interval);
		console.log("GMAE OVER");
	}

	background();
	snake();
	apple();
}

function snake() {
	ctx.fillStyle = "lime";
	for (let i = 0; i < trail.length; i++) {
		ctx.fillRect(trail[i].x * gridSize, trail[i].y * gridSize, gridSize - 2, gridSize - 2);
		if (snakeX === trail[i].x && snakeY === trail[i].y) {
			tail = 4;
			score = 0;

		}
	}

	trail.push({x:snakeX, y:snakeY});
	while(tail < trail.length) {
		trail.shift();
	}
}

function apple() {
	ctx.fillStyle = 'red';
	ctx.fillRect(fruitX * gridSize, fruitY * gridSize, gridSize - 2, gridSize - 2);

	if (snakeX === fruitX && snakeY === fruitY) {
		fruitX = random(0, canvas.width / tileCount);
		fruitY = random(0, canvas.height / tileCount);
		tail++;
		score++;
		if (score >= highscore) {
				highscore = score;
				if (typeof(Storage) !== "undefined") {
					localStorage.setItem("hsSnake", highscore)
				}
			}
	}
}

function background() {
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function keyPush(e) {
	var key = e.keyCode;

	if (key === 37) {
		velX = -1;
		velY = 0;
	}
	if (key === 38) {
		velX = 0;
		velY = -1;
	}
	if (key === 39) {
		velX = 1;
		velY = 0;
	}
	if (key === 40) {
		velX = 0;
		velY = 1;
	}
}

function random(min, max) {
	return (Math.floor(Math.random()*(max - min) + (min)));
}

function round20(num) {
	return Math.ceil(num/20)*20;
}