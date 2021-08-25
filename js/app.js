function CarregarAnimes () {
    let objetoAnimes = [
         {
            foto : "koe_no_katachi.jpg", 
            nome : "Koe no katachi"
         },
         {
             foto : "naruto.jpg",
             nome : "naruto"
         },
         {
             foto: "sword.jpg",
             nome: "Sword Art Online"
         }
    ];

    let listaAnimes = document.querySelector(".lista-animes");
    let cartao = "";
    for (let i = 0; i < objetoAnimes.length; i++) {
    cartao += "<div class='cartao'>";
    cartao += "<img src='img/" + objetoAnimes[i].foto + "'>";
    cartao += objetoAnimes[i].nome;
    cartao += "</div>";
    }
    listaAnimes.innerHTML = cartao;
}

window.onload = function () {
    CarregarAnimes();
}