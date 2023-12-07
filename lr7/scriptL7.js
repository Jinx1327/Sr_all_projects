const bodyContent = `
<div class="back"><a href="../">На головну</a></div>
<div class="container">
<h1>Магічна куля</h1>
<input type="text" id="questionInput" placeholder="Задайте питання...">
<button onclick="getAnswer()">Отримати відповідь</button>
<div class="image-div">
    <img src="kula.jpg">
    <h2><p id="answer">Я магічна куля<br>Чекаю за запитання</p></h2>            
</div>
</div>`;

window.addEventListener("load", function() {
    document.body.innerHTML = bodyContent;
});

function getAnswer() {
    const questionInput = document.getElementById('questionInput');
    const answerElement = document.getElementById('answer');
    const answers = [
        'Так',
        'Ні',
        'Можливо',
        'Не впевнений',
        'Питання не чітке.<br>Спробуйте ще раз.'
    ];

    const question = questionInput.value.trim();
    answerElement.classList.add('fade');    
    if (question !== '') {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        answerElement.innerHTML = "Відповідь:<br>" + answer;
    } else {
        answerElement.innerHTML = "Будь ласка,<br>введіть питання.";
    }
    setTimeout(function() {
        answerElement.classList.remove('fade');
    }, 500);   
}
