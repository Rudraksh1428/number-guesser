let guess = document.querySelector("#guess");
let guessBtn = document.querySelector("#guess-btn");
let rstBtn = document.querySelector("#reset-btn");
let result = document.querySelector("#result");
let gup = document.querySelector("#giveUp-btn");

const wins = document.querySelector("#wins");
const attempts = document.querySelector("#attempts");
const best = document.querySelector("#best");

let winCount = 0;
let attemptCount = 0;
let bestScore = null;

const ranNum = () => {
    return Math.floor(Math.random() * 1001);
};

let computerNum = ranNum();
console.log(computerNum);

const check = () => {

    if (guess.value === "") {
        result.innerText = "Please enter a number!";
        result.style.color = "orange";
        guess.focus();
        return;
    }

    const userChoice = Number(guess.value);

    if (userChoice < 0 || userChoice > 1000) {
        result.innerText = "Guess between 0 and 1000!";
        result.style.color = "red";
        guess.value = "";
        guess.focus();
        return;
    }

    attemptCount++;
    attempts.innerText = attemptCount;

    if (userChoice === computerNum) {

        result.innerText = `Correct Guess! The correct answer was ${computerNum}`;
        result.style.color = "green";

        winCount++;
        wins.innerText = winCount;

        if (bestScore === null || attemptCount < bestScore) {
            bestScore = attemptCount;
            best.innerText = bestScore;
        }

        computerNum = ranNum();
        console.log(computerNum);

        attemptCount = 0;
        attempts.innerText = attemptCount;

        guess.value = "";

        setTimeout(() => {
            result.innerText = "Start Guessing!";
            result.style.color = "white";
            guess.focus();
        }, 2500);

        return;
    }

    if (userChoice < computerNum) {
        result.innerText = "Guess Higher!";
        result.style.color = "red";
    } else {
        result.innerText = "Guess Lower!";
        result.style.color = "red";
    }

    guess.value = "";
    guess.focus();
};

guessBtn.addEventListener("click", check);

guess.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        check();
    }
});

rstBtn.addEventListener("click", () => {

    winCount = 0;
    attemptCount = 0;
    bestScore = null;

    wins.innerText = 0;
    attempts.innerText = 0;
    best.innerText = "--";

    computerNum = ranNum();
    console.log(computerNum);

    result.innerText = "Start Guessing!";
    result.style.color = "white";

    guess.value = "";
    guess.focus();
});

gup.addEventListener("click", () => {

    result.innerText = `You lose! The correct answer was ${computerNum}`;
    result.style.color = "#9e2067";

    computerNum = ranNum();
    console.log(computerNum);

    attemptCount = 0;
    attempts.innerText = 0;

    guess.value = "";

    setTimeout(() => {
        result.innerText = "Start Guessing!";
        result.style.color = "white";
        guess.focus();
    }, 1500);
});