// Creating some elements
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var hr = document.createElement("hr");
var result = document.createElement("p");
var divForSubmitScore = document.createElement("div");
var score = document.createElement("p");
var submit = document.createElement("button");
var input = document.createElement("input");
var listScores = document.createElement("ul");
var divForLastButtons = document.createElement("div");
var buttonGoBack = document.createElement("button");
var buttonReset = document.createElement("button");

// Linking elements from HTML
var firstParagraph = document.getElementById("first-paragraph");
var questions = document.getElementById("questions");
var startButton = document.querySelector("#start-button");
var divForQuestions = document.querySelector(".title-questions");
var timer = document.getElementById("timer");
var viewScores = document.getElementById("view-scores");

//Setting a parameter
var scoreNumber = 0;
var arrayOfScores = [];
let itemInitialsScore = "";

//Text of the first page
questions.textContent = "Coding Quiz Challenge";
firstParagraph.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize 5 seconds of your time. MAXIMUM SCORE IS 5 POINTS.";

// Setting class for elements
answer1.className = "buttonsStyle";
answer2.className = "buttonsStyle";
answer3.className = "buttonsStyle";
answer4.className = "buttonsStyle";
submit.className = "buttonSubmit";
buttonGoBack.className = "buttonsStyle";
buttonReset.className = "buttonsStyle";

// Setting attributes for elements
hr.setAttribute(
  "style",
  "color:rgb(77, 76, 76); margin-top:30px; margin-right:40px;"
);
result.setAttribute(
  "style",
  "color:rgb(143, 142, 142); text-align:left; margin-left:50px; font-size:40px;"
);
score.setAttribute("style", " font-size:35px; margin-right:20px;");
input.setAttribute(
  "style",
  "margin-right:20px; width:400px; height:45px; font-size:25px; padding-left:10px;"
);
divForLastButtons.setAttribute(
  "style",
  "display:flex; justify-content:flex-start; margin-top:7px; gap:20px;"
);
divForSubmitScore.setAttribute(
  "style",
  "display:flex; justify-content:flex-start; margin-top:7px;"
);
listScores.setAttribute("style", "text-align:left;");

//Creating the timer function
var secondsLeft = 60;
var timerInterval = 0;
runTimer = () => {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      submitScoreWrong();
      timer.textContent = "Time: 0";
    }
  }, 1000);
};

//Take the result of every answer away after 1.5s
takeOffResult = () => {
  var timerInterval2 = setTimeout(function () {
    hr.remove();
    result.remove();
    clearInterval(timerInterval2);
  }, 1500);
};

//Starts with the first question
//Made two function for each questions when it is correct or incorrect.
startQuiz = () => {
  questions.textContent = "How do we create an unordered list in HTML:";
  questions.setAttribute("style", "text-align:left;");
  firstParagraph.textContent = "";
  startButton.remove();
  runTimer();

  divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. <unodered>";
  answer2.textContent = "2. <un-list>";
  answer3.textContent = "3. <ul>";
  answer4.textContent = "4. <unl>";

  divForQuestions.appendChild(answer1);
  divForQuestions.appendChild(answer2);
  divForQuestions.appendChild(answer3);
  divForQuestions.appendChild(answer4);

  answer1.addEventListener("click", question2Wrong);
  answer2.addEventListener("click", question2Wrong);
  answer3.addEventListener("click", question2Correct);
  answer4.addEventListener("click", question2Wrong);
};

question2Wrong = () => {
  answer1.removeEventListener("click", question2Wrong);
  answer2.removeEventListener("click", question2Wrong);
  answer3.removeEventListener("click", question2Correct);
  answer4.removeEventListener("click", question2Wrong);
  secondsLeft = secondsLeft - 5;
  questions.textContent =
    "The condition in an if / else  statement is enclosed with _________:";
  answer1.textContent = "1. Quotes";
  answer2.textContent = "2. Curly brackets";
  answer3.textContent = "3. Parenthesis";
  answer4.textContent = "4. Square brackets";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();

  answer1.addEventListener("click", question3Wrong);
  answer2.addEventListener("click", question3Wrong);
  answer3.addEventListener("click", question3Correct);
  answer4.addEventListener("click", question3Wrong);
};

question2Correct = () => {
  answer1.removeEventListener("click", question2Wrong);
  answer2.removeEventListener("click", question2Wrong);
  answer3.removeEventListener("click", question2Correct);
  answer4.removeEventListener("click", question2Wrong);
  scoreNumber++;
  questions.textContent =
    "The condition in an if / else  statement is enclosed with _________:";
  answer1.textContent = "1. Quotes";
  answer2.textContent = "2. Curly brackets";
  answer3.textContent = "3. Parenthesis";
  answer4.textContent = "4. Square brackets";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();

  answer1.addEventListener("click", question3Wrong);
  answer2.addEventListener("click", question3Wrong);
  answer3.addEventListener("click", question3Correct);
  answer4.addEventListener("click", question3Wrong);
};

question3Wrong = () => {
  answer1.removeEventListener("click", question3Wrong);
  answer2.removeEventListener("click", question3Wrong);
  answer3.removeEventListener("click", question3Correct);
  answer4.removeEventListener("click", question3Wrong);
  secondsLeft = secondsLeft - 5;
  questions.textContent = "What does HTML stand for? ";
  answer1.textContent = "1. HyperLink and Text Markup Language";
  answer2.textContent = "2. Home Tool Markup Language";
  answer3.textContent = "3. Hyper Tool Markup Language";
  answer4.textContent = "4. Hyper Text Markup Language";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();

  answer1.setAttribute("style", "width:37%");
  answer2.setAttribute("style", "width:37%");
  answer3.setAttribute("style", "width:37%");
  answer4.setAttribute("style", "width:37%");
  answer1.addEventListener("click", question4Wrong);
  answer2.addEventListener("click", question4Wrong);
  answer3.addEventListener("click", question4Wrong);
  answer4.addEventListener("click", question4Correct);
};

question3Correct = () => {
  answer1.removeEventListener("click", question3Wrong);
  answer2.removeEventListener("click", question3Wrong);
  answer3.removeEventListener("click", question3Correct);
  answer4.removeEventListener("click", question3Wrong);
  scoreNumber++;
  questions.textContent = "What does HTML stand for? ";
  answer1.textContent = "1. HyperLink and Text Markup Language";
  answer2.textContent = "2. Home Tool Markup Language";
  answer3.textContent = "3. Hyper Tool Markup Language";
  answer4.textContent = "4. Hyper Text Markup Language";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();

  answer1.setAttribute("style", "width:37%");
  answer2.setAttribute("style", "width:37%");
  answer3.setAttribute("style", "width:37%");
  answer4.setAttribute("style", "width:37%");
  answer1.addEventListener("click", question4Wrong);
  answer2.addEventListener("click", question4Wrong);
  answer3.addEventListener("click", question4Wrong);
  answer4.addEventListener("click", question4Correct);
};

question4Wrong = () => {
  answer1.removeEventListener("click", question4Wrong);
  answer2.removeEventListener("click", question4Wrong);
  answer3.removeEventListener("click", question4Wrong);
  answer4.removeEventListener("click", question4Correct);
  secondsLeft = secondsLeft - 5;
  questions.textContent = "What is the correct HTML for making a checkbox?";
  answer1.textContent = `1. <input type="checkbox">`;
  answer2.textContent = `2. <check>`;
  answer3.textContent = `3. <input type="check">`;
  answer4.textContent = `4. <checkbox>`;
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();

  answer1.setAttribute("style", "width: 30%");
  answer2.setAttribute("style", "width: 30%");
  answer3.setAttribute("style", "width: 30%");
  answer4.setAttribute("style", "width: 30%");
  answer1.addEventListener("click", question5Correct);
  answer2.addEventListener("click", question5Wrong);
  answer3.addEventListener("click", question5Wrong);
  answer4.addEventListener("click", question5Wrong);
};

question4Correct = () => {
  answer1.removeEventListener("click", question4Wrong);
  answer2.removeEventListener("click", question4Wrong);
  answer3.removeEventListener("click", question4Wrong);
  answer4.removeEventListener("click", question4Correct);
  scoreNumber++;
  questions.textContent = "What is the correct HTML for making a checkbox?";
  answer1.textContent = `1. <input type="checkbox">`;
  answer2.textContent = `2. <check>`;
  answer3.textContent = `3. <input type="check">`;
  answer4.textContent = `4. <checkbox>`;
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();

  answer1.setAttribute("style", "width: 30%");
  answer2.setAttribute("style", "width: 30%");
  answer3.setAttribute("style", "width: 30%");
  answer4.setAttribute("style", "width: 30%");
  answer1.addEventListener("click", question5Correct);
  answer2.addEventListener("click", question5Wrong);
  answer3.addEventListener("click", question5Wrong);
  answer4.addEventListener("click", question5Wrong);
};

question5Wrong = () => {
  answer1.removeEventListener("click", question5Correct);
  answer2.removeEventListener("click", question5Wrong);
  answer3.removeEventListener("click", question5Wrong);
  answer4.removeEventListener("click", question5Wrong);
  secondsLeft = secondsLeft - 5;
  questions.textContent = "What is the correct HTML for making a text area?";
  answer1.textContent = `1. <input type="textarea">`;
  answer2.textContent = `2. <textarea>`;
  answer3.textContent = `3. <input type="textbox">`;
  answer4.textContent = `4. <area>`;
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();

  answer1.addEventListener("click", submitScoreWrong);
  answer2.addEventListener("click", submitScoreCorrect);
  answer3.addEventListener("click", submitScoreWrong);
  answer4.addEventListener("click", submitScoreWrong);
};

question5Correct = () => {
  answer1.removeEventListener("click", question5Correct);
  answer2.removeEventListener("click", question5Wrong);
  answer3.removeEventListener("click", question5Wrong);
  answer4.removeEventListener("click", question5Wrong);
  scoreNumber++;
  questions.textContent = "What is the correct HTML for making a text area?";
  answer1.textContent = `1. <input type="textarea">`;
  answer2.textContent = `2. <textarea>`;
  answer3.textContent = `3. <input type="textbox">`;
  answer4.textContent = `4. <area>`;
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();

  answer1.addEventListener("click", submitScoreWrong);
  answer2.addEventListener("click", submitScoreCorrect);
  answer3.addEventListener("click", submitScoreWrong);
  answer4.addEventListener("click", submitScoreWrong);
};

submitScoreCorrect = () => {
  console.log("correct");
  clearInterval(timerInterval);
  scoreNumber++;
  answer1.removeEventListener("click", submitScoreWrong);
  answer2.removeEventListener("click", submitScoreCorrect);
  answer3.removeEventListener("click", submitScoreWrong);
  answer4.removeEventListener("click", submitScoreWrong);
  questions.textContent = "All done!";
  firstParagraph.textContent = "Your final score is " + scoreNumber + ".";
  firstParagraph.setAttribute("style", "text-align:left");
  answer1.remove();
  answer2.remove();
  answer3.remove();
  answer4.remove();
  score.textContent = "Enter initials: ";
  submit.textContent = "Submit";
  divForQuestions.appendChild(divForSubmitScore);
  divForSubmitScore.appendChild(score);
  divForSubmitScore.appendChild(input);
  divForSubmitScore.appendChild(submit);
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();
};

submitScoreWrong = () => {
  console.log("wrong");
  clearInterval(timerInterval);
  answer1.removeEventListener("click", submitScoreWrong);
  answer2.removeEventListener("click", submitScoreCorrect);
  answer3.removeEventListener("click", submitScoreWrong);
  answer4.removeEventListener("click", submitScoreWrong);
  questions.textContent = "All done!";
  firstParagraph.textContent = "Your final score is " + scoreNumber + ".";
  firstParagraph.setAttribute("style", "text-align:left");
  answer1.remove();
  answer2.remove();
  answer3.remove();
  answer4.remove();
  score.textContent = "Enter initials: ";
  submit.textContent = "Submit";
  divForQuestions.appendChild(divForSubmitScore);
  divForSubmitScore.appendChild(score);
  divForSubmitScore.appendChild(input);
  divForSubmitScore.appendChild(submit);
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();
};

//Function to see the results
highScoresChart = () => {
  questions.textContent = "High Scores";
  questions.setAttribute("style", "margin:0; text-align: left;");
  firstParagraph.remove();
  score.remove();
  submit.remove();
  input.remove();
  hr.remove();
  result.remove();
  startButton.remove();

  divForSubmitScore.appendChild(listScores);

  itemInitialsScore =
    input.value.trim().toUpperCase() + " - " + scoreNumber + " point(s).";

  var arraySavedScores = JSON.parse(localStorage.getItem("scores"));

  if (arraySavedScores === null) {
    arrayOfScores.push(itemInitialsScore);
    window.localStorage.setItem("scores", JSON.stringify(arrayOfScores));
    var itemList = document.createElement("li");
    itemList.setAttribute("style", "display:text-align:left; margin-top:7px; ");
    itemList.textContent = itemInitialsScore;
    listScores.appendChild(itemList);
  } else {
    arraySavedScores.push(itemInitialsScore);
    window.localStorage.setItem("scores", JSON.stringify(arraySavedScores));
    arraySavedScores.forEach((element) => {
      var itemList = document.createElement("li");
      itemList.setAttribute(
        "style",
        "display:text-align:left; margin-top:7px; "
      );
      itemList.textContent = element;
      listScores.appendChild(itemList);
    });
  }

  divForQuestions.appendChild(divForLastButtons);
  buttonGoBack.textContent = "GO BACK";
  divForLastButtons.appendChild(buttonGoBack);

  buttonReset.textContent = "RESET HIGH SCORES";
  divForLastButtons.appendChild(buttonReset);
};

removeLocalStorage = () => {
  localStorage.removeItem("scores");
  listScores.remove();
};

highScoresChartView = function () {
  if (listScores) {
    listScores.textContent = "";
  }
  questions.textContent = "High Scores";
  questions.setAttribute("style", "margin:0; text-align: left;");
  firstParagraph.remove();
  score.remove();
  submit.remove();
  input.remove();
  hr.remove();
  result.remove();
  startButton.remove();

  divForQuestions.appendChild(listScores);

  var arraySavedScoresView = JSON.parse(window.localStorage.getItem("scores"));

  if (arraySavedScoresView) {
    arraySavedScoresView.forEach((element) => {
      var itemList = document.createElement("li");
      itemList.textContent = element;
      itemList.setAttribute(
        "style",
        "display:text-align:left; margin-top:7px; "
      );
      listScores.appendChild(itemList);
    });
  }

  divForQuestions.setAttribute(
    "style",
    "padding-top:10px; margin-left: 22%; margin-top:5px;"
  );
  divForQuestions.appendChild(divForLastButtons);
  divForLastButtons.setAttribute(
    "style",
    "display:flex; gap:20px; justify-content:flex-start;"
  );
  buttonGoBack.textContent = "GO BACK";
  divForLastButtons.appendChild(buttonGoBack);

  buttonReset.textContent = "RESET HIGH SCORES";
  divForLastButtons.appendChild(buttonReset);
};

//Hovers and out functions
hover1 = () => {
  answer1.style.cursor = "pointer";
  answer1.style.background = "#92ceee";
  answer1.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
hover2 = () => {
  answer2.style.cursor = "pointer";
  answer2.style.background = "#92ceee";
  answer2.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
hover3 = () => {
  answer3.style.cursor = "pointer";
  answer3.style.background = "#92ceee";
  answer3.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
hover4 = () => {
  answer4.style.cursor = "pointer";
  answer4.style.background = "#92ceee";
  answer4.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
submitHover = () => {
  submit.style.cursor = "pointer";
  submit.style.background = "#92ceee";
  submit.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
buttonGoBackHover = () => {
  buttonGoBack.style.cursor = "pointer";
  buttonGoBack.style.background = "#92ceee";
  buttonGoBack.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
buttonResetHover = () => {
  buttonReset.style.cursor = "pointer";
  buttonReset.style.background = "#92ceee";
  buttonReset.style["boxShadow"] = "0px 0px 4px 4px #92ceee65";
};
out1 = () => {
  answer1.style.cursor = "";
  answer1.style.background = "#48b4ef";
  answer1.style["boxShadow"] = "none";
};
out2 = () => {
  answer2.style.cursor = "";
  answer2.style.background = "#48b4ef";
  answer2.style["boxShadow"] = "none";
};
out3 = () => {
  answer3.style.cursor = "";
  answer3.style.background = "#48b4ef";
  answer3.style["boxShadow"] = "none";
};
out4 = () => {
  answer4.style.cursor = "";
  answer4.style.background = "#48b4ef";
  answer4.style["boxShadow"] = "none";
};
submitOut = () => {
  submit.style.cursor = "";
  submit.style.background = "#48b4ef";
  submit.style["boxShadow"] = "none";
};
buttonGoBackOut = () => {
  buttonGoBack.style.cursor = "";
  buttonGoBack.style.background = "#48b4ef";
  buttonGoBack.style["boxShadow"] = "none";
};
buttonResetOut = () => {
  buttonReset.style.cursor = "";
  buttonReset.style.background = "#48b4ef";
  buttonReset.style["boxShadow"] = "none";
};

// Added event listeners
startButton.addEventListener("click", startQuiz);
submit.addEventListener("click", highScoresChart);
viewScores.addEventListener("click", highScoresChartView);

answer1.addEventListener("mouseover", hover1);
answer1.addEventListener("mouseout", out1);
answer2.addEventListener("mouseover", hover2);
answer2.addEventListener("mouseout", out2);
answer3.addEventListener("mouseover", hover3);
answer3.addEventListener("mouseout", out3);
answer4.addEventListener("mouseover", hover4);
answer4.addEventListener("mouseout", out4);
submit.addEventListener("mouseover", submitHover);
submit.addEventListener("mouseout", submitOut);
buttonGoBack.addEventListener("mouseover", buttonGoBackHover);
buttonGoBack.addEventListener("mouseout", buttonGoBackOut);
buttonReset.addEventListener("mouseover", buttonResetHover);
buttonReset.addEventListener("mouseout", buttonResetOut);

buttonGoBack.addEventListener("click", () => {
  location.reload();
});
buttonReset.addEventListener("click", removeLocalStorage);
