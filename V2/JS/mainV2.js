var films = [{
        titre: "le seigneur des anneaux",
        realisateur: "peter jackson",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2003",
        synopsis: "c'est trop trop bien",
        nbEntrees: 300909
    },
    {
        titre: "la cite de la peur",
        realisateur: "alain berberian",
        acteurs: ["regis", "son frere", "jean-charles"],
        /* acteurs : [{prenom : "regis", nom : "gisre"},
                  {prenom : "jean", nom:"charles"}], */
        dateDeSortie: "1994",
        synopsis: "c'est trop trop  super bien",
        nbEntrees: 2007690006
    },
    {
        titre: "Harry potter",
        realisateur: "J.K Rowling",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2010",
        synopsis: "bim bi BIM",
        nbEntrees: 20000000
    },
    {
        titre: "Harry potter",
        realisateur: "J.K Rowling",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2010",
        synopsis: "bim bi BIM",
        nbEntrees: 20000000
    },
    {
        titre: "Harry potter",
        realisateur: "J.K Rowling",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2010",
        synopsis: "bim bi BIM",
        nbEntrees: 20000000
    },
    {
        titre: "Harry potter",
        realisateur: "J.K Rowling",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2010",
        synopsis: "bim bi BIM",
        nbEntrees: 20000000
    },
    {
        titre: "Harry potter",
        realisateur: "J.K Rowling",
        acteurs: ["regis", "son frere", "jean-charles"],
        dateDeSortie: "2010",
        synopsis: "bim bi BIM",
        nbEntrees: 20000000
    },
];


/* films.forEach(element => {

    let filmSelection = document.getElementById('film');

    filmSelection.innerHTML += `<p> titre du film: ${element.titre}</br>
                                Réalisateur: ${element.realisateur}</br>
                                Nombre d'entrée vendu: ${element.nbEntrees}</br>                                  
                                Synopsis du film: ${element.synopsis}</br>
                                Date de sortie: ${element.dateDeSortie}</p>`;
}); */

/* let button = document.createElement('button');
button.textContent ='un bouton';
button.onclick=function(){
    alert('ici un bouton');
}; */
/* document.querySelector('#film').appendChild(button); */
{
    /* <button onclick= "alert('${unFilm.acteurs}')">acteur</button> */ }
films.forEach(function (unFilm) {
    let filmHtml = `<div class="un-film"><p> titre du film: ${unFilm.titre}</p>
    <p> Réalisateur: ${unFilm.realisateur}</p>
    <p>  Nombre d'entrée vendu: ${unFilm.nbEntrees}</p>                                  
    <p> Synopsis du film: ${unFilm.synopsis}</p>
    <p> Date de sortie: ${unFilm.dateDeSortie}</p>
    </div>`;
    document.getElementById('film').insertAdjacentHTML("beforeend", filmHtml);
});


let regis = document.querySelectorAll('.un-film');
regis.forEach(function (element, index) {
    let button = document.createElement('button');
    button.textContent = "Acteurs";
    button.onclick = function () {
        alert(films[index].acteurs);
    };
    element.appendChild(button);
});
document.getElementById('film').insertAdjacentHTML("beforebegin", "<h1>Les Films</h1>")
document.getElementById('film').insertAdjacentHTML("afterend", "<span id='copy'>@Copyright</span>");
document.getElementById('copy').insertAdjacentHTML("afterbegin", "<span>&copy;</span>");
document.getElementById('copy').insertAdjacentText("beforeend", "nom de société");
let test = document.createElement('h2');
test.textContent = 'un sous titre';
test.className = "sousTitre";
test.onmouseenter = function () {
    this.style.cursor = 'grab';
    this.style.color = 'red';
};
test.onmouseleave = function () {
    this.style.color = 'black';
}
/* test.style.color='red'; */
test.onclick = function () {
    this.classList.toggle("red");
};
document.querySelector('h1').insertAdjacentElement("afterend", test);
//bbad9d275376358a8c117caf83f0cba0

/* for(i = 2;i<600;i++){
feteDesFleurs(i);
} */
/* feteDesFleurs(542);

function feteDesFleurs(idDeFilm){
$.ajax({
    url: "https://api.themoviedb.org/3/movie/"+idDeFilm+"?api_key=bbad9d275376358a8c117caf83f0cba0",
    success: function(result){
        $("#div1").html(result);
        console.log(result);
  }}
  );
}; */
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var e = this;
          e = JSON.parse(this.responseText);
        console.log(e);
      }
    };
    xhttp.open("GET", "https://api.themoviedb.org/3/discover/movie?api_key=bbad9d275376358a8c117caf83f0cba0&language=fr-FR&sort_by=with_genres=18%26primary_release_year=2014&include_adult=true&include_video=true&page=2", true);
    xhttp.send();
   
  };
function addFilm(unFilm){
    let filmHtml = `<div class="un-film"><p> titre du film: ${unFilm.titre}</p>
    <p> Réalisateur: ${unFilm.realisateur}</p>
    <p>  Nombre d'entrée vendu: ${unFilm.nbEntrees}</p>                                  
    <p> Synopsis du film: ${unFilm.synopsis}</p>
    <p> Date de sortie: ${unFilm.dateDeSortie}</p>
    </div>`;
    document.getElementById('film').insertAdjacentHTML("beforeend", filmHtml);
}
