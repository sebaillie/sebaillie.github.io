function rotateGrid() {
	let newGrid = blankGrid();
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			newGrid[i][j] = grid[j][i];
		}
	}
	return newGrid;
}

function slideDown(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zeroes = Array(missing).fill(0);
	arr = zeroes.concat(arr);
	return arr;
}

function slideUp(row) {
	let arr = row.filter(val => val);
	let missing = 4 - arr.length;
	let zeroes = Array(missing).fill(0);
	arr = arr.concat(zeroes);
	return arr;
}

function combine(row) {
	for (let i = 3; i >= 1; i--) {
		let a = row[i];
		let b = row[i-1];
		if (a == b) {
			row[i] = a + b;
			score += a + b
			row[i-1] = 0;
		}
	}
	return row;
}

function combine1(row) {
	for (let i = 3; i >= 1; i--) {
		let a = row[i];
		let b = row[i-1];
		if (a == b) {
			row[i] = 0;
			row[i-1] = a + b;
		}
	}
	return row;
}

function ISgameOver() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] === 0) {
				return false;
			}
			if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
				return false;
			}
			if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
				return false;
			}
		}
	}
	return true;
}

function ISgameWon() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if(grid[i][j] === 2048) {
				return true;
			}
		}
	}
	return false;
}

function gameIsOver() {
	var popup = document.getElementById("popuptext");
	popup.classList.toggle("show");
}