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
			row[i-1] = 0;
			score += a + b
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
			score += a + b;
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

function showGameOver() {
    document.getElementById("gameOverPopup").style.visibility = "visible";
    document.getElementById('gameOverScore').innerHTML = "SCORE: " + score;

    if (score === highscore) {
    	document.getElementById("newHighscore").style.visibility = "visible";
    }
}

function hideGameOver() {
    document.getElementById("gameOverPopup").style.visibility = "hidden";
    document.getElementById("newHighscore").style.visibility = "hidden";
}

// Phone playing

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            grid = rotateGrid();
			for (let x = 0; x < 4; x++) {
				grid[x] = slideUp(grid[x]);
				grid[x] = combine1(grid[x]);
			}
			grid = rotateGrid();
        } else {
            grid = rotateGrid();
			for (let x = 0; x < 4; x++) {
				grid[x] = slideDown(grid[x]);
				grid[x] = combine(grid[x]);
			}
			grid = rotateGrid();
        }                       
    } else {
        if ( yDiff > 0 ) {
            for (let x = 0; x < 4; x++) {
				grid[x] = slideUp(grid[x]);
				grid[x] = combine1(grid[x]);
			}
        } else { 
            for (let x = 0; x < 4; x++) {
				grid[x] = slideDown(grid[x]);
				grid[x] = combine(grid[x]);
			}
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};