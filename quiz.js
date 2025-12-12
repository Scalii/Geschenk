document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const answerInput = document.getElementById("answerInput");
  const errorMsg = document.getElementById("errorMsg");

  function checkAnswer() {
    const answer = answerInput.value.trim().toLowerCase();
    if (answer === "bpe") {
      // Redirect to the gift page when the answer is correct
      window.location.href = "gift.html";
    } else {
      // Show an error message if the answer is incorrect
      errorMsg.classList.remove("hidden");
      answerInput.classList.add("error");
    }
  }

  // Attach event listener to the submit button
  submitBtn.addEventListener("click", function () {
    checkAnswer();
  });

  // Allow pressing Enter in the input field to submit the answer
  answerInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkAnswer();
    }
  });
});
