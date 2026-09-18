let targetNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = 0;

let input = document.getElementById("guessInput");
let feedback = document.getElementById("feedback");
let attemptsText = document.getElementById("attempts");
let previous = document.getElementById("previousGuesses");

document.getElementById("submitButton").onclick = function () {

    let guess = Number(input.value);

    if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = "Enter a number between 1 and 100";
        return;
    }

    attempts++;
    guesses.push(guess);

    attemptsText.textContent = attempts;
    previous.textContent = guesses.join(", ");

    if (guess === targetNumber) {
        feedback.textContent = "🎉 Correct!";
    } 
    else if (guess > targetNumber) {
        feedback.textContent = "Too High!";
    } 
    else {
        feedback.textContent = "Too Low!";
    }

    input.value = "";
};

document.getElementById("resetButton").onclick = function () {

    targetNumber = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    attempts = 0;

    attemptsText.textContent = 0;
    previous.textContent = "None";
    feedback.textContent = "";
    input.value = "";
};