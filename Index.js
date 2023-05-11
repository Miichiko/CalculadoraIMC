// Aqui farei a CalculadadoraIMC
const imcbutton = document.querySelector("#imcbutton");

const teclas = document.querySelector(".teclas");

imcbutton.addEventListener("click", () => {
  if (teclas.classList[0] === "teclas") {
    // teclas.classList[0] = "formulario"; aqui ta errado
  }
});
