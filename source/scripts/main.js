document.addEventListener("DOMContentLoaded", function () {
  let treinadoresArray = [];
  let treinadores = "";
  let kanto = ["Charmander", "Bulbasaur", "Squirtle"];
  let pokeRandom = "";

  const prosseguir = document.getElementById("prosseguir");

  document
    .getElementById("form-treinadores")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      if (treinadoresArray.length === 3) {
        document.querySelector(".error-table").style.display = "block";
        setTimeout(function () {
          document.querySelector(".error-table").style.display = "none";
        }, 3000);
      } else {
        let nome = document.getElementById("nome-treinador").value;
        treinadoresArray.unshift(nome);
        let adicionarTreinadores = "<tr>";
        adicionarTreinadores += `<td>#${treinadoresArray.length}</td>`;
        adicionarTreinadores += `<td>${nome}</td>`;
        adicionarTreinadores += "</tr>";
        treinadores += adicionarTreinadores;

        document.getElementById("tabela-treinadores").innerHTML = treinadores;

        document.querySelector(".error").style.display = "none";
        document
          .getElementById("nome-treinador")
          .classList.remove("input-error");

        document.getElementById("nome-treinador").value = "";
      }
    });

  prosseguir.addEventListener("click", function () {
    if (treinadoresArray.length === 0) {
      document.querySelector(".error").style.display = "block";
      document.getElementById("nome-treinador").classList.add("input-error");
    } else {
      document.querySelector(".error").style.display = "none";
      document.querySelector(".error-table").style.display = "none";
      document.getElementById("nome-treinador").classList.remove("input-error");
      for (let i = 0; i < treinadoresArray.length; i++) {
        pokeRandom = Math.random() * kanto.length;
        pokeRandom = Math.floor(pokeRandom);

        alert(
          `Parabéns ao treinador ${treinadoresArray[i]}, o inicial ${kanto[pokeRandom]} te escolheu!`
        );
        kanto.splice(pokeRandom, 1);
      }
      alert("Os iniciais foram recolhidos. Que sua aventura comece!");
      location.reload();
    }
  });

  document
    .getElementById("prosseguir-lg")
    .addEventListener("click", function () {
        if (treinadoresArray.length === 0) {
          document.querySelector(".error").style.display = "block";
          document
            .getElementById("nome-treinador")
            .classList.add("input-error");
        } else {
          document.querySelector(".error").style.display = "none";
          document.querySelector(".error-table").style.display = "none";
          document
            .getElementById("nome-treinador")
            .classList.remove("input-error");
          for (let i = 0; i < treinadoresArray.length; i++) {
            pokeRandom = Math.random() * kanto.length;
            pokeRandom = Math.floor(pokeRandom);

            alert(
              `Parabéns ao treinador ${treinadoresArray[i]}, o inicial ${kanto[pokeRandom]} te escolheu!`
            );
            kanto.splice(pokeRandom, 1);
          }
          alert("Os iniciais foram recolhidos. Que sua aventura comece!");
          location.reload();
        }
     
    });
});
