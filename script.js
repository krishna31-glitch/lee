function startCelebration() {
    document.getElementById("message").style.display = "block";
    document.getElementById("music").play();
    createConfetti();
  }
  
  function createConfetti() {
    const container = document.getElementById("confetti-container");
  
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
  
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        `hsl(${Math.random() * 180}, 100%, 50%)`;
      confetti.style.animationDuration = 
        Math.random() * 5 + 6 + "s";
  
      container.appendChild(confetti);
  
      setTimeout(() => {
        confetti.remove();
      }, 100000);
    }
  }