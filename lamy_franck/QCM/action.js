const questionsQcm = [
    {
        question: "Combien d'os constituent le squelette d'un humain adulte ?",
        options: ["412 os", "350 os", "206 os"],
        reponseCorrecte: "206 os"
    },
    {
        question: "Laquelle des pierres suivantes flotte sur l'eau ?",
        options: ["La pierre ponce", "La craie", "L'ardoise"],
        reponseCorrecte: "La pierre ponce"
    },
    {
        question: "Combien de fois par jour la grande aiguille d'une horloge indique le chiffre 4 ?",
        options: ["24 fois", "12 fois", "2 fois"],
        reponseCorrecte: "24 fois"
    },
    {
        question: "Combien de fois par jour inspirons-nous ?",
        options: ["20 000", "200 000", "2 000"],
        reponseCorrecte: "20 000"
    },
    {
        question: "Quel est le point d'ébullition de l'eau?",
        options: ["100 K", "373 K", "-273K"],
        reponseCorrecte: "373 K"
    }
];

const qcmContainer = document.getElementById("qcmContainer");
const messageDiv = document.getElementById("message");

questionsQcm.forEach((data, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${data.question}`;
    questionDiv.appendChild(questionText);

    data.options.forEach((option, optionIndex) => {
        const optionLabel = document.createElement("label");
        optionLabel.innerHTML = `<input type="radio" name="q${index}" value="${optionIndex}"> ${option}<br>`;
        questionDiv.appendChild(optionLabel);
    });

    qcmContainer.appendChild(questionDiv);
});

function corriger() {
    let score = 0;
    let correctionHTML = "";

    questionsQcm.forEach((data, index) => {
        const selectedOptionIndex = getSelectedOptionIndex(index);

        if (selectedOptionIndex !== -1) {
            const selectedOption = data.options[selectedOptionIndex];
            const correctOption = data.reponseCorrecte;

            if (selectedOption === correctOption) {
                correctionHTML += `<p style="color: green;">${index + 1}. ${data.question} - Correct</p>`;
                score++;
            } else {
                correctionHTML += `<p style="color: red;">${index + 1}. ${data.question} - Incorrect<br>`;
                correctionHTML += `Votre réponse : <span style="color: red;">${selectedOption}</span><br>`;
                correctionHTML += `Bonne réponse : <span style="color: green;">${correctOption}</span></p>`;
            }
        } else {
            correctionHTML += `<p style="color: orange;">${index + 1}. ${data.question} - Aucune réponse sélectionnée</p>`;
        }
    });

    const scorePercentage = (score / questionsQcm.length) * 100;
    const message = `Votre score : ${score} / ${questionsQcm.length} (${scorePercentage}%)`;
    messageDiv.innerHTML = message + correctionHTML;
}

function getSelectedOptionIndex(questionIndex) {
    const radioButtons = document.querySelectorAll(`input[name="q${questionIndex}"]`);
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return parseInt(radioButtons[i].value);
        }
    }
    return -1;
}
