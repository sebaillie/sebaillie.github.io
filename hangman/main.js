// Words (Works best with words w/ >10 letter w/ current settings)
var words = ['hangman'];

var lives;
var level;
// var score = 0;
// var scoreCount = document.getElementById('score');

var manX = 220;
var manY = 220;

function setup() { // Setup function
	canvas = document.getElementById('c'); // Define Canvas
	ctx = canvas.getContext('2d'); // Define how to draw on canvas
	newGame(); // Run initial canvas function
	document.addEventListener('keydown', keyPush); // On every key press, run keyPush

	document.getElementById('lives').innerHTML = "Lives: " + lives; // Gets html element and post to it
}

function keyPush(e) { // key push function from above
	var key = changeToLetter(e.keyCode); // key is a code, changes to lowercase string
	var wrong = 0; // 

	if (lives > 0) { // Only run win you have lives left
		for (var i = 0; i < rword.length; i++) {
			if (key === rword[i]) { // if key string is same as one of the values of the random word
				ctx.font = "20px verdana";
				ctx.fillStyle = "black"
				ctx.fillText(rword[i], 30 + (40 * i), 333);

				// takeout(key, arr);

				// score++;
				// scoreCount.innerHTML = "Score: " + score;
			} else {
				wrong++;
			}

			if (wrong === rword.length) { // brings down lives
				level++;
				lives--;
				drawMan();
				document.getElementById('lives').innerHTML = "Lives: " + lives;
			}
		}
	}
}

function newGame() {
	lives = 8;
	level = 0;

	background('white');
	rword = new randomWord(words);
	for (var i = 0; i < rword.length; i++) {
		ctx.fillStyle = "rgb(150, 150, 150)";
		ctx.fillRect(20 + (40 * i), 311, 30, 30);
	}
	drawMan();
	document.getElementById('lives').innerHTML = "Lives: " + lives;
}

function drawMan() {
	ctx.fillStyle = "black";
	line(0, 250, canvas.width, 250);
	if (level > 0) {
		ctx.fillRect(170, 250, 40, -5);
		line(190, 250, 190, 150);
		line(190, 150, 220, 150);
		line(220, 150, 220, 170);
		if (level > 1) {
			ctx.beginPath();
			ctx.ellipse(manX + 0.5, manY - 43, 7, 7, 45 * Math.PI/180, 0, 2 * Math.PI);
			ctx.stroke();
			if (level > 2) {
				line(manX, manY - 35, manX, manY - 5);
				if (level > 3) {
					line(manX, manY - 5, manX - 8, manY + 15);
					if (level > 4) {
						line(manX, manY - 5, manX + 9, manY + 15);
						if (level > 5) {
							line(manX, manY - 30, manX - 8, manY - 15);
							if (level > 6) {
								line(manX, manY - 30, manX + 9, manY - 15);
								if (level > 7) {
									ctx.fillStyle = 'black';
									ctx.font = '30px Verdana';
									ctx.fillText("Game Over", (canvas.width / 2) - 90, 50);
								}
							}
						}
					}
				}
			}
		}
	}
}