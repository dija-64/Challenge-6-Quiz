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

let questionIndex = 0;
let score = 0;
let timer;
const timeLimitInSecs = 60;
let timeLeft = timeLimitInSecs;


const startButton = document.getElementById("start");
const nextButton = document.getElementById("next-button");

const questionTitle = document.getElementById("question-title")
const questionsElement = document.getElementById("questions")

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

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
