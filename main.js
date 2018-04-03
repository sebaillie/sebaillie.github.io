
var grid = blankGrid();
var w = canvas.width / 4;
var score = 0;
var highscore;

window.onload = function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	document.addEventListener("keydown", keyPush);

	if (highscore !== 0) {
		highscore = localStorage.getItem("highScore");
	} else {
		highscore = 0;
	}

	addNumber();
	addNumber();
	updateCanvas();
}

function keyPush(e) {
	let played = true;
	switch(e.keyCode) {
		case 37:
			grid = rotateGrid();
			for (let x = 0; x < 4; x++) {
				grid[x] = slideUp(grid[x]);
				grid[x] = combine1(grid[x]);
			}
			grid = rotateGrid();
			break;
		case 38:
			for (let x = 0; x < 4; x++) {
				grid[x] = slideUp(grid[x]);
				grid[x] = combine1(grid[x]);
			}
			break;
		case 39:
			grid = rotateGrid();
			for (let x = 0; x < 4; x++) {
				grid[x] = slideDown(grid[x]);
				grid[x] = combine(grid[x]);
			}
			grid = rotateGrid();
			break;
		case 40:
			for (let x = 0; x < 4; x++) {
				grid[x] = slideDown(grid[x]);
				grid[x] = combine(grid[x]);
			}
			break;
		default:
			played = false;
	}

	if (played) {
		let gameOver = ISgameOver();
		let gameWon = ISgameWon();
		addNumber();
		updateCanvas();
		if (gameOver) {
			showGameOver();
		}
		if (gameWon) {
			console.log("GAME WON")
		}
	}
}

function addNumber() {
	let options = [];
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] === 0) {
				options.push({x:i, y:j});
			}
		}
	}
	if (options.length > 0) {
		let spot = options[(Math.floor(Math.random() * options.length))];
		let r = Math.random();
		grid[spot.x][spot.y] = r < .9 ? 2 : 4;
	}
}

function createGrid() {
	for (let x = 0; x < 4; x++) {
		for (let y = 0; y < 4; y++) {
			ctx.strokeStyle = "black";
			ctx.strokeRect(x * w, y * w, w, w);
		}
	}
}

function blankGrid() {
	return [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
}

function updateCanvas() {
	let past = copyGrid(grid);
	let changed = compareGrid(past, grid);
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	updateColors();
	showText();
	if (score >= highscore) {
		highscore = score;
		if (typeof(Storage) !== "undefined") {
    		localStorage.setItem("highScore", highscore);
		}
	}
	document.getElementById('score').innerHTML = score;
	document.getElementById("highscore").innerHTML = parseInt(localStorage.getItem("highScore"));
	createGrid();
}

function compareGrid(a, b) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (a[i][j] !== b[i][j]) {
        return true;
      }
    }
  }
  return false;
}

function copyGrid(grid) {
  let extra = blankGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      extra[i][j] === grid[i][j];
    }
  }
  return extra;
}

function newGame() {
	score = 0;
	grid = blankGrid();
	addNumber();
	addNumber();
	updateCanvas();
	hideGameOver();
}