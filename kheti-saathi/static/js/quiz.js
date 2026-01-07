let score = 0;

function selectOption(i) {
  if (i === quiz[index].answer) {
    score++;
    alert("Correct ✅");
  } else {
    alert("Wrong ❌");
  }
}

function submitQuiz() {
  fetch("/submit-quiz", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      score: score,
      total: quiz.length
    })
  });
}
