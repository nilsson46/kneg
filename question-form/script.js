const form = document.getElementById('surveyForm');
const nextButton = document.getElementById('nextButton');
const questions = document.querySelectorAll('.question');

let currentQuestionIndex = 0;

function showQuestion(index) {
    questions.forEach((question, idx) => {
        if (idx === index) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}
//TODO Change to next question when a button is clicked?
nextButton.addEventListener('click', () => {
    const selectedInputs = questions[currentQuestionIndex].querySelectorAll('input[type="checkbox"]:checked');
    
    if (selectedInputs.length > 0) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            alert('Survey complete!'); // You can replace this with desired completion action
        }
    } else {
        alert('Please select an option.'); // You can customize this message
    }
});

showQuestion(currentQuestionIndex);