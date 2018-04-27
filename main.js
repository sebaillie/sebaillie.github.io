var interval;
var title = new text("SeabassGames", 0, 50);

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	interval = setInterval(animation, 1000/60);
}

function animation() {
	if (title.y > canvas.height - 2) {
		title.yvel = -title.yvel;
	} else if (title.y < 20) {
		title.yvel = -title.yvel;
	} else if (title.x > canvas.width - 225) {
		title.xvel = -title.xvel;
	} else if (title.x < 0) {
		title.xvel = -title.xvel;
	}

	background();
	title.update();
	title.move();
}

function text(text, x, y) {
	this.x = x;
	this.y = y;
	this.xvel = random(1,2);
	this.yvel = random(1,2);

	this.update = function() {
		ctx.font = "30px Verdana";
		ctx.fillStyle = 'black';
		ctx.fillText(text, this.x, this.y);
	}

	this.move = function() {
		this.x += this.xvel;
		this.y += this.yvel;
	}
}

function background() {
	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}