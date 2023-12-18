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
var first = true;
var scoreNumber = 0;
var listOfScores = [];
storedScores();

//Text of the first page
questions.textContent = "Coding Quiz Challenge";
firstParagraph.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize 5 seconds of your time. MAXIMUM SCORE IS 5 POINTS.";

// Setting attributes for elements
answer1.className = "buttonsStyle";
answer2.className = "buttonsStyle";
answer3.className = "buttonsStyle";
answer4.className = "buttonsStyle";
submit.className = "buttonSubmit";
buttonGoBack.className = "buttonsStyle";
buttonReset.className = "buttonsStyle";

buttonReset.setAttribute("style", "display:block; float:right");
buttonGoBack.setAttribute("style", "display:block; float:left");
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

divForSubmitScore.setAttribute(
  "style",
  "display:flex; justify-content:flex-start; margin-top:7px;"
);

//Creating the functions
var secondsLeft = 60;
runTimer = () => {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      submitScore();
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

  answer1.addEventListener("click", finalWrongAnswer);
  answer2.addEventListener("click", finalCorrectAnswer);
  answer3.addEventListener("click", finalWrongAnswer);
  answer4.addEventListener("click", finalWrongAnswer);
};

question5Correct = () => {
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

  answer1.addEventListener("click", finalWrongAnswer);
  answer2.addEventListener("click", finalCorrectAnswer);
  answer3.addEventListener("click", finalWrongAnswer);
  answer4.addEventListener("click", finalWrongAnswer);
};

finalWrongAnswer = () => {
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
  takeOffResult();
  secondsLeft = 0;
  submitScore();
};

finalCorrectAnswer = () => {
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
  takeOffResult();
  secondsLeft = 0;
  scoreNumber++;
  submitScore();
};

submitScore = () => {
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
};

highScoresChart = () => {
  storedScores()
  questions.textContent = "High Scores";
  questions.setAttribute("style", "margin:0;");
  firstParagraph.remove();
  score.remove();
  submit.remove();
  input.remove();
  hr.remove();
  result.remove();
  startButton.remove();

  var initials = input.value.trim();
  var li = document.createElement("li");
  li.textContent = "- " + initials + " / " + scoreNumber + " point(s).";
  listOfScores.push(initials);
  divForSubmitScore.appendChild(listScores);
  listScores.appendChild(li);
  divForSubmitScore.setAttribute(
    "style",
    "display:flex; justify-content:center; margin-top:7px;"
  );
  li.setAttribute("style", "display:block; font-size: 30px;");
  divForQuestions.appendChild(divForLastButtons);

  buttonGoBack.textContent = "GO BACK";
  divForLastButtons.appendChild(buttonGoBack);

  buttonReset.textContent = "RESET HIGH SCORES";
  divForLastButtons.appendChild(buttonReset);
  storeScores();
};

function storeScores() {
  localStorage.setItem("scores", JSON.stringify(listOfScores));
}

function storedScores() {
  storedScored = JSON.parse(localStorage.getItem("scores"));
}

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

// Added event listeners
startButton.addEventListener("click", startQuiz);
submit.addEventListener("click", highScoresChart);
viewScores.addEventListener("click", highScoresChart);

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
