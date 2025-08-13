let loveNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = Number(input.value);

  animateButton("guessBtn");

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "💔 Please enter a number between 1 and 100!";
    animateMessage("shake");
    return;
  }

  if (guess === loveNumber) {
    message.textContent = `💖 True Love! You found the number: ${loveNumber}`;
  } else if (guess < loveNumber) {
    message.textContent = "💘 A bit too low, darling!";
  } else {
    message.textContent = "💘 A bit too high, sweetheart!";
  }

  animateMessage("shake");
}

function resetGame() {
  loveNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "🔁 Let's try again, love!";
  animateMessage("shake");
  animateButton("resetBtn");
}

function animateMessage(animation) {
  const msg = document.getElementById("message");
  msg.classList.remove(animation);
  void msg.offsetWidth;
  msg.classList.add(animation);
}

function animateButton(buttonId) {
  const btn = document.getElementById(buttonId);
  btn.classList.remove("clicked");
  void btn.offsetWidth;
  btn.classList.add("clicked");
}

// Background heart generator
function createHearts() {
  const container = document.querySelector(".heart-background");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 10000);
  }, 300);
}

createHearts();
