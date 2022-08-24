
var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('questions-container')
var timerCountEl = document.querySelector(".timer-count")
var question = document.getElementById("questions");
var containerEl = document.querySelector(".container")
var scoresEl = document.querySelector(".scores")
var btnList = document.querySelectorAll(".btn");
var scoreList = document.querySelector(".score")
var highscoremenue = document.querySelector(".highscoremenue")
console.log(btnList);
var currentQuestion = 0;
var timerCount = 50;
var lastQuestion = 4;

//start the game(click start)
function startGame() {
    console.log('started')
    timer();
    startButton.classList.add('hide') //hide start
    questionContainerEl.classList.remove('hide') //remove hide class
    setNextQuestion();
}

// function endGame() {
//     console.log("ended")

// }

//set next question (click next)
function setNextQuestion() {
if (currentQuestion < lastQuestion){

    // get the current question from myQuestions
    var questionObject = myquestions[currentQuestion];
    //indicates the correct answer
    var correctAnswer = myquestions[currentQuestion]["correct"];

    //change the question to questionObject
    question.innerHTML = myquestions[currentQuestion].question;
    console.log(question)
    console.log(questionObject)
    
    // 
    btnList.forEach(function(btnElement, index) {
        //replace the btns wth answers property
        btnElement.innerText = myquestions[currentQuestion]["answer"][index];
        btnElement.setAttribute("id", `${index}`);
        btnElement.addEventListener('click', (e) => {
            selectAnswer(correctAnswer, e)
        })
    })

} else {
    console.log("nextquestion")
}
    console
    // function nextQuestion() {
    //     console.log("next")
    // var questionObject = myquestions[currentQuestion, i++]
    //  for (var i = 0; i < currentQuestion.length; i++);
    // }
}



//select answer
function selectAnswer(correctAnswerIndex, event) {
    var target = event.target;
    var idValue = target.getAttribute("id");
    if(idValue == correctAnswerIndex) {
        console.log("Correct answer");
        currentQuestion++;
        setNextQuestion();
    } else {
        timerCount = timerCount - 10
        currentQuestion++; setNextQuestion ()
    }
    //inccorrect answer deduct 5sec from timercount.
}

//function 

function timer() {
    var timer = setInterval(function () {
        timerCount--;
        timerCountEl.textContent = timerCount;
            if (timerCount <= 0){
                clearInterval(timer);
                //endGame()
            }
    }, 1000)
}

function viewscreen () {
    console.log("scores")
    highscoremenue.setAttribute("style", "display:block")
    containerEl.setAttribute("style", "display:none")
}
//questions
var myquestions =  [
    {
        question: "What color is the sky?",
        answer: [ "Blue", "Black", "Green", "Red"],
        correct: 0
    },
    {
        question: "How many months are in 4 years?",
        answer: [ "12", "24", "48", "72"],
        correct: 2
    },
    {
        question: "What is the standard breakfast time?",
        answer: [ "7am", "9pm", "12pm", "8pm"],
        correct: 1
    },
    {
        question: "What planet are we on?",
        answer: [ "Mars", "Jupiter", "America", "Earth"],
        correct: 3
    },
    {
        question: "What is the best programming language?",
        answer: [ "Python", "Java", "Javascript", "Css"],
        correct: 2 
    }
]

function scoreList() {
    initialsScore.textContent = "";
    scoreList.textContent = "";
    for (var i = 0; i < currentQuestion.length; i++);
         var initials = initialsScore[i]
         var score = scoreList[i];



}



startButton.addEventListener('click', startGame)
scoresEl.addEventListener("click", viewscreen)