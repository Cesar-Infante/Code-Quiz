const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame)
const starterInfo = document.getElementById('starter-info');
const questionContainerElement = document.getElementById('question-container');
const questionList = document.getElementById('question');
var timerEl = document.getElementById('countdown');
var myQues = questions = [
  {
    question: 'What will console.log(9 + 4); print?',
    answers: [
      { text: '13', correct: true },
      { text: '22', correct: false },
      { text: '10', correct: false },
      { text: '12', correct: false }
    ]
  },
  {
    question: 'What process does this code perform?  let name;',
    answers: [
      { text: 'variable initialization', correct: false },
      { text: 'variable assignment', correct: false },
      { text: 'variable declaration', correct: true },
      { text: 'variable letting', correct: false }
    ]
  },
  {
    question: 'What will the code print? let name; console.log(name)',
    answers: [
      { text: 'undefined', correct: true },
      { text: 'null', correct: false },
      { text: 'O', correct: false },
      { text: 'name', correct: false }
    ]
  },
  {
    question: 'Which operator is used to perform variable assignment?',
    answer: [
      { text: '===', correct: false },
      { text: '==', correct: false },
      { text: '=', correct: true },
      { text: '<-', correct: false }
    ]
  },
  {
    question: 'what process does this code perform? let name = "jane";',
    answer: [
      { text: 'variable initialization', correct: false },
      { text: 'variable assignment', correct: true },
      { text: 'variable declaration', correct: false },
      { text: 'variable letting', correct: false }
    ]
  }
]

//---------------

function startGame() {
  console.log('started')
  startButton.classList.add('hidden')
  starterInfo.classList.add('hidden')
  questionContainerElement.classList.remove('hidden')
  setNextQuestion()
  setTime()
}

//---------------

function setNextQuestion() {
  console.log('accesing question')
}

//---------------

function selectAnswer() {

}

//---------------

// timer
function setTime() {
  //counts down from 90 seconds
  var timeLeft = 90;

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
    }
  }, 1000);
}