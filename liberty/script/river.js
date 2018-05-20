function buySlingShot() {
	var riverSlingShot = document.getElementById('riverSlingShot');
	var inventorySlingShot = document.getElementById('inventorySlingShot');
	var equipSlingShot = document.getElementById('equipSlingShot');
	var welcomeDialogue = document.getElementById('welcomeRiver');
	var oofDialogue = document.getElementById('oofRiver');
	var purchaseDialogue = document.getElementById('purchaseRiver');
	var goldAmount = document.getElementById('goldAmount');

	if (gold >= 100) {
		gold -= 100;
		goldAmount.innerHTML = "Gold: " + gold;
		riverSlingShot.style.display = 'none';
		inventorySlingShot.style.display = 'block';
		equipSlingShot.style.display = 'block';
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'none';
		purchaseDialogue.style.display = 'block';
	} else {
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'block';
		purchaseDialogue.style.display = 'none';
	}
}

function buyNerfGun() {
	var riverNerfGun = document.getElementById('riverNerfGun');
	var inventoryNerfGun = document.getElementById('inventoryNerfGun');
	var equipNerfGun = document.getElementById('equipNerfGun');
	var welcomeDialogue = document.getElementById('welcomeRiver');
	var oofDialogue = document.getElementById('oofRiver');
	var purchaseDialogue = document.getElementById('purchaseRiver');
	var goldAmount = document.getElementById('goldAmount');

	if (gold >= 935) {
		gold -= 935;
		goldAmount.innerHTML = "Gold: " + gold;
		riverNerfGun.style.display = 'none';
		inventoryNerfGun.style.display = 'block';
		equipNerfGun.style.display = 'block';
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'none';
		purchaseDialogue.style.display = 'block';
	} else {
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'block';
		purchaseDialogue.style.display = 'none';
	}
}

function buyGreenPistol() {
	var riverGreenPistol = document.getElementById('riverGreenPistol');
	var inventoryGreenPistol = document.getElementById('inventoryGreenPistol');
	var equipGreenPistol = document.getElementById('equipGreenPistol');
	var welcomeDialogue = document.getElementById('welcomeRiver');
	var oofDialogue = document.getElementById('oofRiver');
	var purchaseDialogue = document.getElementById('purchaseRiver');
	var goldAmount = document.getElementById('goldAmount');

	if (gold >= 2712) {
		gold -= 2712;
		goldAmount.innerHTML = "Gold: " + gold;
		riverGreenPistol.style.display = 'none';
		inventoryGreenPistol.style.display = 'block';
		equipGreenPistol.style.display = 'block';
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'none';
		purchaseDialogue.style.display = 'block';
	} else {
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'block';
		purchaseDialogue.style.display = 'none';
	}
}

function buyRevolver() {
	var riverRevolver = document.getElementById('riverRevolver');
	var inventoryRevolver = document.getElementById('inventoryRevolver');
	var equipRevolver = document.getElementById('equipRevolver');
	var welcomeDialogue = document.getElementById('welcomeRiver');
	var oofDialogue = document.getElementById('oofRiver');
	var purchaseDialogue = document.getElementById('purchaseRiver');
	var goldAmount = document.getElementById('goldAmount');

	if (gold >= 6666) {
		gold -= 6666;
		goldAmount.innerHTML = "Gold: " + gold;
		riverRevolver.style.display = 'none';
		inventoryRevolver.style.display = 'block';
		equipRevolver.style.display = 'block';
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'none';
		purchaseDialogue.style.display = 'block';
	} else {
		welcomeDialogue.style.display = 'none';
		oofDialogue.style.display = 'block';
		purchaseDialogue.style.display = 'none';
	}
}