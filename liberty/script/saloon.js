function whatIsThisPlace() {
	var welcomeSaloon = document.getElementById('welcomeSaloon');
	var whatIsThisPlace = document.getElementById('whatIsThisPlace');
	var howToLeave = document.getElementById('howToLeave');
	var fight = document.getElementById('errorFight');

	welcomeSaloon.style.display = 'none';
	whatIsThisPlace.style.display = 'block';
	howToLeave.style.display = 'none';
	fight.style.display = 'none';
}

function howToLeave() {
	var welcomeSaloon = document.getElementById('welcomeSaloon');
	var whatIsThisPlace = document.getElementById('whatIsThisPlace');
	var howToLeave = document.getElementById('howToLeave');
	var fight = document.getElementById('errorFight');

	welcomeSaloon.style.display = 'none';
	whatIsThisPlace.style.display = 'none';
	howToLeave.style.display = 'block';
	fight.style.display = 'none';
}

function fight() {
	var welcomeSaloon = document.getElementById('welcomeSaloon');
	var whatIsThisPlace = document.getElementById('whatIsThisPlace');
	var howToLeave = document.getElementById('howToLeave');
	var fight = document.getElementById('errorFight');
	var arena = document.getElementById('arena');
	var saloon = document.getElementById('saloon');
	var enemyHealthAmount = document.getElementById('enemyHealthAmount');
	var enemyHealthBar = document.getElementById('enemyHealthBar');
	var shootButton = document.getElementById('shootButton');

	welcomeSaloon.style.display = 'none';
	whatIsThisPlace.style.display = 'none';
	howToLeave.style.display = 'none';
	enemyHealth = 100;
	enemyHealthAmount.innerHTML = "Bandit Health: " + enemyHealth;
	enemyHealthBar.style.width = (enemyHealth * 2) + "px";
	enemyHealthBar.style.background = "green";
	shootButton.style.display = 'block';
	if (!gunEquipped) {
		fight.style.display = 'block';
	} else {
		saloon.style.display = 'none';
		arena.style.display = 'block';
	}
}