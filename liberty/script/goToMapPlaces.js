function goToSaloon() {
	var mapTab = document.getElementById('mapTab');
	var saloon = document.getElementById('saloon');
	var speedPlayButton = document.getElementById("speedPlayButton");

	mapTab.style.display = 'none';
	saloon.style.display = 'block';
	speedPlayButton.style.display = 'none';
}

function goToChurch() {
	var healthBar = document.getElementById('healthBar');
	var healthAmount = document.getElementById('healthAmount');
	health = 100;
	healthBar.style.width = (health * 2) + "px";
	healthAmount.innerHTML = "Health: " + health;
	healthBar.style.background = "green";
}

function goToStables() {
	var mapTab = document.getElementById('mapTab');
	var stables = document.getElementById('stables');

	mapTab.style.display = 'none';
	stables.style.display = 'block';
}

function goToMine() {
	var mapTab = document.getElementById('mapTab');
	var mine = document.getElementById('mine');

	mapTab.style.display = 'none';
	mine.style.display = 'block';
}

function goToRiver() {
	var mapTab = document.getElementById('mapTab');
	var river = document.getElementById('river');

	mapTab.style.display = 'none';
	river.style.display = 'block';
}