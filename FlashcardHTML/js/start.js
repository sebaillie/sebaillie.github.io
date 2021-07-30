let fileReader = new FileReader();
let csvArray = [];
let csvArrayLength = 0;

// HIDES ALL WINDOWS EXCEPT FOR START MENU
window.onload = function() {
  document.getElementById("matchingGame").style.visibility = "hidden";
}

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
        initMatchingGame();
      } else if (document.getElementById("typing").checked) {
        initTypingGame();
      } else if (document.getElementById("match").checked) {
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

function fadeEffect(styleItem1, styleItem2, goToMenu) {
  // creates the fade loop
  let fadeEffect = setInterval(function () {
    // creates the SHOWN menu opacity if it doesn't exist to 1
    if (!styleItem1.opacity) {
      styleItem1.opacity = 1;
    }
    // sets the HIDDEN menu opacity to 0
    if (!styleItem2.opacity) {
      styleItem2.opacity = 0;
    }
    // creates fade OUT effect for first menu
    if (styleItem1.opacity > 0) {
      styleItem1.opacity -= 0.1;
    } else {
      styleItem1.visibility = "hidden";
      // creates fade IN effect for second menu
      styleItem2.visibility = "visible";
      if (styleItem2.opacity < 1) {
        // styleItem2.opacity += 0.1;
        styleItem2.opacity = 1;
      } else {
        goToMenu();
        clearInterval(fadeEffect);
      }
    }
  }, 15);
}
