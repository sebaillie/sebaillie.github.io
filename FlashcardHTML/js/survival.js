function initSurvivalGame() {
  fadeEffect2(document.getElementById("startMenu").style, document.getElementById("matchingGame").style, startMatchingGame);
}

var currentGame;
var survivalScore = 0;

function startSurvivalGame() {
  var currentGameNum = randNum(1,2);

  if (currentGameNum == 1) {
    if (document.getElementById("typingGame").style.visibility != "visible") {
      document.getElementById("matchingGame").style.visibility = "hidden";
      document.getElementById("typingGame").style.visibility = "visible";
      document.getElementById("typingGame").style.opacity = 1;
    }
    currentGame = "typing";
    startTypingGame();
  } else if (currentGameNum == 2) {
    if (document.getElementById("matchingGame").style.visibility != "visible") {
      document.getElementById("typingGame").style.visibility = "hidden";
      document.getElementById("matchingGame").style.visibility = "visible";
    }
    currentGame = "matching";
    startMatchingGame();
  }
}
