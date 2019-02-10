var tabGlobal = [];
//fonction qui va filtrer si un id n'est pas de le tableau il l'ajout sinon il le retire
function toggleFilter(event) {
  console.log(event.data("value"));
  if (tabGlobal.indexOf(event.data("value")) != -1) {
    tabGlobal.splice(tabGlobal.indexOf(event.data("value")), 1);
    /*splice coupe un bout du tableau on lui dis
      de coupé a partir de l'index de la valeur trouvé et d'enlevé un element*/
    event.removeClass("active");
  } else {
    tabGlobal.push(event.data("value")); // je push la data value défini plus bas ligne 58
    event.addClass("active");
  };
  console.log(tabGlobal);
}
/*le .on ne s'attache pas sur des element non crée au chargement de la page (dynamique)
j'attache le on sur liste-checkbox et en second argument 
on met la class sur lequel doit réelement s'attacher
ancienement .delegate */
$('.liste-checkbox').on('click', ".liste", function (event) {
  toggleFilter($(event.target));
  /* event est un object qui représente le contexte de l'evenement (ce qui s'est passé, quand, comment etc) 
      et event.target ca "cible" l'element  qui a declenché l'event*/
  document.querySelector("#film").innerHTML = ""; //je met la div id film a 0;
  $.when(ajax1()).done(function (a1) {
    affichage(a1);
  });
});
//requete ajax
function ajax1() {
  return $.ajax({
    url: "https://api.themoviedb.org/3/discover/movie",
    method: 'GET',
    data: {
      api_key: "bbad9d275376358a8c117caf83f0cba0",
      language: "fr-FR",
      with_genres: tabGlobal.toString(),
    },
  })
};
// fonction qui permet l'affichage d'une liste de filtres
function filtreListe() {
  $.ajax({
    url: "https://api.themoviedb.org/3/genre/movie/list",
    method: 'GET',
    data: {
      api_key: "bbad9d275376358a8c117caf83f0cba0",
      language: "fr-FR"
    },
    success: function (filtres) {
      let selectList = document.createElement('ul');
      selectList.id = "filtre";
      filtres.genres.forEach(element => {
        let box = document.createElement('li');
        box.classList.add("liste");
        box.textContent = element.name;
        box.setAttribute("data-value", element.id);
        selectList.appendChild(box);
      });
      document.querySelector(".liste-checkbox").appendChild(selectList);
    }
  });
};

function affichage(movies) {
  movies.results.forEach(function (element, index) {
    article = document.createElement('figure');
    //lien
    let lien = document.createElement('a');
    lien.href = `unFilm.html?idDeFilm=${element.id}`;
    // texte
    para = document.createElement('figcaption');
    para.textContent = element.title;
    para.classList = 'titre';
    desc = document.createElement('figcaption');
    desc.className = 'description';
    desc.textContent = element.overview;
    // image
    img = document.createElement('img');
    img.src = "https://image.tmdb.org/t/p/w200" + element.poster_path;
    img.className = 'uneImage';
    5
    article.onmouseenter = function () {
      this.querySelector('.uneImage').classList = 'uneImage animate-opacity-img';
      this.querySelector('.description').classList = 'description animate-opacity-text';
      this.querySelector('.titre').classList = 'titre animate-opacity-text';
    };
    article.onmouseleave = function () {
      this.querySelector('img').classList = 'uneImage animate-opacity-text';
      this.querySelector('.description').classList = 'description animate-opacity-img';
      this.querySelector('.titre').classList = 'titre animate-opacity-img';
    };
    article.appendChild(img);
    article.className = 'taille';
    article.appendChild(para);
    article.appendChild(desc);
    lien.appendChild(article);
    document.querySelector('#film').appendChild(lien);
  });
};

$.when(ajax1()).done(function (a1) { //a1 pointe sur ajax1()
  affichage(a1);
});
filtreListe();