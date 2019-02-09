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
function ajax1(){
  return $.ajax({
    url : "https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR",
    success: function (video) {
    }
  })
};

$.when(ajax1()).done(function(movies){
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
    img.className = 'uneImage';5
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
});