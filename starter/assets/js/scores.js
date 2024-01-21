document.addEventListener("DOMContentLoaded", function () {

    const highscores = document.getElementById("highscores");
    const clearScores = document.getElementById("clear");

    const savedScores = JSON.parse(localStorage.getItem("scores")) || [];

    displayHighScores();

    function displayHighScores() {
        highscores.innerHTML = "";
        for (var i = 0; i < savedScores.length; i++) {
            var listItems = document.createElement("li");
            listItems.textContent = savedScores[i].initials + " - " + savedScores[i].score;
            highscores.appendChild(listItems);
        }
    }

    clearScores.addEventListener("click", function () {
        localStorage.removeItem("scores");
        savedScores.length = 0;
        displayHighScores();
    });
});