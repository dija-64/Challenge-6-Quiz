let questionIndex = 0;
let score = 0;
let timer;
const timeLimitInSecs = 60;
let timeLeft = timeLimitInSecs;


const startButton = document.getElementById("start");
const nextButton = document.getElementById("next-button");
const messageElement = document.getElementById("message");
const questionContainer = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const questionsElement = document.getElementById("choices");

const questions = [
    {
        question: "What is the name of the possessed girl in the film 'The Exorcest'?",
        options: ["Jessica", "Regan", "Maya", "Yasmina"],
        correctAnswer: "Regan"
    },
    {
        question: "What is the name of the main villain in the 'Halloween' film franchise?",
        options: ["Michael Myers", "Jason Vorhees", "Freddy Kreuger", "Leatherface"],
        correctAnswer: "Michael Myers"
    },

    {
        question: "What happens to anyone who watches a certain cursed videotape in the film 'The Ring'?",
        options: ["They meet their Doppleganger", "They develop life-altering super powers", "They die in seven days", "They lose four out of five of their senses"],
        correctAnswer: "They die in seven days"
    },

    {
        question: "Which film features a haunted hotel with the room number 237 and a character named JAck Torrance?",
        options: ["The Omen", "Paranormal Activity", "Sinister", "The Shining"],
        correctAnswer: "Michael Myers"
    },

    {
        question: "What supernatural entity is the main antaonist in the film 'The Conjuring'?",
        options: ["Demons", "Cenobites", "Witches", "Zombies"],
        correctAnswer: "Demons"
    },
];


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

const endScreen = document.getElementById("end-screen");
const finalScore = document.getElementById("final-score");
const initialsElement = document.getElementById("ititials");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", scoreRecord);


function startQuiz() {
    showQuestion();
    timer = setInterval(updateTimer, 1000);
}

function showQuestion() {
    const currentQuestion = questions[questionIndex];
    questionsElement.textContext = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        optionsElement.innerHTML += `
        <button onclick="checkAnswer('${option}')">${option}</button>
      `;
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {

        score++;
        messageElement.textContent = "Correct!";

    } else {
        timeRemaining -= 10;
        messageElement.textContent = "Incorrect!";
    }
    if (cuttentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    finalScoreElement.textContent = score;
}

function updateTimer() {
    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        endQuiz();
    }
}

function nextQuestion() {
    messageElement.textContent = "";
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();

    }
}

function scoreRecord() {
    if (initials && initials.length <= 3) {
        alert("Your score of " + score + " has been saved, " + initials);
        resetQuiz();
    } else {
        alert("Enter your initials");
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = timeLimitInSecs;
    initialsElement.value = "";
}