const modal = document.getElementById("gameModal");
const gameFrame = document.getElementById("gameFrame");
const closeBtn = document.getElementById("closeModal");

// Abre modal ao clicar no botão OU no article inteiro
document.querySelectorAll(".game-01, #btn-jogo-portugues").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    gameFrame.src = "games/game01/index.html";
    modal.style.display = "flex";
  });
});

// Fechar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  gameFrame.src = "";
});

// Fechar ao clicar fora
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    gameFrame.src = "";
  }
});
