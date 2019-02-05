/* console.log("salut");

let titre = "titre";
let realisateur = "Un realisateur";
let dateDeSortie = "Date de sortie";
let synopsis = "un synopsis";
let nbEntrees = 1000;

//creation d'un objet json qui s'appel film normalement en fichier a part
let filmJson = {
    titre: "titre",
    realisateur: "realisateur",
    dateDeSortie: "Date de sortie",
    synopsis: "un synopsis",
    nbEntrees: 1000
}; */

let films = [{
        titre: "titre 1",
        realisateur: "realisateur 1",
        dateDeSortie: "Date de sortie 1",
        synopsis: "un synopsis1",
        nbEntrees: 1000
    },
    {
        titre: "titre 2",
        realisateur: "realisateur 2",
        dateDeSortie: "Date de sortie 2",
        synopsis: "un synopsis 2",
        nbEntrees: 2000
    },
    {
        titre: "titre 3",
        realisateur: "realisateur 3",
        dateDeSortie: "Date de sortie 3",
        synopsis: "un synopsis 3",
        nbEntrees: 3000
    }
];
let filmFiltre = films.filter(films => films.nbEntrees>=1500);
console.log(filmFiltre);

var e = filmFiltre.reduce(function(accumulateur, valeurCourante){
return  accumulateur.nbEntrees+valeurCourante.nbEntrees;
}); 
console.log("je suis la"+e);
/* const reducer = (accumulator, currentValue) => accumulator + currentValue.nbEntrees;
console.log(films.reduce(reducer,0)); */
for(let i =0; i<films.length;i++){
    console.log(films[i].titre);
}
var test=0;
for (var i = 0; i<films.length;i++){
    test += films[i].nbEntrees;
}
console.log(test);
//document.querySelector(".film").innerHTML+=films[0].titre;

let count = 0;
function element(film){
    var elLi = document.createElement('div');
    elLi.classList.add('film');
    elLi.id='regis'+count;
    elLi.appendChild(addAttr(film.titre));
    elLi.appendChild(addAttr(film.realisateur));
    elLi.appendChild(addAttr(film.dateDeSortie));
    elLi.appendChild(addAttr(film.synopsis));
    elLi.appendChild(addAttr(film.nbEntrees));
  /*   var attr = document.createAttribute('onclick')
    elLi.setAttribute('onclick'); */
    document.querySelector('.liste-film').appendChild(elLi);
    count++;
}

function addAttr(p){
    var parametre = document.createElement('div');
    parametre.innerHTML +=p;
    return parametre;
}
for(film of films){
    element(film);
}