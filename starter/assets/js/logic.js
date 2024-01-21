document.addEventListener("DOMContentLoaded", function () {

    let questionIndex = 0;
    let score = 0;
    let timer;
    const timeLimitInSecs = 60;
    let timeLeft = timeLimitInSecs;


    const startButton = document.getElementById("start-button");
    const messageElement = document.getElementById("message");
    const questionContainer = document.getElementById("questions");
    const questionTitle = document.getElementById("question-title");
    const questionsElement = document.getElementById("choices");


    startButton.addEventListener("click", startQuiz);

    const endScreen = document.getElementById("end-screen");
    const finalScore = document.getElementById("final-score");
    const initialsElement = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const restartButton = document.getElementById("restart-button");

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
            const answerButton = document.createElement("button");
            answerButton.textContent = option;
            answerButton.addEventListener("click", function () {
                checkAnswer(option);
            });

            questionsElement.appendChild(answerButton);
        });
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[questionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {

            score++;
            messageElement.textContent = "Correct!";

        } else {
            timeLeft -= 10;
            messageElement.textContent = "Incorrect!";
        }
        if (questionIndex < questions.length - 1) {
            questionIndex++;
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timer);
        finalScore.textContent = score;
        endScreen.style.display = "block";
        restartButton.style.display = "block";
    }

    restartButton.addEventListener("click", function () {
        location.reload();
    });

    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("time").textContent = timeLeft;
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
        currentQuestion = 0;
        score = 0;
        timeLeft = timeLimitInSecs;
        initialsElement.value = "";
    }

});