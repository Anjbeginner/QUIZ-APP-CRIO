
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2
},
{
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0
},
{
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0
},
{
    text: "What does HTML stand for?",
    options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: 2
},
{
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2
},
{
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3
},
{
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0
},
{
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2
},
{
    text: "What is the primary use of the Git command 'clone'?",
    options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
    correct: 1
},
{
    text: "What does API stand for in the context of programming?",
    options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
    correct: 1
}
];

const questionElement = document.getElementById("question");
const answerListElement = document.getElementById("answer-list");
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");

submitButton.addEventListener("click", () => {
  let userAnswer = getSelectedOption();
  if (userAnswer === -1) {
    alert("Please select an answer!");
  } else {
    highlightCorrectAnswer();
    submitButton.style.display = "none";
    nextButton.style.display = "block";
    if (userAnswer === questions[currentQuestionIndex].correct) {
      score++;
    }
  }
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
    currentQuestionIndex = 0;
    score = 0;
  }
  displayQuestion();
  submitButton.style.display = "block";
  nextButton.style.display = "none";
  for (let i = 0; i < answerListElement.children.length; i++) {
    answerListElement.children[i].children[0].checked = false;
  }
});

displayQuestion();

function displayQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].text;
  answerListElement.innerHTML = "";
  for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
    let answerOption = document.createElement("li");
    let radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.value = i;
    let label = document.createElement("label");
    label.textContent = questions[currentQuestionIndex].options[i];
    answerOption.appendChild(radioInput);
    answerOption.appendChild(label);
    answerListElement.appendChild(answerOption);
  }
}

function getSelectedOption() {
  for (let i = 0; i < answerListElement.children.length; i++) {
    if (answerListElement.children[i].children[0].checked) {
      return parseInt(answerListElement.children[i].children[0].value);
    }
  }
  return -1;
}

function highlightCorrectAnswer() {
  for (let i = 0; i < answerListElement.children.length; i++) {
    if (i === questions[currentQuestionIndex].correct) {
      answerListElement.children[i].classList.add("correct");
    }
  }
}
