const validEmailSuffix = "@vitstudent.ac.in";
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "O2", "H2O", "CO2"],
        answer: "O"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Brain", "Liver", "Skin"],
        answer: "Skin"
    },
    {
        question: "What is the atomic number of hydrogen?",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        answer: "Mars"
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "What is the process by which plants make their own food using sunlight?",
        options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
        answer: "Photosynthesis"
    },
    {
        question: "Which gas makes up the majority of the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "What is the smallest bone in the human body?",
        options: ["Femur", "Tibia", "Stapes", "Radius"],
        answer: "Stapes"
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextQuestionButton = document.getElementById("nextQuestion");

nextQuestionButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedAnswer = selectedOption.value;
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            score++;
        }
        selectedOption.checked = false;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showNextQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Please select an option before moving to the next question.");
    }
});

function showNextQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerHTML = `<input type="radio" name="option" value="${option}" id="option${index}">
        <label for="option${index}">${option}</label>`;
        optionsElement.appendChild(optionElement);
    }
    );
}

function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completed!</h1><p>Your Score: ${score}/${questions.length}</p>`;
}

showNextQuestion();
