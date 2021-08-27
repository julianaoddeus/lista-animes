function ConsultaAPI() {
    const animeAPI = "https://api.jikan.moe/v3/season/2021/spring";
    let objetoAnimes = [];

    $.ajax({
        url: animeAPI,
        async: false,
        success : function(dados){
            objetoAnimes = dados.anime;
           
        }
    });
    return objetoAnimes;
}



// let objetoAnimes = [
    
//     { foto : "koe.jpg",    nome : "Koe no katachi"},
//     { foto : "naruto.jpg", nome : "naruto"},
//     { foto : "sword.jpg",  nome:  "Sword Art Online"},
//     { foto : "code.png",   nome : "Code Geass"},
//     { foto : "one.jpg",    nome : "One Push Man"},
//     { foto : "demon.jpg",  nome:  "Demon Slayer"}
// ];


function MontarCartao(foto, nome){
    
    let cartao = "";   
    cartao += "<div class='cartao'>";
    cartao += "<img src='" + foto + "'>";
    cartao += nome;
    cartao += "</div>";
    return cartao;
}

function CarregarAnimes() {
    
    let listaAnimes = document.querySelector(".lista-animes");
    let conjuntoDeCartoes = "";
    let todosAnimes = ConsultaAPI();
    
    todosAnimes.forEach(animeAtivo => {
        conjuntoDeCartoes += MontarCartao(animeAtivo.image_url, animeAtivo.title);
    });
    listaAnimes.innerHTML = conjuntoDeCartoes;

}

window.onload = function () {
    CarregarAnimes();

 }