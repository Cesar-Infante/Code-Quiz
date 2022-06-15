// HTML elements for manipulation 
var container = document.getElementsByClassName('container');
var timerEl = document.getElementById('countdown');
var questionContainer = document.getElementById('question-container');
var questionText = document.getElementById('question');
var buttonA = document.getElementById('btnA');
var buttonB = document.getElementById('btnB');
var buttonC = document.getElementById('btnC');
var buttonD = document.getElementById('btnD');
var startBtn = document.getElementById('start-btn');
var starterInfo = document.getElementById('starter-info');
var scoreBoard = document.getElementById('finalScore');
var highscore = document.getElementById('highscore')
var initials = document.getElementById('initials')
var result = document.getElementById('result')

//Quiz Questions 
var myQuestions = [
  {
    question: "What will console.log(9 + 4); print?",
    answerA: "13",
    answerB: "22",
    answerC: "10",
    answerD: "12",
    correctAnswer: "13"
  },
  {
    question: "What process does this code perform?  let name;",
    answerA: "Variable initialization",
    answerB: "Variable assignment",
    answerC: "Variable declaration",
    answerD: "Variable letting",
    correctAnswer: "Variable declaration"
  },
  {
    question: "What will the code print? let name; console.log(name)",
    answerA: "Undefined",
    answerB: "Null",
    answerC: "name",
    answerD: "string",
    correctAnswer: "Undefined"
  },
  {
    question: "Which operator is used to perform variable assignment?",
    answerA: "===",
    answerB: "==",
    answerC: "=",
    answerD: "<-",
    correctAnswer: "="
  },
  {
    question: "what process does this code perform? let name = 'jane';",
    answerA: "Variable initialization",
    answerB: "Variable assignment",
    answerC: "Variable declaration",
    answerD: "Variable letting",
    correctAnswer: "Variable initialization"
  },
];

// variables in global scope
var lastQuestionIndex = myQuestions.length;
var currentQuestionIndex = 0;
var score = 0;
var correct;

// startGame function, hides start button, hides starter info, questionContainer shows up, timer starts, sets the question
function startGame() {
  console.log('game started');
  startBtn.classList.add('hidden');
  starterInfo.classList.add('hidden');
  questionContainer.classList.remove('hidden');
  setTime();
  setNextQuestion()
}

//setNextQuestion function, populate question and answers
function setNextQuestion() {
  console.log('accesing questions')
  var currentQuestion = myQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  buttonA.textContent = currentQuestion.answerA;
  buttonB.textContent = currentQuestion.answerB;
  buttonC.textContent = currentQuestion.answerC;
  buttonD.textContent = currentQuestion.answerD;
  console.log(currentQuestion)
}

// Need to get input from user, determine if the user input is correct or incorrect -help from Omar

function selectAnswer(event) {
  var userAnswer = event.target.textContent;
  var correctAnswer = myQuestions[currentQuestionIndex]['correctAnswer'];

  if (userAnswer === correctAnswer) {
    result.textContent = "Correct!";
    console.log(userAnswer)
  } else {
    result.textContent = "incorrect!"
  }

}

// timer
function setTime() {
  //counts down from 30 seconds
  var timeLeft = 30;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      //call the scorebored function (not set)
      // scoreBoard()
    }
  }, 1000);

}

//event listeners
startBtn.addEventListener('click', startGame)
buttonA.addEventListener('click', selectAnswer)
buttonB.addEventListener('click', selectAnswer)
buttonC.addEventListener('click', selectAnswer)
buttonD.addEventListener('click', selectAnswer)