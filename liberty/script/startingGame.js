var gold = 0;
var pos = 20;
var health = 100;
var enemyHealth = 100;
var cheatsUsed = false;

window.onload = function() {
	document.addEventListener('keydown', keyPush);
}

function startGame() {
	var mainMenu = document.getElementById('mainMenu');
	var game = document.getElementById('game');

	mainMenu.style.display = 'none';
	game.style.display = 'block';
}

function about() {
	alert("Liberty is a small RPG that takes place in a small town in the Wild West.  You mysteriously show up in this town; you're broke, your horse ran away, and you need to get home as fast as you can.  Help the town kill bandits, and get enough gold to buy a horse and go home. TIP: Although this is a Point-and-Click adventure, you may need to use the arrow keys to move around some.");
}

function keyPush(e) {
	var key = e.keyCode;
	var goldGetter = document.getElementById('goldGetter');

	if (key === 37) {
		if (pos <= 15) {
			console.log('stop');
		} else {
			pos -= 5;;
			goLeft();
			goldGetter.style.display = "none";
		}
	} else if (key === 39) {
		if (pos >= 200) {
			console.log('stop');
			goldGetter.style.display = "block";
		} else {
			pos += 5;
			goRight();
		}
	} 
}

function goLeft() {
	var player = document.getElementById('playerMine');
	player.style.left = pos + "px";
}

function goRight() {
	var player = document.getElementById('playerMine');
	player.style.left = pos + "px";
}

function mine() {
	var goldAmount = document.getElementById('goldAmount');
	gold++;
	goldAmount.innerHTML = "Gold: " + gold;
}

function random(min, max) {
	return (Math.floor(Math.random() * (max-min) + min));
}

// FUNCTION NEEDED TO USE (/script/equipGuns.js line 5)
// gets highest damage output, gets highest random num between Damage and Damage-10

function takeDamage(num) {
// 3 random numbers, returns the largest
	var a = random(num-10, num);
	var b = random(num-10, num);
	var c = random(num-10, num);
	var largest = a;
	if (b > largest) {
		largest = b;
	}
	if (c > largest) {
		largest = c;
	}
	// console.log(a,b,c,largest);
	return largest;
}