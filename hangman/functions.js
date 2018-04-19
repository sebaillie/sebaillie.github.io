function add() {
	var value = document.getElementById('text').value;
	var good = document.getElementById('word_added');
	var bad = document.getElementById('word_error');
	
	if (/^[a-zA-Z]+$/.test(value)) { // checks all values in input if they are letters
			good.style.display = 'block';
			bad.style.display = 'none';
			words.push(value);
			
			document.getElementById('items').children[1].innerHTML += "<li>" + words[words.length-1] + "</li>";
			value.value = '';
	} else {
		good.style.display = 'none';
		bad.style.display = 'block';
	}
}

function random(min, max) {
	var r = Math.floor(Math.random()* (max - min) + min);
	return r;
}

function randomWord(arr) {
	var r = arr[random(0, arr.length)].split('');
	return r;
}

function background(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function line(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function changeToLetter(key) {
	var str = String.fromCharCode(key);
	var lower = str.toLowerCase();
	return lower;
}

function takeout(key, arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] === key) {
			arr.splice(i, 1);
		}
	}
}