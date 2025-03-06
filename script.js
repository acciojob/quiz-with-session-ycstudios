//your JS code here.
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");

// Load stored progress from session storage
const savedProgress = JSON.parse(sessionStorage.getItem("progress")) || {};

// Render the quiz questions
function renderQuestions() {
  questionsElement.innerHTML = ""; // Clear existing content

  questions.forEach((question, i) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<p>${question.question}</p>`;

    question.choices.forEach((choice) => {
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (savedProgress[i] === choice) {
        choiceElement.checked = true;
      }
      choiceElement.addEventListener("change", () => saveProgress(i, choice));

      const choiceLabel = document.createElement("label");
      choiceLabel.appendChild(choiceElement);
      choiceLabel.appendChild(document.createTextNode(choice));

      questionElement.appendChild(choiceLabel);
    });
    
    questionsElement.appendChild(questionElement);
  });
}

// Save user selections to session storage
function saveProgress(index, choice) {
  savedProgress[index] = choice;
  sessionStorage.setItem("progress", JSON.stringify(savedProgress));
}

// Calculate and display the score
function calculateScore() {
  let score = 0;
  questions.forEach((question, i) => {
    if (savedProgress[i] === question.answer) {
      score++;
    }
  });
  localStorage.setItem("score", score);
  scoreElement.textContent = `Your score is ${score} out of 5.`;
}

// Load stored score if available
const storedScore = localStorage.getItem("score");
if (storedScore !== null) {
  scoreElement.textContent = `Your score is ${storedScore} out of 5.`;
}

// Event listener for submit button
submitButton.addEventListener("click", calculateScore);

// Initialize the quiz
renderQuestions();

// Do not change code below this line
// This code will just display the questions to the screen
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the highest mountain in the world?",
    choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
    answer: "Everest",
  },
  {
    question: "What is the largest country by area?",
    choices: ["Russia", "China", "Canada", "United States"],
    answer: "Russia",
  },
  {
    question: "Which is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
];

// Display the quiz questions and choices
function renderQuestions() {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    const questionElement = document.createElement("div");
    const questionText = document.createTextNode(question.question);
    questionElement.appendChild(questionText);
    for (let j = 0; j < question.choices.length; j++) {
      const choice = question.choices[j];
      const choiceElement = document.createElement("input");
      choiceElement.setAttribute("type", "radio");
      choiceElement.setAttribute("name", `question-${i}`);
      choiceElement.setAttribute("value", choice);
      if (userAnswers[i] === choice) {
        choiceElement.setAttribute("checked", true);
      }
      const choiceText = document.createTextNode(choice);
      questionElement.appendChild(choiceElement);
      questionElement.appendChild(choiceText);
    }
    questionsElement.appendChild(questionElement);
  }
}
renderQuestions();
