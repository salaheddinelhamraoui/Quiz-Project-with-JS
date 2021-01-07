const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const score_html = document.querySelector('#score_div');
const score_value = document.querySelector('#score');

form.addEventListener('submit', e => {
    e.preventDefault();

let score = 0;
const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
        score+= 25;
    }
    score_value.textContent = score + '%';
    score_html.classList.remove("d-none");
});

console.log(score);

});