const correctAnswers = ['A', 'A', 'B', 'B', 'A'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value
  ];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  // show result on page
  scrollTo(0, 0);

  result.classList.remove('d-none');

  // add animation
  let output = 0;

  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  // if the score is 100

  if (score === 100) {
    setTimeout(() => {
      result.querySelector('div:nth-child(1)').classList.remove('d-none');
    }, 2000);
  } else {
    result.querySelector('div:nth-child(1)').classList.add('d-none');

    // try again
    setTimeout(() => {
      result.querySelector('button').classList.remove('d-none');
    }, 1000);
    result.querySelector('button').addEventListener('click', () => {
      result.classList.add('d-none');
      location.reload();
      scrollTo(0, 200);
    });
  }
});
