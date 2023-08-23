// carrega os elementos da DOM
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

// foreach executa uma função para cada item do array
buttons.forEach((btn) => {
  // os itens listados do li são testados se houve click
  btn.addEventListener("click", (e) => {
    // remove o selected do elemento que estiver selecionado
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    const button = e.target;
    const id = button.getAttribute("id");

    // adicionando o selected ao item saldo do target clicado
    button.querySelector(".color").classList.add("selected");

    // adicionei a classe changing
    image.classList.add("changing");
    // aqui eu troco a imagem pelo id que representa a cor do modelo selecionado
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
