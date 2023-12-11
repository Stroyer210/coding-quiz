// Creating some elements
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var hr = document.createElement("hr");
var result = document.createElement("p");

// Linking elements from HTML
var firstParagraph = document.getElementById("first-paragraph");
var questions = document.getElementById("questions");
var startButton = document.querySelector("#start-button");
var divForQuestions = document.querySelector(".title-questions");

//Setting a boolean parameter
var first = false;

//Text of the first page
questions.textContent = "Coding Quiz Challenge";
firstParagraph.textContent =
  "Try to answer the following code-related questions within the time limit. Keep\r in mind that incorrect answers will penalize your score/time\rby then seconds.";

// Creating the styles of the buttons
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

//Creating the functions
startQuiz = () => {
  questions.textContent = "Commonly used data types DO Not Include:";
  questions.setAttribute("style","text-align:left;")
  firstParagraph.textContent = "";
  first=true;
  startButton.remove();
  divForQuestions.setAttribute("style", "margin-left:22%;")
  answer1.textContent = "1. Strings";
  answer2.textContent = "2. Booleans";
  answer3.textContent = "3. Alerts";
  answer4.textContent = "4. Numbers";
  divForQuestions.appendChild(answer1);
  divForQuestions.appendChild(answer2);
  divForQuestions.appendChild(answer3);
  divForQuestions.appendChild(answer4);
};


nextQuestion = () => {
    questions.textContent = "The condition in an if / else  statement is enclosed with _________:";
    questions.setAttribute("style","text-align:left;")
    first=true;
    divForQuestions.setAttribute("style", "margin-left:22%;")
    answer1.textContent = "1. Quotes";
    answer2.textContent = "2. Curly brackets";
    answer3.textContent = "3. Parenthesis";
    answer4.textContent = "4. Square brackets";
    divForQuestions.appendChild(hr);
    hr.setAttribute("style", "color:rgb(77, 76, 76); margin-top:30px; margin-right:40px;")
    divForQuestions.appendChild(result);
    result.textContent = "Wrong!";
    result.setAttribute("style", "color:rgb(143, 142, 142); text-align:left; margin-left:50px; font-size:40px;")

  };

hover1 = () => {
    answer1.style.cursor = "pointer";
    answer1.style.background = "rgb(186, 113, 219)";
}
hover2 = () => {
    answer2.style.cursor = "pointer";
    answer2.style.background = "rgb(186, 113, 219)";
}
hover3 = () => {
    answer3.style.cursor = "pointer";
    answer3.style.background = "rgb(186, 113, 219)";
}
hover4 = () => {
    answer4.style.cursor = "pointer";
    answer4.style.background = "rgb(186, 113, 219)";
}
out1 = () => {
    answer1.style.cursor = "";
    answer1.style.background = "rgb(111, 29, 150)";
}
out2 = () => {
    answer2.style.cursor = "";
    answer2.style.background = "rgb(111, 29, 150)";
}
out3 = () => {
    answer3.style.cursor = "";
    answer3.style.background = "rgb(111, 29, 150)";
}
out4 = () => {
    answer4.style.cursor = "";
    answer4.style.background = "rgb(111, 29, 150)";
}

// Added event listeners
startButton.addEventListener("click", startQuiz);

answer1.addEventListener("mouseover", hover1);
answer1.addEventListener("mouseout", out1);
answer2.addEventListener("mouseover", hover2);
answer1.addEventListener("mouseout", out2);
answer3.addEventListener("mouseover", hover3);
answer1.addEventListener("mouseout", out3);
answer4.addEventListener("mouseover", hover4);
answer1.addEventListener("mouseout", out4);

answer1.addEventListener("click",nextQuestion);
answer2.addEventListener("click",nextQuestion);
answer3.addEventListener("click",nextQuestion);
answer4.addEventListener("click",nextQuestion);
