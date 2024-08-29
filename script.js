const quizData = [
  {
    question: "Whats Ameen favourite football team?",
    options: ["Real Madrid ", "Barcelona", "Bayern Munich", "Chelsea"],
    answer: 2,
  },
  {
    question: "Whats the best date ever for Ameen?",
    options: ["1 sep ", "23 oct", "16 aug", "20 jan"],
    answer: 1,
  },
  {
    question: "Whats Ameen best anime show ?",
    options: ["Dragn Ball Z ", "One piece", "Death Note", "Bleach"],
    answer: 0,
  },
  {
    question: "What makes Ameen happy?",
    options: ["Food ", "Gaming", "Friends", "Football"],
    answer: 1,
  },
  {
    question: "ameen loves Soso percentage% ?",
    options: ["10000% ", "10000000%", "100%", "infinite"],
    answer: 3,
  },
];

const questionElement = document.querySelector("#question");
const answerElements = document.querySelectorAll(".options .option");
const scoreElement = document.querySelector(".score");
let score = 0;
let questionIndex = 0;

function setQuestion() {
  const currentQuestion = quizData[questionIndex];
  questionElement.innerHTML = currentQuestion.question;
  answerElements.forEach((answerElement, index) => {
    answerElement.innerHTML = currentQuestion.options[index];
  });
}


function checkAnswers(optionIndex) {
  const currentQuestion = quizData[questionIndex];
  if (optionIndex === currentQuestion.answer) {
    score++;
  }
  questionIndex++;

  if (questionIndex < quizData.length) {
    setQuestion();
  }
  else{
  showResults();
}}
function showResults(){
  questionElement.style.display="none";
  answerElements.forEach((answerElement) => {
    answerElement.style.display = "none";
  });
  scoreElement.innerHTML=`you scored ${score} of ${quizData.length}`
  scoreElement.style.display= "block";
}
answerElements.forEach((optionElement , index)=>
optionElement.addEventListener("click" ,()=>checkAnswers(index)));









setQuestion();