document.addEventListener("DOMContentLoaded", function() {
    var questionsNumberInput = document.querySelector('input[data-function="questions-number"]');
    var startGameButton = document.querySelector('button[data-function="start-game"]');
    var gameboardDiv = document.querySelector('div[data-function="gameboard"]');
    var checkGameButton = document.querySelector('button[data-function="check-game"]');
    var apiUrl = 'https://opentdb.com/api.php?type=multiple';

    startGameButton.addEventListener("click", function() {
        var questionsNumber = parseInt(questionsNumberInput.value);
        if (questionsNumber > 0) {
            fetchQuestions(questionsNumber);
        } else {
            alert('Please enter a valid number of questions.');
        }
    });

    function fetchQuestions(number) {
        var url = apiUrl + '&amount=' + number;
        fetch(url)
            .then(response => response.json())
            .then(data => displayQuestions(data.results))
            .catch(error => alert('Error fetching questions from the Trivial API.'));
    }

    function displayQuestions(questions) {
        gameboardDiv.innerHTML = '';
        questions.forEach(function(question, index) {
            var questionContainer = document.createElement('div');
            var questionText = document.createElement('p');
            questionText.innerHTML = '<strong>' + (index + 1) + '. ' + question.question + '</strong>';
            questionContainer.appendChild(questionText);
            var answersList = document.createElement('ul');
            question.incorrect_answers.forEach(function(answer) {
                var answerItem = document.createElement('li');
                var answerInput = document.createElement('input');
                answerInput.setAttribute('type', 'radio');
                answerInput.setAttribute('name', 'question' + index);
                answerInput.setAttribute('value', answer);
                answerItem.appendChild(answerInput);
                answerItem.innerHTML += answer;
                answersList.appendChild(answerItem);
            });
            var correctAnswerItem = document.createElement('li');
            var correctAnswerInput = document.createElement('input');
            correctAnswerInput.setAttribute('type', 'radio');
            correctAnswerInput.setAttribute('name', 'question' + index);
            correctAnswerInput.setAttribute('value', question.correct_answer);
            correctAnswerItem.appendChild(correctAnswerInput);
            correctAnswerItem.innerHTML += question.correct_answer;
            answersList.appendChild(correctAnswerItem);
            questionContainer.appendChild(answersList);
            gameboardDiv.appendChild(questionContainer);
        });
    }

    checkGameButton.addEventListener("click", function() {
        var questions = gameboardDiv.querySelectorAll('input[type=radio]:checked');
        var correctAnswers = 0;
        questions.forEach(function(question) {
            if (question.value === 'True') {
                correctAnswers++;
            }
        });
        var totalQuestions = gameboardDiv.querySelectorAll('input[type=radio]').length;
        var resultText = 'You have answered ' + correctAnswers + ' out of ' + totalQuestions + ' questions correctly.';
        alert(resultText);
    });
});
