var gunEquipped = false;
var speedPlay = false;
var highestDamage = 0;
var highestGold = 0;
var banditsTake = 0;

function shoot() {
	var healthAmount = document.getElementById('healthAmount');
	var healthBar = document.getElementById('healthBar');
	var enemyHealthAmount = document.getElementById('enemyHealthAmount');
	var enemyHealthBar = document.getElementById('enemyHealthBar');
	var shootButton = document.getElementById('shootButton');
	var goldAmount = document.getElementById('goldAmount');
	var speedPlayButton = document.getElementById("speedPlayButton");
	var damage = takeDamage(highestDamage);
	var enemyDamage = takeDamage(highestDamage);

	if ((health < highestDamage) && (enemyHealth < highestDamage)) {
		if (health >= enemyHealth) {
			enemyHealth -= enemyDamage;
		} else {
			health -= damage;
		}
	} else {
		enemyHealth -= enemyDamage;
		health -= damage;
	}

	healthAmount.innerHTML = "Health: " + health;
	healthBar.style.width = (health * 2) + 'px';

	enemyHealthAmount.innerHTML = "Bandit Health: " + enemyHealth;
	enemyHealthBar.style.width = (enemyHealth * 2) + 'px';

	if (health <= 20) {
		healthBar.style.background = "red";
	} else if (health <= 50) {
		healthBar.style.background = "orange";
	}

	if (enemyHealth <= 20) {
		enemyHealthBar.style.background = "red";
	} else if (enemyHealth <= 50) {
		enemyHealthBar.style.background = "orange";
	}

	if (enemyHealth <= 0) {
		enemyHealth = 0;
		shootButton.style.display = 'none';
		enemyHealthAmount.innerHTML = "Bandit Health: " + enemyHealth;
		enemyHealthBar.style.width = (enemyHealth * 2) + 'px';
		gold += highestGold;
		goldAmount.innerHTML = "Gold: " + gold;
		if (speedPlay) {
			speedPlayButton.style.display = 'block';
		}
	} else if (health <= 0) {
		health = 0;
		shootButton.style.display = 'none';
		gold -= banditsTake;
		if (gold < 0) {
			gold = 0;
		}
		goldAmount.innerHTML = "Gold: " + gold;
		healthAmount.innerHTML = "Health: " + health;
		healthBar.style.width = (health * 2) + 'px';
		if (speedPlay) {
			speedPlayButton.style.display = 'block';
		} else {
			alert("You died. Go to the church to regain health.");
		}
	}
}

function speedRestart() {
	var speedPlayButton = document.getElementById("speedPlayButton");
	goToChurch();
	fight();
	speedPlayButton.style.display = 'none';
}

function equipSlingShot() {
	var slingShot = document.getElementById('inventorySlingShot');
	var nerfGun = document.getElementById('inventoryNerfGun');
	var greenPistol = document.getElementById('inventoryGreenPistol');
	var revolver = document.getElementById('inventoryRevolver');
	var gunName = document.getElementById('gunName');
	var gunDamage = document.getElementById('gunDamage');
	var goldWinAmount = document.getElementById('goldWinAmount');
	var goldTakeAmount = document.getElementById('goldTakeAmount');

	slingShot.style.border = "5px solid green";
	nerfGun.style.border = "none";
	greenPistol.style.border = 'none';
	revolver.style.border = 'none';

	gunEquipped = true;
	speedPlay = false;
	highestDamage = 15;
	highestGold = 50;
	banditsTake = 25;

	gunName.innerHTML = "Equipped Gun: " + "Sling Shot"
	gunDamage.innerHTML = "Max Damage: " + highestDamage;
	goldWinAmount.innerHTML = "Gold per kill: " + highestGold;
	goldTakeAmount.innerHTML = "Gold lost per death: " + banditsTake;
}

function equipNerfGun() {
	var slingShot = document.getElementById('inventorySlingShot');
	var nerfGun = document.getElementById('inventoryNerfGun');
	var greenPistol = document.getElementById('inventoryGreenPistol');
	var revolver = document.getElementById('inventoryRevolver');
	var gunName = document.getElementById('gunName');
	var gunDamage = document.getElementById('gunDamage');
	var goldWinAmount = document.getElementById('goldWinAmount');
	var goldTakeAmount = document.getElementById('goldTakeAmount');

	slingShot.style.border = "none";
	nerfGun.style.border = "5px solid green";
	greenPistol.style.border = 'none';
	revolver.style.border = 'none';

	gunEquipped = true;
	speedPlay = true;
	highestDamage = 25;
	highestGold = 150;
	banditsTake = 75;

	gunName.innerHTML = "Equipped Gun: " + "Nerf Gun"
	gunDamage.innerHTML = "Max Damage: " + highestDamage;
	goldWinAmount.innerHTML = "Gold per kill: " + highestGold;
	goldTakeAmount.innerHTML = "Gold lost per death: " + banditsTake;
}

function equipGreenPistol() {
	var slingShot = document.getElementById('inventorySlingShot');
	var nerfGun = document.getElementById('inventoryNerfGun');
	var greenPistol = document.getElementById('inventoryGreenPistol');
	var revolver = document.getElementById('inventoryRevolver');
	var gunName = document.getElementById('gunName');
	var gunDamage = document.getElementById('gunDamage');
	var goldWinAmount = document.getElementById('goldWinAmount');
	var goldTakeAmount = document.getElementById('goldTakeAmount');

	slingShot.style.border = "none";
	nerfGun.style.border = "none";
	greenPistol.style.border = '5px solid green';
	revolver.style.border = 'none';

	gunEquipped = true;
	speedPlay = true;
	highestDamage = 35;
	highestGold = 350;
	banditsTake = 175;

	gunName.innerHTML = "Equipped Gun: " + "Green Pistol"
	gunDamage.innerHTML = "Max Damage: " + highestDamage;
	goldWinAmount.innerHTML = "Gold per kill: " + highestGold;
	goldTakeAmount.innerHTML = "Gold lost per death: " + banditsTake;
}

function equipRevolver() {
	var slingShot = document.getElementById('inventorySlingShot');
	var nerfGun = document.getElementById('inventoryNerfGun');
	var greenPistol = document.getElementById('inventoryGreenPistol');
	var revolver = document.getElementById('inventoryRevolver');
	var gunName = document.getElementById('gunName');
	var gunDamage = document.getElementById('gunDamage');
	var goldWinAmount = document.getElementById('goldWinAmount');
	var goldTakeAmount = document.getElementById('goldTakeAmount');

	slingShot.style.border = "none";
	nerfGun.style.border = "none";
	greenPistol.style.border = 'none';
	revolver.style.border = '5px solid green';
	
	gunEquipped = true;
	speedPlay = true;
	highestDamage = 45;
	highestGold = 800;
	banditsTake = 400;

	gunName.innerHTML = "Equipped Gun: " + "Revolver"
	gunDamage.innerHTML = "Max Damage: " + highestDamage;
	goldWinAmount.innerHTML = "Gold per kill: " + highestGold;
	goldTakeAmount.innerHTML = "Gold lost per death: " + banditsTake;
}

function buyHorse() {
	var navigationBar = document.getElementById('navigationBar');
	var stables = document.getElementById('stables');
	var gameOver = document.getElementById('gameOver');

	if (gold >= 15000) {
		stables.style.display = 'none';
		gameOver.style.display = 'block';
		navigationBar.style.display = 'none';
	}
}