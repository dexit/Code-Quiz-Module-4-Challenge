var questions = [
    {
        title: "Which of the listed options is not a datatype? It is ____",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
        explanation: ""
    },
    {
        title: "When writing a conditional statement ' if / else ' what is used to enclose the logic ? It is enclosed within ____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
        explanation: ""
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
        explanation: ""
    },
    {
        title: "During development, what is the most useful tool that helps the developer to determine code execution success or errors, or any result? You need to use ____",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log",
        explanation: ""
    },

];
var answersList = document.getElementById("answersList");
var timer = document.querySelector("#currentTime");
var thequestionbox = document.querySelector("#quizQA");
var thebutton = document.querySelector("#quizStart");


function forgeQuestion(title, choices, answer, explanation) {
    var question = {
        title: title,
        choices: choices,
        answer: answer,
        explanation: explanation
    };
    var resulted = "";
    resulted += `<h1>${question.title}</h1>`;
    resulted += `<p>${question.explanation}</p>`;
    resulted += `<ul>`;
    for (var i = 0; i < question.choices.length; i++) {
        resulted += `<li data-answer="${question.choices[i]}"><button>${question.choices[i]}</button></li>`;
    }
    resulted += `</ul>`;
    resulted += `<p>${question.answer} <span class="tolltip"> ${question.explanation}  </span></p>`;
    return resulted;
}


thebutton.addEventListener("click", function() {
    // start of the quest
    var questionstep = 0;
    var thequestiondata;
    for (var i = 0; i < questions.length; i++) {
         console.log(questionstep);
         console.log(questions[i].title);
         console.log(questions[i].choices);
         console.log(questions[i].answer);
if(questionstep == 0){
    thequestiondata = forgeQuestion(questions[i].title, questions[i].choices, questions[i].answer, questions[i].explanation);
    thequestionbox.innerHTML = thequestiondata;
    questionstep++;
}
else if(questionstep == 1){
    thequestiondata = forgeQuestion(questions[i].title, questions[i].choices, questions[i].answer, questions[i].explanation);
    thequestionbox.innerHTML = thequestiondata;
    questionstep++;
}
else if(questionstep == 2){
    thequestiondata = forgeQuestion(questions[i].title, questions[i].choices, questions[i].answer, questions[i].explanation);
    thequestionbox.innerHTML = thequestiondata;
    questionstep++;
}
else if(questionstep == 3){
      thequestiondata = forgeQuestion(questions[i].title, questions[i].choices, questions[i].answer, questions[i].explanation);
    thequestionbox.innerHTML = thequestiondata;
    questionstep++;
}
    else if(questionstep == 4){
        thequestiondata = forgeQuestion(questions[i].title, questions[i].choices, questions[i].answer, questions[i].explanation);
      }
    // end of the quest
    }
}
  );
