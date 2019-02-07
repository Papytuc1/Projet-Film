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
let article;
let para;
let img;
let div;
let idDeFilm = [];

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let e = JSON.parse(this.responseText);
      console.log(e);
      e.results.forEach(function (element, index) {
        idDeFilm[index] = element.id;
        article = document.createElement('article');
        //lien
        let lien = document.createElement('a');
        lien.href = `unFilm.html?idDeFilm=${element.id}`;
        // texte
        para = document.createElement('p');
        para.textContent = element.title;
        para.classList = 'titre';
        desc = document.createElement('p');
        desc.className = 'description';
        desc.textContent = element.overview;
        // image
        img = document.createElement('img');
        img.src = "https://image.tmdb.org/t/p/w200" + element.poster_path;
        img.className = 'uneImage';5
        article.onmouseenter = function () {
          this.querySelector('img').classList = 'animate-opacity-img';
          this.querySelector('.description').classList = 'description animate-opacity-text';
          this.querySelector('p').classList = 'titre animate-opacity-text';
        };
        article.onmouseleave = function () {
          this.querySelector('img').classList = 'animate-opacity-text';
          this.querySelector('.description').classList = 'description animate-opacity-img';
          this.querySelector('p').classList = 'titre animate-opacity-img';
        };
        article.appendChild(img);
        article.className = 'taille';
        article.appendChild(para);
        article.appendChild(desc);
        lien.appendChild(article);
        document.querySelector('#film').appendChild(lien);
      });
    };
  };
  xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR", true);
  xhttp.send();

};
console.log(idDeFilm);