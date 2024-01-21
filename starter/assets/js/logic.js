document.addEventListener("DOMContentLoaded", function () {

    let questionIndex = 0;
    let score = 0;
    let timer;
    const timeLimitInSecs = 60;
    let timeLeft = timeLimitInSecs;


    const startButton = document.getElementById("start-button");
    const nextButton = document.getElementById("next-button");
    const messageElement = document.getElementById("message");
    const questionContainer = document.getElementById("questions");
    const questionTitle = document.getElementById("question-title");
    const questionsElement = document.getElementById("choices");


    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", nextQuestion);

    const endScreen = document.getElementById("end-screen");
    const finalScore = document.getElementById("final-score");
    const initialsElement = document.getElementById("initials");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", scoreRecord);


    function startQuiz() {
        showQuestion();
        timer = setInterval(updateTimer, 1000);
        startButton.style.display = "none";
        questionContainer.style.display = "block";
    }

    function showQuestion() {
        const currentQuestion = questions[questionIndex];
        questionTitle.textContent = currentQuestion.question;

        questionsElement.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            questionsElement.innerHTML += `
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
            timeLeft -= 10;
            messageElement.textContent = "Incorrect!";
        }
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timer);
        finalScore.textContent = score;
        endScreen.style.display = "block";
    }

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
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
        if (initialsElement.value && initialsElement.value.length <= 3) {
            alert("Your score of " + score + " has been saved, " + initialsElement.value);
            resetQuiz();
        } else {
            alert("Enter your initials");
        }
    }

    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = timeLimitInSecs;
        initialsElement.value = "";
    }

});