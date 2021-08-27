let animeAPI = "https://api.jikan.moe/v3/season/2021/spring";

let objetoAnimes = [
    
    { foto : "koe.jpg",    nome : "Koe no katachi"},
    { foto : "naruto.jpg", nome : "naruto"},
    { foto : "sword.jpg",  nome:  "Sword Art Online"},
    { foto : "code.png",   nome : "Code Geass"},
    { foto : "one.jpg",    nome : "One Push Man"},
    { foto : "demon.jpg",  nome:  "Demon Slayer"}
];


function MontarCartao(foto, nome){
    
    let cartao = "";   
    cartao += "<div class='cartao'>";
    cartao += "<img src='img/" + foto + "'>";
    cartao += nome;
    cartao += "</div>";
    return cartao;
}

function CarregarAnimes() {
    
    let listaAnimes = document.querySelector(".lista-animes");
    let conjuntoDeCartoes = "";
    
    
    objetoAnimes.forEach(animeAtivo => {
        conjuntoDeCartoes += MontarCartao(animeAtivo.foto, animeAtivo.nome);
    });
    listaAnimes.innerHTML = conjuntoDeCartoes;

}
window.onload = function () {
    CarregarAnimes();
=======
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
>>>>>>> 1f0fef7e3c98edf527390b3e8b76284f2ff2f45f
}