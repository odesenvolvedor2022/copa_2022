funcionamento = "Rodando JavaScript...";

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

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>${games}</ul>
  </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="assets/logo.svg" alt="logo da copa 2022" />
</header>
<main class="cards">
  ${createCard("20/11","domingo",
    createGame("catar","equador","13:00")
  )}
  ${createCard("21/11","segunda", 
    createGame("inglaterra","iran","10:00")+
    createGame("senegal","holanda","13:00")+
    createGame("estados unidos","gales","16:00")
  )}
</main>
`
