var matchingScore = 0;

var matchingQuestion1 = document.getElementById('matchingQuestion1');
var matchingQuestion2 = document.getElementById('matchingQuestion2');
var matchingQuestion3 = document.getElementById('matchingQuestion3');
var matchingQuestion4 = document.getElementById('matchingQuestion4');

function randNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initMatchingGame() {
  fadeEffect(document.getElementById("startMenu").style, document.getElementById("matchingGame").style, startMatchingGame);
}

// get initial random indexes
var index1, index2, index3, index4;
var indexArray = [];

function startMatchingGame() {
  index1 = randNum(1, csvArrayLength); // WILL ALWAYS STAY THE SAME
  index2 = randNum(1, csvArrayLength);
  index3 = randNum(1, csvArrayLength);
  index4 = randNum(1, csvArrayLength);
  indexArray = [index1, index2, index3, index4];
  // check if any indexes are the same
  for (i = 1; i < indexArray.length; i++) {
    for (j = 0; j < indexArray.length; j++) {
      if (indexArray[i] == indexArray[j]) {
        indexArray[i] = randNum(1, csvArrayLength);
      }
    }
  }
  shuffleArray(indexArray);
  // show answers on buttons
  document.getElementById("matchingQuestion").innerHTML = csvArray[index1].Question;
  document.getElementById("matchingButton1").innerHTML = csvArray[indexArray[0]].Answer;
  document.getElementById("matchingButton2").innerHTML = csvArray[indexArray[1]].Answer;
  document.getElementById("matchingButton3").innerHTML = csvArray[indexArray[2]].Answer;
  document.getElementById("matchingButton4").innerHTML = csvArray[indexArray[3]].Answer;
}

function checkButton1() {
  if (csvArray[indexArray[0]].Answer == csvArray[index1].Answer) {
    console.log("Correct.");
    matchingScore++;
    startMatchingGame();
  } else {
    console.log("Incorrect.")
  }
}

function checkButton2() {
  if (csvArray[indexArray[1]].Answer == csvArray[index1].Answer) {
    console.log("Correct.");
    matchingScore++;
    startMatchingGame();
  } else {
    console.log("Incorrect.")
  }
}

function checkButton3() {
  if (csvArray[indexArray[2]].Answer == csvArray[index1].Answer) {
    console.log("Correct.");
    matchingScore++;
    startMatchingGame();
  } else {
    console.log("Incorrect.")
  }
}

function checkButton4() {
  if (csvArray[indexArray[3]].Answer == csvArray[index1].Answer) {
    console.log("Correct.");
    matchingScore++;
    startMatchingGame();
  } else {
    console.log("Incorrect.")
  }
}
