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
}