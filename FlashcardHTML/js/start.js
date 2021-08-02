let fileReader = new FileReader();
let csvArray = [];
let csvArrayLength = 0;
let selectedGame;

document.cookie = "matchingHighScore";
document.cookie = "typingHighScore";
document.cookie = "survivalHighScore";

checkCookie("matchingHighScore");
checkCookie("typingHighScore");
checkCookie("survivalHighScore");

function checkCookie(cookieName) {
  if (!getCookie(cookieName)) {
  document.getCookie = cookieName + "=0";
  }
}

var matchingHighScore = parseInt(getCookie("matchingHighScore"));
var typingHighScore = parseInt(getCookie("typingHighScore"));
var survivalHighScore = parseInt(getCookie("survivalHighScore"));

window.onload = function() {
  document.getElementById("matchingHighScoreLabel").innerHTML = matchingHighScore;
  document.getElementById("typingHighScoreLabel").innerHTML = typingHighScore;
  document.getElementById("survivalHighScoreLabel").innerHTML = survivalHighScore;
}

// HIDES ALL WINDOWS EXCEPT FOR START MENU

// READS FILE AND CREATES ARRAY USING getCSVfile()
function readFile(input) {
  fileReader.readAsText(input.files[0]);
  fileReader.onload = function() {
    csvArray = getCSVfile(fileReader.result);
    csvArrayLength = csvArray.length;
  };
}

// CREATES AND RETURNS ARRAY
function getCSVfile(data, delimiter = ',') {
  const titles = ["Question","Answer"];
  const titleValues = data.slice(data.indexOf('\r\n')).split('\r\n');
  const ansArray = titleValues.map(function (v) {
    const values = v.split(delimiter);
    const storeKeyValues = titles.reduce(
      function (obj, title, index) {
        obj[title] = values[index];
        return obj;
      }, {}
    );
    return storeKeyValues;
  });
  return ansArray;
};

// STARTS GAME WHEN START BUTTON IS PUSHED
function initGame() {
  // checks if csv file was submitted
  if (csvArray.length > 0) {
    // checks what game type was selected
    if (document.getElementById("match").checked || document.getElementById("typing").checked || document.getElementById("survival").checked) {
      // starts selected game
      if (document.getElementById("match").checked) {
        matchingScore = 0;
        selectedGame = "matching";
        initMatchingGame();
      } else if (document.getElementById("typing").checked) {
        typingScore = 0;
        selectedGame = "typing";
        initTypingGame();
      } else if (document.getElementById("survival").checked) {
        survivalScore = 0;
        selectedGame = "survival";
        initSurvivalGame();
      } else {
        alert("Error: Game not found.");
      }
    } else {
      alert("Please select a game mode.");
    }
  } else {
    alert("Please submit a CSV file.");
  }
}

function fadeEffect2(item1, item2, goToMenu) {
  var animationLoop = setInterval(function () {
    if (!item1.opacity) {
      item1.opacity = 1;
    }
    if (item1.opacity > 0) {
      item1.opacity -= 0.1;
    }
    if (item1.opacity <= 0) {
      item1.visibility = "hidden";
      item2.visibility = "visible";
    }
    if (item1.opacity <= 0 && !item2.opacity) {
      item2.opacity = 0;
    }
    if (item1.opacity <= 0 && item2.opacity < 1) {
      item2.opacity = 1;
    }
    if (item2.opacity == 1) {
      goToMenu();
      clearInterval(animationLoop);
    }
  }, 15);
}

function highScoreCheck(gameMode, currentScore, highScore) {
  if (currentScore > highScore) {
    highScore = currentScore;
    document.cookie = gameMode + "=" + highScore;
  }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
