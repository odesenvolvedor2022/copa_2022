funcionamento = "Rodando JavaScript...";

function setLogo(){

}

function createGame(player1, player2, hour){
  return `
  <li>
    <img
      class="bandeira"
      src="assets/bandeira/${player1}.svg"
      alt="Bandeira do ${player1}"
    />
    <strong>${hour}</strong>
    <img
      class="bandeira"
      src="assets/bandeira/${player2}.svg"
      alt="Bandeira do ${player2}"
    />
  </li>
  `;
};

let delay = -0.25
function createCard(date, day, games) {
  delay += 0.25
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>${games}</ul>
  </div>
  `
}

document.querySelector(".cards").innerHTML = 
createCard("20/11","domingo",
  createGame("catar","equador","13:00")
)+
createCard("21/11","segunda", 
  createGame("inglaterra","iran","10:00")+
  createGame("senegal","holanda","13:00")+
  createGame("estados unidos","gales","16:00")
);

let body = document.querySelector("body");
let classBody = body.getAttribute("class");
let logo = document.querySelector(".logo");

let setCor = document.querySelectorAll(".cor_tema");

function mostrarCor(cor){
  logo.setAttribute("src", `assets/logo/logo_${cor}.svg`);
  trocarCorBody(cor);

  for(let i = 0; i < setCor.length; i++){
    setCor[i].classList.remove("oculto");
  }
  document.getElementById(cor).classList.add("oculto");
}

function trocarCorBody(classe){
  body.classList.remove(classBody);
  body.classList.add(classe);
  classBody = classe
}

