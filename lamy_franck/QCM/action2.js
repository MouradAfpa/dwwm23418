function corriger() {
    let score = 0;
    let correctionHTML = "";

    const questions = document.querySelectorAll('.question');

    questions.forEach((question, index) => {
        const selectedOption = getSelectedOption(question);

        if (selectedOption !== null) {
            const correctOption = question.getAttribute('data-correct-answer');

            if (selectedOption === correctOption) {
                correctionHTML += `<p style="color: green;">${index + 1}. ${question.querySelector('p').textContent} - Correct</p>`;
                score++;
            } else {
                correctionHTML += `<p style="color: red;">${index + 1}. ${question.querySelector('p').textContent} - Incorrect<br>`;
                correctionHTML += `Votre réponse : <span style="color: red;">${selectedOption}</span><br>`;
                correctionHTML += `Bonne réponse : <span style="color: green;">${correctOption}</span></p>`;
            }
        } else {
            correctionHTML += `<p style="color: orange;">${index + 1}. ${question.querySelector('p').textContent} - Aucune réponse sélectionnée</p>`;
        }
    });

    const scorePercentage = (score / questions.length) * 100;
    const message = `Votre score : ${score} / ${questions.length} (${scorePercentage}%)`;
    document.getElementById("message").innerHTML = message + correctionHTML;
}

function getSelectedOption(question) {
    const radioButtons = question.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }
    return null;
}
