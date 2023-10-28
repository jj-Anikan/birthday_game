// Function to display "Happy Birthday" message and confetti animation
function showBirthdayMessage() {
  const happyBirthdayMessage = document.getElementById("happy-birthday-message");
  happyBirthdayMessage.classList.remove("hidden");
  
  // Generate and animate confetti
  for (let i = 0; i < 50; i++) {
    createConfetti();
  }
}

// Function to create and animate a confetti element
function createConfetti() {
  const colors = ["red", "blue", "green"];
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
  confetti.style.animation = `fall 3s linear ${Math.random() * 2 + 1}s infinite`;

  document.body.appendChild(confetti);
}
