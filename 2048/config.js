function updateColors() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (grid[i][j] === 2) {
				ctx.fillStyle = "rgb(255, 239, 214)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 4) {
				ctx.fillStyle = "rgb(255, 227, 183)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 8) {
				ctx.fillStyle = "rgb(255, 196, 89)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 16) {
				ctx.fillStyle = "rgb(255, 148, 48)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 32) {
				ctx.fillStyle = "rgb(255, 103, 48)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 64) {
				ctx.fillStyle = "rgb(255, 71, 5)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 128) {
				ctx.fillStyle = "rgb(255, 37, 17)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 256) {
				ctx.fillStyle = "rgb(255, 86, 71)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 512) {
				ctx.fillStyle = "rgb(255, 170, 163)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 1024) {
				ctx.fillStyle = "rgb(165, 243, 255)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
			if (grid[i][j] === 2048) {
				ctx.fillStyle = "rgb(88, 153, 163)";
				ctx.fillRect(i * w, j * w, w-1, w-1);
			}
		}
	}
}

function showText() {
	for (let x = 0; x < 4; x++) {
		for (let y = 0; y < 4; y++) {
			let val = grid[x][y];
			ctx.fillStyle = "black";
			if (val !== 0) {
				if (val === 2 || val === 4 || val === 8) {
					ctx.font = "40px Verdana";
					ctx.fillText(val, x * w + 38, y * w + 65);
				}
				if (val === 16 || val === 32 || val === 64) {
					ctx.font = "40px Verdana";
					ctx.fillText(val, x * w + 25, y * w + 65);
				}
				if (val === 128 || val === 256 || val === 512) {
					ctx.font = "35px Verdana";
					ctx.fillText(val, x * w + 15, y * w + 63);
				}
				if (val === 1024 || val === 2048 || val === 4096 || val === 8192) {
					ctx.font = "30px Verdana";
					ctx.fillText(val, x * w + 10, y * w + 63);
				}
				if (val === 16384 || val === 32768 || val === 65536) {
					ctx.font = "25px Verdana";
					ctx.fillText(val, x * w + 10, y * w + 63);
				}
				if (val > 65536) {
					ctx.font = "15px Verdana";
					ctx.fillText(val, x * w + 20, y * w + 59);
				}
			}
		}
	}
}