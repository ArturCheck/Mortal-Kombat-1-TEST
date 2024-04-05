function checkAnswers() {
    const quiz = document.getElementById('quiz');
    const questions = quiz.getElementsByTagName('li');
    let score = 0;
    let allQuestionsAnswered = true;

    for (let i = 0; i < questions.length; i++) {
        const inputs = questions[i].querySelectorAll('input');
        let questionAnswered = false;

        for (let j = 0; j < inputs.length; j++) {
            if (inputs[j].checked) {
                questionAnswered = true;
                if (inputs[j].value === 'correct') {
                    score++;
                }
            }
        }

        if (!questionAnswered) {
            allQuestionsAnswered = false;
        }
    }

    const resultDiv = document.getElementById('result');
    const gradeDiv = document.getElementById('grade');
    resultDiv.innerHTML = '';
    gradeDiv.innerHTML = '';

    if (allQuestionsAnswered) {
        if (score === 20) {
            resultDiv.innerHTML = 'Відмінно! Ти правильно відповів(-ла) на всі питання.';
            gradeDiv.innerHTML = 'Твоя оцінка: 5';
        } else if (score >= 14) {
            resultDiv.innerHTML = 'Добре! Ти відповів(-ла) правильно на багато питань.';
            gradeDiv.innerHTML = 'Твоя оцінка: 4';
        } else if (score >= 8) {
            resultDiv.innerHTML = 'Не погано! Ти відповів(-ла) на кілька питань правильно.';
            gradeDiv.innerHTML = 'Твоя оцінка: 3';
        } else if (score >= 1) {
            resultDiv.innerHTML = 'Погано! Ти відповів(-ла) правильно на дуже малу кількість питань.';
            gradeDiv.innerHTML = 'Твоя оцінка: 2';
        } else {
            resultDiv.innerHTML = 'Спробуй ще раз! Ти не відповів(-ла) правильно на жодне питання.';
            gradeDiv.innerHTML = 'Твоя оцінка: 1';
        }
    } else {
        resultDiv.innerHTML = 'Ти не відповів(-ла) на деякі питання! Оцінка невідома!';
    }

    window.scrollTo(0, document.body.scrollHeight);
}
