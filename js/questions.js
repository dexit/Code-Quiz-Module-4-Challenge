var questions = [
    {
        title: "Which of the listed options is not a datatype? It is ____",
        choices: ["arr", "int", "character", "numbers", "boolean"],
        answer: "arr",
        explanation: '<div class="expl"><h4>Arrays are a data structure not a data type.</h4> <p>Boolean, Character and Integar (int) are primary data types of object orienting programming language. Is usually used as a name of the variable that stores arrays as it is not a reserved word. Arrays are a data structure not a data type.</p></div>'
    },
    {
        title: "When writing a conditional statement ' if / else ' what is used to enclose the logic ? It is enclosed within ____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
        explanation: '<div class="expl"><h4>An if statement is written with the if keyword, followed by a condition in parentheses</h4> <p> With the code to be executed in between curly brackets. In short, it can be written as if () {} </p></div>'
    },
    {
        title: "What can you store within Javasscript Arrays. You can use array to store  ____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
        explanation: ""
    },
    {
        title: "How do you enclose variable strings? Strings need to be enclosed with ____",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
        explanation: '<div class="expl"><h4>Single and Double Quotes in JavaScript Strings</h4><p>Strings in JavaScript are contained within a pair of either single quotation marks \'\' or double quotation marks "". Both quotes represent Strings but be sure to choose one and STICK WITH IT. If you start with a single quote, you need to end with a single quote.</p></div>'
    },
    {
        title: "During development, what is the most useful tool that helps the developer to determine code execution success or errors, or any result? You need to use ____",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log",
        explanation: '<div class="expl"><h4>The console.log() method outputs a message to the web console.</h4><p> The message may be a single string (with optional substitution values), or it may be any one or more JavaScript objects.</p></div>'
    },

];
// define global variables
var currentQuestion = 0;
var score = 0;
var timer;
var timeRemaining = 15 * (questions.length); // in seconds

// define DOM elements
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("start");
timerEl.innerHTML = 'Time : ' + timeRemaining;
// function to start the quiz
function startQuiz() {
  // hide start button
  startBtn.style.display = "none";
 // startBtn.style.display = "none";
  // start timer
  timer = setInterval(function() {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;
    
    if (timeRemaining <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
  
  // display first question
  displayQuestion();
}

// function to display a question and its choices
function displayQuestion() {
  // clear feedback
  //feedbackEl.textContent = "";
  choicesEl.innerHTML = "";

  // display current question


  questionEl.textContent = questions[currentQuestion].title;

  
  // create choice buttons
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = questions[currentQuestion].choices[i];
    choiceEl.setAttribute("class", "choice");
    choiceEl.setAttribute("value", questions[currentQuestion].choices[i]);
    choiceEl.addEventListener("click", checkAnswer);
    choicesEl.appendChild(choiceEl);
  }
}

// function to check user's answer
function checkAnswer() {
  if (this.value === questions[currentQuestion].answer) {
    feedbackEl.innerHTML = '<h2 class="correct">Correct Answer</h2>';
    score++;
  } else {

    feedbackEl.innerHTML = '<h2 class="wrong">Wrong Answer - Time Deducted</h2>';
    feedbackEl.innerHTML = feedbackEl.innerHTML + "<br>  The correct answer is <b>" + questions[currentQuestion].answer + "</b>";
    feedbackEl.innerHTML = feedbackEl.innerHTML + " <br> " + questions[currentQuestion].explanation;
    timeRemaining -= 12; // penalize for wrong answer by reducing time remaining
  }
  
  // go to next question or end quiz if no more questions
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// function to end the quiz and show the final score
function endQuiz() {
  clearInterval(timer);
  questionEl.textContent = "All done!";
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "Your final score is " + score;

  feedbackEl.innerHTML = feedbackEl.innerHTML + '<form id="highscore" action="" method="post"><input type="text" id="yourname"><button type="submit" id="formsubm">Submit</button></form>';
}


// event listener for start button
startBtn.addEventListener("click", startQuiz);
document.querySelector("#formsubm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.querySelector("#yourname").value;
  if (name == "") {
    alert("Please enter your name");
  } else {
    handleFormSubmit(event);
}
});

function handleFormSubmit(event) {
  event.preventDefault();
  var name = document.getElementById("yourname").value;
  console.log([name, score]);
  localStorage.getItem("allscore");
  localStorage.setItem("allscore", [ name, score ]);
  //window.location.href = "highscore.html";

  console.log(localStorage.getItem("allscore"));
}