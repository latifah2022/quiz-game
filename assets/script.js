var myquestions =  [
    {
        question: "What color is the sky?",
        answer: [ "Blue", "Black", "Green", "Red"],
        correct: "Blue"
    },
    {
        question: "How many months are in 4 years?",
        answer: [ "12", "24", "48", "72"],
        correct:"48"
    },
    {
        question: "What is the standard breakfast time?",
        answer: [ "7am", "9pm", "12pm", "8pm"],
        correct:"9am"
    },
    {
        question: "What planet are we on?",
        answer: [ "Mars", "Jupiter", "America", "Earth"],
        correct: "Earth"
    },
    {
        question: "What is the best programming language?",
        answer: [ "Python", "Java", "Javascript", "Css"],
        correct: "Javascript" 
    }
]
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerEl = document.getElementById('questions-container')
var timerCountEl = document.querySelector(".timer-count")
var question = document.getElementById("questions");
var endEl = document.getElementById("end")
var containerEl = document.querySelector(".container")
var scoreshighEl = document.querySelector(".highscores")
var btnList = document.querySelectorAll(".btn");
var scoreList = document.querySelector(".score")
var submitButton = document.getElementById("submit")
var highscoremenue = document.querySelector(".highscoremenue")
console.log(btnList);
var currentQuestion = 0;
var timerCount = 50;
var lastQuestion = 4;
var initialsEl = document.getElementById("initials")
var timer;

//start the game(click start)
function startGame() {
    console.log('started')
    timer();
    startButton.classList.add('hide') //hide start
    questionContainerEl.classList.remove('hide') //remove hide class
    setNextQuestion();
}

function timer() {
     timer = setInterval(function () {
        timerCount--;
        timerCountEl.textContent = timerCount;
            if (timerCount <= 0){
                //timerCountEl.textContent = 0
                endGame()
            }
    }, 1000)
}

function endGame() {
    console.log("ended")
    clearInterval(timer);
   // lastQuestion.textContent = "Game Quiz"
   questionContainerEl.classList.add("hide");
   endEl.classList.remove("hide");

}

//set next question (click next)
function setNextQuestion() {
// if (currentQuestion < myquestions.length){

    // get the current question from myQuestions
    var questionObject = myquestions[currentQuestion];
    //indicates the correct answer
    var correctAnswer = myquestions[currentQuestion]["correct"];

    //change the question to questionObject
    question.innerHTML = myquestions[currentQuestion].question;
    console.log(question)
    console.log(questionObject)
    
    btnList.forEach(function(btnElement, index) {
        //replace the btns wth answers property
        btnElement.innerText = myquestions[currentQuestion]["answer"][index];
        btnElement.setAttribute("id", `${index}`);
        btnElement.setAttribute('value', myquestions[currentQuestion]["answer"][index] )
        btnElement.addEventListener('click', (e) => {
            selectAnswer(correctAnswer, e)
        })
    })
}


    // question.answers.forEach(answer => {
    //     const button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //       button.dataset.correct = answer.correct
    //     }
    //     answerButtonsElement.appendChild(button)
    //   })

    // function nextQuestion() {
    //   var questionObject = myquestions[currentQuestion, i++]
    //  for (var i = 0; i < currentQuestion.length; i++);
    // }

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
      
//select answer
function selectAnswer(correctAnswerIndex,event) {
    console.log(currentQuestion);
    var target = event.target;
    console.log(correctAnswerIndex);
    var idValue = target.getAttribute("id");
    if(target.value !== correctAnswerIndex) {
        timerCount -= 10
        timerCountEl.textContent = timerCount;
        console.log("Correct answer");
        currentQuestion++;
        //setNextQuestion();
    } else {
        currentQuestion++; 
        setNextQuestion()
    } 
    
    //currentQuestion++;
    if (currentQuestion === myquestions.length){
        endGame();    
    }else {
        setNextQuestion()
    }
}

function viewScreen () {
    console.log("high+scores")
    highscoremenue.setAttribute("style", "display:block")
    containerEl.setAttribute("style", "display:none")
}



function scoreList() {
    initialsScore.textContent = "";
     scoreList.textContent = "";
    for (var i = 0; i < currentQuestion.length; i++){

        var initials = initialsScore[i];
        var score = scoreList[i];
    }
}

viewScore();

// function displayScore(type, massege) {
//     scoreList.textContent = initialsEl;
//     scoreList.setAttribute("class", type);
// }

function viewScore() {
  var score = localStorage.getItem("scores");

  if (!score) {
    return;
  }
}

submitButton.addEventListener("click", function(event) {
    event.preventDefault();


  var initialsEl = document.getElementById("initials").value;

  if (initialsEl === "") {
    displayScore("error", "Please write initials");
  } else {
    viewScreen();
  }   

    localStorage.setItem("initials", initialsEl);
    viewScore();
});





startButton.addEventListener('click', startGame)
scoreshighEl.addEventListener("click", viewScreen)