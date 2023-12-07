let userName = "User";
let tryes = 0;
let barabanValues = [];
let winerText = "";
const imagesQuantity = 5;
const maxTries = 3;

function startGame() {
    let userInput = prompt("Введіть своє ім'я:");
    if (userInput === null || userInput === "") {
    // Якщо введено пустий рядок або вибрано "Cancel", встановіть ім'я за замовчуванням
    userName = "User";
} else {
    // Якщо користувач ввів ім'я, встановіть його
    userName = userInput;
}
const nameOfUser = document.getElementById('nameOfUser');
nameOfUser.innerHTML = userName;   
}

function processRound() {
    generateRandomBaraban();
    refreshBarabanOnThePage();
}

function checkWinner() {
    for(let j=0; j<3; j++) {
        if(barabanValues[0][j] == barabanValues[1][j] && barabanValues[1][j] == barabanValues[2][j]) {
            return true;
        }
    }
    return false;
}

function refreshBarabanOnThePage() {
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            const val = barabanValues[i][j];
            const selector = "#img-" + (i*3 + j + 1) + " img";
            let imgCell = document.querySelector(selector);            
            imgCell.src = "img/" + val + ".png";
        }
    }
}

function generateRandomBaraban() {
    barabanValues = [];
    for(let i=0; i<3; i++) {
        barabanValues.push(
            getRandomArray(3, 1, imagesQuantity)
        );
    }
}

function getRandomArray(length, min, max) {
    let randomArray;
    
    randomArray = [];
    while (randomArray.length < length) {
        let randomNumber = getRandomInt(min, max);
        if (!randomArray.includes(randomNumber)) {
            randomArray.push(randomNumber);
        }
    }

    return randomArray;
}

function getRandomInt(min, max) {
    // Function to get a random integer between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound() {
    let isUserWin = false;

    const scoreTryes = document.getElementById('try');

    tryes++;
    if (tryes <= 3) {
        scoreTryes.innerHTML = "Спроба " + (tryes) + " з 3";

        processRound();
        isUserWin = checkWinner();
        if (isUserWin) {
            winerText = userName + " win !";
        } 
    }

    if (tryes === 3 || isUserWin) {
        setTimeout(function() {
            if (!winerText) {
                winerText = userName + " loose !"
            }
            alert("Гра завершена! " + winerText);
            // Скидаємо рахунки
            scoreTryes.innerHTML = "Спроба 0 з 3";
            winerText = "";  
            tryes = 0;             
        }, 100);
    }   
}

// document.addEventListener("DOMContentLoaded", function(){
    startGame();
// });
