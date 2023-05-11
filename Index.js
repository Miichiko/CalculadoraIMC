// Aqui farei a CalculadadoraIMC
const imcbutton = document.querySelector("#imcbutton");
const teclas = document.querySelector(".teclas");
const visor = document.querySelector(".visorresultado");

function tela(exibir) {
  visor.textContent = exibir;
}

imcbutton.addEventListener("click", () => {
  if (teclas.classList[0] === "teclas") {
    let teclasNumero = document.querySelectorAll(".botao");
    for (let i = 0; i < teclasNumero.length; i++) {
      teclasNumero[i].style.display = "none";
    }
    teclas.classList.remove("teclas");
    teclas.classList.add("formulario");
    const formulario = document.querySelector(".formulario");
    // FORM
    let form = document.createElement("form");
    formulario.appendChild(form);
    // DIV
    let div1 = document.createElement("div");
    form.appendChild(div1);
    let label1 = document.createElement("label");
    label1.textContent = "Peso";
    div1.appendChild(label1);
    let input1 = document.createElement("input");
    input1.classList = "input1";
    div1.appendChild(input1);
    // DIV
    let div2 = document.createElement("div");
    form.appendChild(div2);
    let label2 = document.createElement("label");
    label2.textContent = "Altura";
    div2.appendChild(label2);
    let input2 = document.createElement("input");
    input2.classList = "input2";
    div2.appendChild(input2);
    // FIGURE
    let figure = document.createElement("figure");
    form.appendChild(figure);
    let button1 = document.createElement("button");
    button1.classList = "apagar";
    button1.textContent = "Apagar";
    figure.appendChild(button1);
    let button2 = document.createElement("button");
    button2.classList = "calcular";
    button2.textContent = "Calcular";
    figure.appendChild(button2);
    let button3 = document.createElement("button");
    button1.classList = "voltar";
    button3.textContent = "Voltar para calculadora";
    figure.appendChild(button3);

    let voltarCalc = document.querySelector(".voltar");

    let calcular = document.querySelector(".calcular");
    calcular.addEventListener("click", (e) => {
      e.preventDefault();

      let form1 = document.querySelector(".input1");
      let peso = form1.value;
      let form2 = document.querySelector(".input2");
      let altura = form2.value;

      //AQUI VOCÊ VAI FAZER AS CONTAS, ONDE a variável peso é o que o cara digitou no peso, e a altura é o que o cara digitou na altura, vai jogar dentro de resultado

      let resultado = peso * altura;
      tela(resultado);
    });

    return voltarCalc;
  }
});

{
}
if (teclas.classList[0] === "formulario") {
  voltarCalc.addEventListener("click", () => {
    for (let i = 0; i < teclasNumero.length; i++) {
      teclasNumero[i].style.display = "block";
    }
    teclas.classList.remove("formulario");
    teclas.classList.add("teclas");
  });
}

const calculo_da_michiko = 10;
