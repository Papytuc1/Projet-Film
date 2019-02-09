let params = new URLSearchParams(document.location.search); //document point sur la page, location sur l'url, et search sur ce qu'il y'a apres  le ?
let idFilm = params.get("idDeFilm");
console.log('salut');

// ici une fonction qui return une requete ajax entiére donc qui return les data le succes et des donné tierse
function ajax1() {
    return $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idFilm}?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function (result) {}
    })
};

function ajax2() {
    return $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function (credits) {}
    })
};

function ajax3() {
    return $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idFilm}/videos?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function (video) {}
    })
};

function ajax4() {
    return $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idFilm}/recommendations?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR`,
        success: function (recommendations) {}
    })
};
/*une fonction qui s'occupe de l'affichage , .when: quand fonction qui contiennent les requete ajax sont effectuer
.done :exectue la fonction d'affichage, les requete ajax renvoi un tableau de 3 elements les data sont en index 0
d'ou les args[0] dans la fonction*/
$.when(ajax1(), ajax2(), ajax3(), ajax4()).done(function (movie, credits, video, recommendations) {
    //AFFICHAGE DU FILM
    document.querySelector("title").textContent=movie[0].title;
    //image
    let img = document.createElement('img');
    img.className = 'uneImage';
    img.src = "https://image.tmdb.org/t/p/w500" + movie[0].poster_path;
    //texte
    let syno = document.createElement('article');
    syno.className = 'synopsis';
    syno.textContent = movie[0].overview;
    //titre
    let titre = document.createElement('h1');
    titre.className = 'titre-h1';
    titre.textContent = movie[0].title;
    //sous titre
    $("aside").append(img);
    $("#unFilm").append(titre);
    $("#unFilm").append(syno);
    //AFFICHAGE DES ACTEURS
    //container de la liste
    let container = document.createElement('div');
    container.className = 'containerDetail';
    //container de l'ul
    let containerUl = document.createElement('div');
    containerUl.className = 'containerUl';
    //ul
    console.log(credits);
    let liste = document.createElement('ul');
    liste.className = 'liste-acteur';
    //sous titre
    let subtitle = document.createElement('h2');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Acteurs';
    credits[0].cast.forEach(function (element, index) {
        if (index >= 0 && index <= 5) {
            //liste d'un acteur
            let unActeur = document.createElement('li');
            unActeur.className = "un-acteur"
            unActeur.textContent = element.name;
            //image d'un acteur
            let imgActeur = document.createElement('img');
            imgActeur.className = "imgActeur";
            imgActeur.src = "https://image.tmdb.org/t/p/w200" + element.profile_path;
            unActeur.appendChild(imgActeur);
            liste.appendChild(unActeur);
            console.log(element.name);
        };
    });
    containerUl.appendChild(liste);
    container.appendChild(subtitle);
    container.appendChild(containerUl);
    document.querySelector('#unFilm').appendChild(container);
    //AFFICHAGE DU TRAILER
    //container de l'iframe
    let divIframe = document.createElement('div');
    divIframe.className = 'trailer';
    //trailer
    var trailer = document.createElement('iframe');
    trailer.setAttribute('allowFullScreen', '');
    try{
    trailer.src = "https://www.youtube.com/embed/" + video[0].results[0].key;
    }
    catch{
        console.log("error");
    };
    divIframe.appendChild(trailer);
    document.querySelector(".containerUl").appendChild(divIframe);

    //RECOMENDATION
    console.log(recommendations[0].results)
    recommendations[0].results.forEach(function (element, index) {
        if (index < 9) {
            //lien
            let lien = document.createElement('a');
            lien.href = `unFilm.html?idDeFilm=${element.id}`;
            //div container
            let carouselContainer = document.createElement("div");
            carouselContainer.className = "carouselContainer";
            //image
            let carouselImg = document.createElement("img");
            carouselImg.className = "carouselRecomendation";
            carouselImg.src = "https://image.tmdb.org/t/p/w200" + element.poster_path;
            lien.appendChild(carouselImg);
            carouselContainer.appendChild(lien);
            $(".carousel").append(carouselContainer);
        }
    })
});
//rotation carousel
var carousel = document.querySelector('.carousel');
var count = 9;
var index = 0;

function rotateCarousel() {
    var angle = index / count * -360;
    carousel.style.transform = 'translateZ(-144px) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous');
prevButton.addEventListener('click', function () {
    index--;
    rotateCarousel();
});

var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function () {
    index++;
    rotateCarousel();
});