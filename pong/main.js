var player1;
var player2;
var ball;
var vel;
var mode;
var interval;
var frameNo = 0;
var intervalNo = 360;
var gameOver;

function setup() {
	canvas = document.getElementById('c');
	ctx = canvas.getContext('2d');
	easyMode();
	newGame();

	document.addEventListener("mousemove", onmousemove);
	document.addEventListener("keydown", keyPush);
}

function newGame() {
	interval = setInterval(game, 1000/60);
	ball = new Piece(300, 200, 10, 10);
	player1 = new Piece(20, 150, 20, 100);
	player2 = new Piece(560, 150, 20, 100);

	ball.velX = vel;
	ball.velY = 2;
	frameNo = 0;
	gameOver = false;

	document.getElementById('newgame').style.display = 'none';
	document.getElementById("player1scored").style.display = 'none';
	document.getElementById("player2scored").style.display = 'none';
}

function game() {
	frameNo++;
	document.getElementById("score").innerHTML = frameNo;
	background('black');

	player1.update();
	player2.update();
	ball.update();
	ball.move();

	player2.y = ball.y - 50;

	ball.hitsLeft(player1);
	ball.hitsRight(player2);
	
	if ((frameNo === 0) || everyinterval(frameNo)) {
		if ((ball.velX <= 11) || (ball.velX >= -11)) {
			if (ball.velX < 0) {
				ball.velX--;
			} else {
				ball.velX++;
			}
		} else {
			console.log("max speed");
		}
	}

	if (ball.x > canvas.width - ball.w) {
		document.getElementById("player1scored").style.display = 'block';
		document.getElementById('newgame').style.display = "block";
		clearInterval(interval);
		gameOver = true;
	} else if (ball.x < 0) {
		document.getElementById("player2scored").style.display = 'block';
		document.getElementById('newgame').style.display = 'block';
		clearInterval(interval);
		gameOver = true;
	} else if (ball.y > canvas.height - ball.h) {
		ball.velY = -ball.velY;
	} else if (ball.y < 0) {
		ball.velY = -ball.velY;
	}
}

function Piece(x, y, w, h) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.update = function() {
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}

	this.move = function() {
		this.x += this.velX;
		this.y += this.velY;
	}

	this.hitsLeft = function(obj) {
		var myTop = this.y;
		var myBottom = this.y + (this.h);
		var myLeft = this.x;

		var objTop = obj.y;
		var objBottom = obj.y + (obj.h);
		var objRight = obj.x + (obj.w);
		
		if ((myLeft < objRight) && //Hitting top half
			(myTop > objTop) &&
			(myBottom < objBottom - (obj.h/2))) {
				//console.log('top');
				ball.velX = -ball.velX;
				if (ball.velY > 0) {
					ball.velY = -ball.velY + randomVel(-2,2);
				}
		} else if ((myLeft < objRight) && // Hitting Bottom Half
			(myTop > objTop + (obj.h/2)) &&
			(myBottom < objBottom)) {
				//console.log('bottom');
				ball.velX = -ball.velX;
				if (ball.velY < 0) {
					ball.velY = -ball.velY + randomVel(-2,2);
				}
		} else if ((myLeft < objRight) &&
					(myTop > objTop) &&
					(myBottom < objBottom)) {
			//console.log('middle');
			ball.velX = -ball.velX;
			ball.velY = ball.velY + randomVel(-2, 2);
		}
	}

	this.hitsRight = function(obj) {
		var myTop = this.y;
		var myBottom = this.y + (this.h);
		var myRight = this.x + (this.w);

		var objTop = obj.y;
		var objBottom = obj.y + (obj.h);
		var objLeft = obj.x;
		
		if ((myRight > objLeft) && //Hitting top half
			(myTop > objTop) &&
			(myBottom < objBottom - (obj.h/2))) {
	
				//console.log('right top');
				ball.velX = -ball.velX;
				if (ball.velY > 0) {
					ball.velY = -ball.velY + randomVel(-2,2);
				}
		} else if ((myRight > objLeft) && //Hitting Bottom Half
			(myTop > objTop + (obj.h/2)) &&
			(myBottom < objBottom)) {

				//console.log('right bottom')
				ball.velX = -ball.velX;
				if (ball.velY < 0) {
					ball.velY = -ball.velY + randomVel(-2,2);
				}
		} else if ((myRight > objLeft) && //Hitting Bottom Half
			(myTop > objTop) &&
			(myBottom < objBottom)) {
				
				//console.log('right middle');
				ball.velX = -ball.velX;
				ball.velY = ball.velY + randomVel(-2, 2);
			}
	}
}

function background(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	ctx.fillStyle = 'white';
	ctx.fillRect((canvas.width/2) - 2, 0, 2, canvas.height);
}

function randomVel(min, max) {
	return Math.random() * (max - min) + min;
}

function onmousemove(e) {
	player1.y = (e.clientY) - 50;
	// console.log(e.clientY);

	if (e.clientY < 50) {
		player1.y = 0;
	} else if (e.clientY > 350) {
		player1.y = 300;
	}
}

function text(text, x, y) {
	ctx.font = "60px Arial";
	ctx.fillStyle = 'white';
	ctx.fillText(text, x, y);
}

function everyinterval(frame) {
	if ((frame / intervalNo) % 1 === 0) {
		console.log('ball got faster');
		return true;
	}
	return false;
}

function keyPush(e) {
	var key = e.keyCode;

	if ((key === 32) && (gameOver)) {
		newGame();
	}
}

function easyMode() {
	mode = 4;
	vel = -5;
}