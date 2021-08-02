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
  fadeEffect2(document.getElementById("startMenu").style, document.getElementById("matchingGame").style, startMatchingGame);
}

// get initial random indexes
var index1, index2, index3, index4;
var indexArray = [];

function startMatchingGame() {
  index1 = randNum(2, csvArrayLength); // WILL ALWAYS STAY THE SAME
  index2 = randNum(2, csvArrayLength);
  index3 = randNum(2, csvArrayLength);
  index4 = randNum(2, csvArrayLength);
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
  answerCheck(0);
}

function checkButton2() {
  answerCheck(1);
}

function checkButton3() {
  answerCheck(2);
}

function checkButton4() {
  answerCheck(3);
}

function nextMatchingQuestion() {
  if (selectedGame == "matching") {
    document.getElementById("matchingScoreLabel").innerHTML = matchingScore;
    startMatchingGame();
  } else if (selectedGame == "survival") {
    document.getElementById("matchingScoreLabel").innerHTML = survivalScore;
    startSurvivalGame();
  }
}

function answerCheck(index) {
  if (csvArray[indexArray[index]].Answer == csvArray[index1].Answer) {
    correctAnswerEffect();
    if (selectedGame == "matching") {
      matchingScore++;
      document.getElementById("matchingScoreLabel").innerHTML = matchingScore;
      highScoreCheck("matchingHighScore", matchingScore, matchingHighScore);
    } else if (selectedGame == "survival") {
      survivalScore++;
      document.getElementById("matchingScoreLabel").innerHTML = survivalScore;
      highScoreCheck("survivalHighScore", survivalScore, survivalHighScore);
    }
    nextMatchingQuestion();
  } else {
    incorrectAnswerEffect();
    if (selectedGame == "matching") {
      matchingScore = 0;
      document.getElementById("matchingScoreLabel").innerHTML = matchingScore;
    } else if (selectedGame == "survival") {
      survivalScore = 0;
      document.getElementById("matchingScoreLabel").innerHTML = survivalScore;
    }
  }
}
