/* var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR&sort_by=with_genres=18%26primary_release_year=2014&include_adult=true&include_video=true&page=2');
xhr.onload = function() {
    if (xhr.status === 200) {
        var e =JSON.parse(xhr.responseText);
        console.log('coucou');
        e.results.forEach(element =>{
            let article = document.createElement('article');
            let para = document.createElement('p');
            para.textContent="titre"+element.title;
            article.appendChild(para);
            document.querySelector('#film').appendChild(article);
        })
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
}; */
/* https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=en-US&include_adult=false&include_video=false&page=1&with_genres=28 */


function toggleFilter(event) {
  console.log(event.data("value"));
  if (tabGlobal.indexOf(event.data("value"))!=-1) {
    tabGlobal.splice(tabGlobal.indexOf(event.data("value")), 1);
    /*splice coupe un bout du tableau on lui dis
      de coupé a partir de l'index de la valeur trouvé et d'enlevé un element*/
  event.removeClass("active");
  } else {
    tabGlobal.push(event.data("value"));
    event.addClass("active");
  };
  console.log(tabGlobal);
}

var tabGlobal = [];
/*le .on ne s'attache pas sur des element non crée au chargement de la page (dynamique)
j'attache le on sur liste-checkbox et en second argument 
on met la class sur lequel doit réelement s'attacher
ancienement .delegate */
$('.liste-checkbox').on('click', ".liste", function (event) {
    toggleFilter($(event.target));
  document.querySelector("#film").innerHTML = ""; //je met la div id film a 0;
  $.when(ajax1(tabGlobal)).done(function (a1) {
    affichage(a1);
  });
});

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

function filtre() {
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
  })
}

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

$.when(ajax1()).done(function (a1) {
  affichage(a1);
});
filtre();