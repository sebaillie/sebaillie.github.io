function initTypingGame() {
  fadeEffect2(document.getElementById("startMenu").style, document.getElementById("typingGame").style, startTypingGame);
}

var selectedQuestion;
var typingScore = 0;

function startTypingGame() {
  document.getElementById("typingHint").innerHTML = "";
  document.getElementById("typingAnswer").value = "";
  selectedQuestion = randNum(1, csvArrayLength);

  document.getElementById("typingQuestion").innerHTML = csvArray[selectedQuestion].Question;
}

function typingSubmit() {
  var inputBoxValue = document.getElementById("typingAnswer").value;

  if (inputBoxValue == csvArray[selectedQuestion].Answer || inputBoxValue == csvArray[selectedQuestion].Answer.toLowerCase()) {
    correctAnswerEffect();
    if (selectedGame == "typing") {
      typingScore++;
      document.getElementById("typingScoreLabel").innerHTML = typingScore;
      highScoreCheck("typingHighScore", typingScore, typingHighScore);
      startTypingGame();
    } else if (selectedGame == "survival") {
      survivalScore++;
      document.getElementById("typingScoreLabel").innerHTML = survivalScore;
      highScoreCheck("survivalHighScore", survivalScore, survivalHighScore);
      startSurvivalGame();
    }
  } else {
    incorrectAnswerEffect();
    if (selectedGame == "typing") {
      typingScore = 0;
      document.getElementById("typingScoreLabel").innerHTML = typingScore;
    } else if (selectedGame == "survival") {
      survivalScore = 0;
      document.getElementById("typingScoreLabel").innerHTML = survivalScore;
    }
  }
}

function showAnswer() {
  document.getElementById("typingHint").innerHTML = csvArray[selectedQuestion].Answer;
  if (selectedGame == "typing") {
    typingScore = 0;
    document.getElementById("typingScoreLabel").innerHTML = typingScore;
  } else if (selectedGame == "survival") {
    survivalScore = 0;
    document.getElementById("typingScoreLabel").innerHTML = survivalScore;
  }
}

var animationLoopGreen;

function correctAnswerEffect() {
  clearInterval(animationLoopRed);
  clearInterval(animationLoopGreen);
  var state = "greening";
  var htmlDoc = document.getElementById("html").style;
  var green = 0;
  htmlDoc.backgroundColor = "rgb(0," + green + ",0)";
  var animationLoopGreen = setInterval(function () {
    if (state == "greening") {
      green += 2;
    }
    if (green >= 50) {
      state = "blacking";
    }
    if (state == "blacking") {
      green -= 2;
    }
    if (green <= 5 && state == "blacking") {
      green = 0;
      state = "greening";
      clearInterval(animationLoopGreen);
    }
    htmlDoc.backgroundColor = "rgb(0," + green + ",0)";
  }, 1);
}

var animationLoopRed;

function incorrectAnswerEffect() {
  clearInterval(animationLoopRed);
  clearInterval(animationLoopGreen);
  var state = "redding";
  var htmlDoc = document.getElementById("html").style;
  var red = 0;
  htmlDoc.backgroundColor = "rgb(" + red + ",0,0)";
  animationLoopRed = setInterval( function () {
    if (!htmlDoc.backgroundColor) {
      htmlDoc.backgroundColor = "rgb(" + red + ",0,0)";
    }
    if (state == "redding") {
      red += 2;
    }
    if (red >= 50) {
      state = "blacking";
    }
    if (state == "blacking") {
      red -= 2;
    }
    if (red <= 5 && state == "blacking") {
      red = 0;
      state = "redding";
      clearInterval(animationLoopRed);
    }
    htmlDoc.backgroundColor = "rgb(" + red + ",0,0)";
  }, 1);
}

document.addEventListener('keydown', function (event) {
  //console.log(event.key);
  if (selectedGame == "typing" || (selectedGame == "survival" && currentGame == "typing")) {
    if (event.key == 'Enter') {
      typingSubmit();
    }
    if (event.key == 'Control') {
      showAnswer();
    }
  }
});

function nextTypingQuestion() {
  if (selectedGame == "typing") {
    startTypingGame();
  } else if (selectedGame == "survival") {
    startSurvivalGame();
  }
}
