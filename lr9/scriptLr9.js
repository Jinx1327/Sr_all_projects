let userName; // Змінна для зберігання імені користувача
let userScore = 0; // Змінна для зберігання кількості балів користувача
let computerScore = 0; // Змінна для зберігання кількості балів комп'ютера
let tryes = 0; // Змінна для відстеження кількості спроб
let winerText; // Змінна для зберігання тексту переможця

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

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * 36) + 1;
    // Повернення імені файлу випадково вибраної картки
    return `${randomIndex}.PNG`;
}

function getPoints(cardImage) {
    // Вилучення номера картки з імені файлу
    const cardNumber = parseInt(cardImage.match(/\d+/)[0]);
    // Змінна для зберігання кількості балів за картку
    let point = 0;
    // Присвоєння балів в залежності від діапазону номера картки
    if (cardNumber >= 1 && cardNumber <= 4) {
        point = 6;
    } else if (cardNumber >= 5 && cardNumber <= 8) {
        point = 7;
    } else if (cardNumber >= 9 && cardNumber <= 12) {
        point = 8;
    } else if (cardNumber >= 13 && cardNumber <= 16) {
        point = 9;
    } else if (cardNumber >= 17 && cardNumber <= 20) {
        point = 10;
    } else if (cardNumber >= 21 && cardNumber <= 24) {
        point = 2;
    } else if (cardNumber >= 25 && cardNumber <= 28) {
        point = 3;
    } else if (cardNumber >= 29 && cardNumber <= 32) {
        point = 4;
    } else if (cardNumber >= 33 && cardNumber <= 36) {
        point = 11;
    }

    return point;
}

function createCardElement(cardImage) {
    // Створення елементу зображення для картки
    const card = document.createElement('img');
    // Встановлення атрибуту src для зображення картки
    card.src = 'karty/' + cardImage;
    return card;
}

function playRound() {
    const outputUser = document.getElementById('outputUser');
    const scoreOutputUser = document.getElementById('scoreUser');
    const outputComputer = document.getElementById('outputComputer');
    const scoreOutputComputer = document.getElementById('scoreComputer');
    const scoreTryes = document.getElementById('try');

    tryes++;
    if (tryes <= 3) {
        // Відображення поточної спроби на веб-сторінці
        scoreTryes.innerHTML = "Спроба " + (tryes) + " з 3";

        // Отримання випадкових карт
        const userCardImage = getRandomCard();
        const computerCardImage = getRandomCard();

        // Створення елементів для зберігання карт
        const userCard = createCardElement(userCardImage);
        const computerCard = createCardElement(computerCardImage);

        // Очищення відображення карт та відображення карт на веб-сторінці
        outputUser.innerHTML = '';
        outputUser.appendChild(userCard);
        outputComputer.innerHTML = '';
        outputComputer.appendChild(computerCard);

        // Отримання балів за карти
        const userPoints = getPoints(userCardImage);
        const computerPoints = getPoints(computerCardImage);

        // Оновлення кількості балів та відображення кількості балів на веб-сторінці
        userScore += parseInt(userPoints);
        scoreOutputUser.innerHTML = userScore;
        computerScore += parseInt(computerPoints);
        scoreOutputComputer.innerHTML = computerScore;

        // Визначення переможця на основі кількості балів
        if (userScore < computerScore){
            winerText = "Computer переміг!";
        } else if(userScore > computerScore) {
            winerText = userName + " переміг!";
        } else {
            winerText = "Нічия!";
        }
    }
    
    // Перевірка на завершення гри
        if (tryes === 3) {
            setTimeout(function() {
                alert("Гра завершена! " + winerText);
                // Скидаємо рахунки
                userScore = 0;
                computerScore = 0;
                tryes = 0;
                outputUser.innerHTML = "";
                outputComputer.innerHTML = "";
                scoreOutputUser.innerHTML = "0";
                scoreOutputComputer.innerHTML = "0";
                scoreTryes.innerHTML = "Спроба 0 з 3";
                    
            }, 100);
        }
        
}
startGame();

