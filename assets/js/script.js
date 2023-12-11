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

// Linking elements from HTML
var firstParagraph = document.getElementById("first-paragraph");
var questions = document.getElementById("questions");
var startButton = document.querySelector("#start-button");
var divForQuestions = document.querySelector(".title-questions");
var timer = document.getElementById("timer");

//Setting a boolean parameter
var first = false;

//Text of the first page
questions.textContent = "Coding Quiz Challenge";
firstParagraph.textContent =
  "Try to answer the following code-related questions within the time limit. Keep\r in mind that incorrect answers will penalize your score/time\rby then seconds.";

// Setting attributes for elements
answer1.setAttribute(
  "style",
  " background-color: rgb(111, 29, 150); padding:15px 30px; width:18%; margin:2px 0 0px 0px; color:white; font-size: 20px; border-radius: 5px; border:none; margin-top:40px; text-align: center;"
);
answer2.setAttribute(
  "style",
  " background-color: rgb(111, 29, 150); padding:15px 30px; width:18%; margin:2px 0 0px 0px; color:white; font-size: 20px; border-radius: 5px; border:none; margin-top:40px; text-align: center;"
);
answer3.setAttribute(
  "style",
  " background-color: rgb(111, 29, 150); padding:15px 30px; width:18%; margin:2px 0 0px 0px; color:white; font-size: 20px; border-radius: 5px; border:none; margin-top:40px; text-align: center;"
);
answer4.setAttribute(
  "style",
  " background-color: rgb(111, 29, 150); padding:15px 30px; width:18%; margin:2px 0 0px 0px; color:white; font-size: 20px; border-radius: 5px; border:none; margin-top:40px; text-align: center;"
);

hr.setAttribute(
  "style",
  "color:rgb(77, 76, 76); margin-top:30px; margin-right:40px;"
);
result.setAttribute(
  "style",
  "color:rgb(143, 142, 142); text-align:left; margin-left:50px; font-size:40px;"
);
score.setAttribute(
  "style",
  " font-size:35px; margin-right:20px;"
);
input.setAttribute(
  "style",
  "margin-right:20px; width:400px; height:45px; font-size:25px; padding-left:10px;"
);
submit.setAttribute(
  "style",
  " background-color: rgb(111, 29, 150); padding:15px 30px; width:18%; color:white; font-size: 20px; border-radius: 5px; border:none; text-align: center;"
);

divForSubmitScore.setAttribute(
  "style",
  "display:flex; justify-content:flex-start; margin-top:7px;"
)


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

startQuiz = () => {
  questions.textContent = "Commonly used data types DO Not Include:";
  questions.setAttribute("style", "text-align:left;");
  firstParagraph.textContent = "";
  first = true;
  startButton.remove();
  runTimer();
  divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. Strings";
  answer2.textContent = "2. Booleans";
  answer3.textContent = "3. Alerts";
  answer4.textContent = "4. Numbers";
  divForQuestions.appendChild(answer1);
  divForQuestions.appendChild(answer2);
  divForQuestions.appendChild(answer3);
  divForQuestions.appendChild(answer4);
};

question2Wrong = () => {
  secondsLeft = secondsLeft-10;
  questions.textContent =
    "The condition in an if / else  statement is enclosed with _________:";
  // questions.setAttribute("style", "text-align:left;");
  first = true;
  // divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. Quotes";
  answer2.textContent = "2. Curly brackets";
  answer3.textContent = "3. Parenthesis";
  answer4.textContent = "4. Square brackets";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
};

question2Correct = () => {
  questions.textContent =
    "The condition in an if / else  statement is enclosed with _________:";
  // questions.setAttribute("style", "text-align:left;");
  first = true;
  // divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. Quotes";
  answer2.textContent = "2. Curly brackets";
  answer3.textContent = "3. Parenthesis";
  answer4.textContent = "4. Square brackets";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
};

question3Wrong = () => {
  secondsLeft = secondsLeft-10;
  questions.textContent = "Arrays in JavaScript can be used to store ______:";
  // questions.setAttribute("style", "text-align:left;");
  first = true;
  // divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. Numbers and strings";
  answer2.textContent = "2. Other arrays";
  answer3.textContent = "3. Booleans";
  answer4.textContent = "4. All of the above";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Wrong!";
};

question3Correct = () => {
  questions.textContent = "Arrays in JavaScript can be used to store ______:";
  // questions.setAttribute("style", "text-align:left;");
  first = true;
  // divForQuestions.setAttribute("style", "margin-left:22%;");
  answer1.textContent = "1. Numbers and strings";
  answer2.textContent = "2. Other arrays";
  answer3.textContent = "3. Booleans";
  answer4.textContent = "4. All of the above";
  divForQuestions.appendChild(hr);
  divForQuestions.appendChild(result);
  result.textContent = "Correct!";
};

submitScore = () => {
  questions.textContent = "All done!";
  firstParagraph.textContent = "Your final score is _____.";
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
}

hover1 = () => {
  answer1.style.cursor = "pointer";
  answer1.style.background = "rgb(186, 113, 219)";
};
hover2 = () => {
  answer2.style.cursor = "pointer";
  answer2.style.background = "rgb(186, 113, 219)";
};
hover3 = () => {
  answer3.style.cursor = "pointer";
  answer3.style.background = "rgb(186, 113, 219)";
};
hover4 = () => {
  answer4.style.cursor = "pointer";
  answer4.style.background = "rgb(186, 113, 219)";
};
submitHover = () => {
  submit.style.cursor = "pointer";
  submit.style.background = "rgb(186, 113, 219)";
};
out1 = () => {
  answer1.style.cursor = "";
  answer1.style.background = "rgb(111, 29, 150)";
};
out2 = () => {
  answer2.style.cursor = "";
  answer2.style.background = "rgb(111, 29, 150)";
};
out3 = () => {
  answer3.style.cursor = "";
  answer3.style.background = "rgb(111, 29, 150)";
};
out4 = () => {
  answer4.style.cursor = "";
  answer4.style.background = "rgb(111, 29, 150)";
};
submitOut = () => {
  submit.style.cursor = "";
  submit.style.background = "rgb(111, 29, 150)";
};

// Added event listeners
startButton.addEventListener("click", startQuiz);

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

answer1.addEventListener("click", question2Wrong);
answer2.addEventListener("click", question2Wrong);
answer3.addEventListener("click", question2Correct);
answer4.addEventListener("click", question2Wrong);
